import { AuthenticationError, IResolvers } from 'apollo-server';
import models, { schemas } from './models';
import { createToken } from './utils/auth';

const resolvers: IResolvers = {
  Query: {
    me: async (parent, args, ctx, info) => {
      const user: any = await models.User.findOne({ id: ctx.user.id });

      if (user.id !== ctx.user.id) {
        throw new AuthenticationError('Invalid credentials, please try again');
      }

      return user;
    },
  },
  Mutation: {
    me: async (parent, args, ctx, info) => {
      const { input } = args;
      const { picture, ...rest } = input;
      const existing = await models.User.findOne({
        email: input.email,
      });

      if (existing) {
        throw new AuthenticationError('Invalid credentials, please try again');
      }

      const user = await models.User.createOne({ avatar: picture, ...rest });

      const token = createToken(user);

      return { token, ...user };
    },
    signin: async (parent, args, { user }, info) => {
      let userFromContext, createdUser, foundUser;
      const { email, password } = args.input;

      if (user) {
        // LOGGING IN:
        // user information is already fetched higher up in graph server context!!
        // We just need to test the password

        try {
          const match = await user.checkPassword(password);
          if (!match) {
            throw new Error('Auth1 Error');
          }
        } catch (error) {
          throw new AuthenticationError(
            'Invalid credentials, please try again'
          );
        }
      } else {
        // No User is synonymous with invalid/no auth token. In this case check if this
        // user is in the database
        foundUser = await models.User.findOne({ email });
        const passwordMethod =
          foundUser && (await schemas.User.findOne({ email }));

        const match =
          passwordMethod && (await passwordMethod.checkPassword(password));

        if (!match) {
          throw new Error('Auth2 Error');
        }

        if (!foundUser) {
          // SIGNING UP
          // there will be no user from graph server context we need to create the user
          createdUser = await models.User.createOne(args.input);
        }
      }

      userFromContext = (user && user.toObject()) || null;

      const token = await createToken(
        userFromContext || foundUser || createdUser
      );

      const result = {
        token,
        ...userFromContext,
        ...foundUser,
        ...createdUser,
      };

      // console.log('userFromContext: ', userFromContext);
      // console.log('foundUser: ', foundUser);
      // console.log('createdUser: ', createdUser);
      console.log('result: ', result);
      return result;
    },
    socialSignin: async (parent, args, ctx, info) => {
      let createdUser;
      const { email } = args.input;
      const user: any = await models.User.findOne({ email });

      if (!user) {
        createdUser = await models.User.createOne(args.input);
      }

      const token = await createToken(user || createdUser);

      return { token, ...{ ...user, ...createdUser } };
    },
  },
};

export default resolvers;

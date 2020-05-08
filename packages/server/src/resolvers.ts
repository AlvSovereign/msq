import { AuthenticationError, IResolvers } from 'apollo-server';
import mongoose from 'mongoose';
import models, { schemas } from './models';
import { createToken } from './utils/auth';

const resolvers: IResolvers = {
  Query: {
    artist: async (parent, args, ctx, info) => {},
    me: async (parent, args, ctx, info) => {
      return ctx.user;
    },
  },
  Mutation: {
    artist: async (parent, args, ctx, info) => {
      const { input } = args;
      const { user } = ctx;
      const artist = await models.Artist.createOne({
        ...input,
        owner: user._id,
      });

      return artist;
    },
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
    updateMe: async (parent, args, ctx, info) => {
      const { user } = ctx;
      const { input } = args;

      if (input._id !== user._id) {
        throw new AuthenticationError('Invalid credentials, please try again');
      }

      const { _id, ...rest } = input;
      const me: any = await models.User.findByIdAndUpdate(user._id, rest);
      console.log('me: ', me);
      return me;
    },
  },
  // Artist: {
  //   _id: ({ _id }) => {
  //     console.log('_id: ', _id);
  //     return _id.toString();
  //   },
  // },
};

export default resolvers;

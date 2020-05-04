import { AuthenticationError, IResolvers } from 'apollo-server';
import models from './models';
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
    signin: async (parent, args, ctx, info) => {
      const { email, password } = args.input;
      const { User } = ctx;
      const user: any = await models.User.findOne({ email });

      const token = createToken(user);
      if (password) {
        const match = await User.checkPassword(password);
        console.log('match: ', match);
      }

      return { token, ...user };
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

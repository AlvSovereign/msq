import { AuthenticationError, IResolvers } from 'apollo-server';
import models from './models';
import { createToken } from './utils/auth';

const resolvers: IResolvers = {
  Query: {
    me: (parent, args, ctx, info) => {
      return {
        id: 1,
        email: 'test@test.com',
        name: 'Test Testerton',
        createdAt: '12345',
        verified: false,
        accountType: 'BASIC',
        role: 'FAN',
        alias: 'Testic',
        country: 'GBP',
        settings: {
          id: 'SettingID',
          userId: '1',
          emailNotifications: false,
          pushNotifications: false,
        },
      };
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
  },
};

export default resolvers;

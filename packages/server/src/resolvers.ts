import { IResolvers } from 'apollo-server';
import models from './models';

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
      const input = args.input;
      const user = await models.User.createOne(input);

      return user;
    },
  },
};

export default resolvers;

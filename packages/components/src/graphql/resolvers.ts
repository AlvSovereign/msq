import { ADD_TOKEN_TO_CACHE } from './queries';

const resolvers = {
  Query: {
    socialSignin: async (parent: any, args: any, context: any, info: any) => {
      console.log(999);
    },
    token: async (parent: any, args: any, context: any, info: any) => {
      const { cache } = context;
      const result = cache.readQuery({ query: ADD_TOKEN_TO_CACHE });
      console.log('result: ', result);

      return result;
    },
  },
};

export default resolvers;

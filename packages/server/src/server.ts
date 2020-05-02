import { ApolloServer } from 'apollo-server';
import { RedisCache } from 'apollo-server-cache-redis';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import connect from './connect';
import { getUserFromToken } from './utils/auth';
import { AuthenticationDirective } from './directives';

connect();

const redis = new RedisCache({
  host: '127.0.0.1',
  port: 6379,
});

const server = new ApolloServer({
  resolvers,
  typeDefs,
  // persistedQueries: { cache: redis },
  schemaDirectives: {
    isAuthenticated: AuthenticationDirective,
  },
  cache: new RedisCache({
    host: '127.0.0.1',
    port: 6379,
  }),
  cacheControl: {
    defaultMaxAge: 30,
  },
  context: async ({ req }) => {
    const token: any = req.headers.authorization;
    const user = await getUserFromToken(token);

    return { redis, user };
  },
});

export default server;

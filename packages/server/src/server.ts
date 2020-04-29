import { ApolloServer } from 'apollo-server';
import { RedisCache } from 'apollo-server-cache-redis';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import connect from './connect';

connect();

const redis = new RedisCache({
  host: '127.0.0.1',
  port: 6379,
});

const server = new ApolloServer({
  resolvers,
  typeDefs,
  // persistedQueries: { cache: redis },
  context: () => redis,
});

export default server;

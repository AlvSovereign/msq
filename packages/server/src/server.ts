import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const server = new ApolloServer({ resolvers, typeDefs });
export default server;

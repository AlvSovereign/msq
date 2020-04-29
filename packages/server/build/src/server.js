"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var typeDefs_1 = __importDefault(require("./typeDefs"));
var resolvers_1 = __importDefault(require("./resolvers"));
var server = new apollo_server_1.ApolloServer({ resolvers: resolvers_1.default, typeDefs: typeDefs_1.default });
exports.default = server;

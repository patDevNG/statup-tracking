/* eslint-disable no-console */
const { ApolloServer, gql } = require('apollo-server-express');
const { buildSubgraphSchema } = require('@apollo/federation');
const { applyMiddleware } = require('graphql-middleware');
const { typeDefs, resolvers } = require('../schema/schema.js');

const mutations = require('../mutations');
const queries = require('../queries');

const buildUserContext = ({ req, res } = {}) => {
  const context = {
    req,
    res,
    lang: req.headers['accept-language']
      ? req.headers['accept-language']
      : 'en',
    mutations,
    queries,
  };

  return context;
};
module.exports = (app) => {
  const schema = applyMiddleware(
    buildSubgraphSchema([
      {
        typeDefs: gql(typeDefs),
        resolvers,
      },
    ])
  );
  const server = new ApolloServer({
    schema,
    context: (req) => buildUserContext(req),
    introspection: process.env.GRAPHQL_INTROSPECTION_ENABLED,
    playground: process.env.GRAPHQL_PLAYGROUND_ENABLED,
    formatError: (error) => {
      const message = error.message.replace('Validation error: ', '');

      return {
        ...error,
        message,
      };
    },
    plugins: [],
  });
  server.applyMiddleware({ app });
};

const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const PORT = 4000;

const app = express();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

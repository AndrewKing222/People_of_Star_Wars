const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const StarWarsAPI = require("./datasources/sw-api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    starWarsAPI: new StarWarsAPI(),
  }),
});

const app = express();
server.applyMiddleware({ app });

app.listen(4000, () => console.log("Server started on http://localhost:4000"));

const express = require("express");
const path = require("path");
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

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

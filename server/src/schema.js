const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    allPeople: [Person!]!
    personDetails(id: Int!): Person
  }

  type Person {
    name: String!
    height: String
    mass: String
    gender: String
    homeworld: Planet
  }

  type Planet {
    name: String
  }
`;

module.exports = typeDefs;

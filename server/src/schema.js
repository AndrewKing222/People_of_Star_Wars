const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    allPeople: [Person!]!
    peoplePage(page: Int!): [Person!]!
    peopleSearch(search: String!): [Person!]!
    personDetails(id: Int!): Person
  }

  type Person {
    url: String!
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

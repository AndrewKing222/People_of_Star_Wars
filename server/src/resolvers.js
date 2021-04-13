const resolvers = {
  Query: {
    allPeople: (_, __, { dataSources }) => {
      return dataSources.starWarsAPI.getAllPeople();
    },
    personDetails: (_, { id }, { dataSources }) => {
      return dataSources.starWarsAPI.getPerson(id);
    },
  },
  Person: {
    homeworld: (parent, _, { dataSources }) => {
      return dataSources.starWarsAPI.getHomeworld(parent);
    },
  },
};

module.exports = resolvers;

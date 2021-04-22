const resolvers = {
  Query: {
    allPeople: (_, __, { dataSources }) => {
      return dataSources.starWarsAPI.getAllPeople();
    },
    peoplePage: (_, { page }, { dataSources }) => {
      return dataSources.starWarsAPI.getPeoplePage(page);
    },
    peopleSearch: (_, { search }, { dataSources }) => {
      return dataSources.starWarsAPI.getPeopleSearch(search);
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

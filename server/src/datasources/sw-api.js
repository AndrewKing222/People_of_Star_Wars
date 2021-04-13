const { RESTDataSource } = require("apollo-datasource-rest");

class StarWarsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  async getAllPeople() {
    const response = await this.get("people");
    return response.results;
  }

  async getPerson(id) {
    const response = await this.get(`people/${id}`);
    return response;
  }

  async getHomeworld(parent) {
    const response = await this.get(parent.homeworld);
    return response;
  }
}

module.exports = StarWarsAPI;

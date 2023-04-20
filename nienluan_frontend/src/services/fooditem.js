import CreateAPI from "./api";

class fooditemService {
  constructor(baseUrl = "/api/myrestaurant/fooditems") {
    this.api = CreateAPI(baseUrl);
  }

  async addFood(data) {
    return (await this.api.post("/", data)).data;
  }

  async deleteFood(id){
    return (await this.api.delete(`${id}`));
  }
}

export default new fooditemService();
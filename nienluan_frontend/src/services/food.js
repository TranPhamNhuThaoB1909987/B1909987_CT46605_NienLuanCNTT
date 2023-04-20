import createAPI from "./api";

class foodService {
  constructor(baseUrl = "/api/myrestaurant/food") {
    this.api = createAPI(baseUrl);
  }

  async getAllFoods() {
    return (await this.api.get("/")).data;
  }

  async getFoodByID(id) {
    return (await this.api.get(`/${id}`)).data;
  }
}

export default new foodService();

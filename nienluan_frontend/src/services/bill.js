import createAPI from "./api";

class billService {
  constructor(baseUrl = "/api/myrestaurant/bill") {
    this.api = createAPI(baseUrl);
  }

  async getAllByUserID(id) {
    return (await this.api.get(`${id}`)).data;
  }

  async createBill(id) {
    return (await this.api.post(`/${id}`))
  }

  async deleteBill(id) {
    return (await this.api.delete(`/${id}`))
  }
}

export default new billService();

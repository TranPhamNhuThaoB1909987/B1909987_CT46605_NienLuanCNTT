import createAPI from "./api";

class userService {
  constructor(baseURL = "/api/myrestaurant/user") {
    this.api = createAPI(baseURL);
  }

  async signUp(data) {
    return (await this.api.post("/signup", data)).data;
  }

  async signIn(data) {
    return (await this.api.post("/signin", data)).data;
  }

  async signOut() {
    return await this.api.post("/signout");
  }

  async getUserByID(id) {
    return (await this.api.get(`/${id}`)).data;
  }
}

export default new userService();

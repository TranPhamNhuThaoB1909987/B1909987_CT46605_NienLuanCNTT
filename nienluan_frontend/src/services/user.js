import createAPI from './api';

class userService{
    constructor(baseURL = "/api/myrestaurant/user") {
        this.api = createAPI(baseURL);
    }

    async signUp(data) {
        return (await this.api.post("/signup", data)).data;
    }

    async signIn(data) {
        return (await this.api.post("/signin", data)).data;
    }
}

export default new userService();
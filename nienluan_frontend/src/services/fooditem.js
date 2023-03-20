import CreateAPI from './api';

class fooditemService {
    constructor(BaseURL = 'api/myrestaurant/foodItems') {
        this.api = CreateAPI(BaseURL);
    }

    async addFood(data) {
        return (await this.api.post('/', data)).data;
    }
}

export default new fooditemService;
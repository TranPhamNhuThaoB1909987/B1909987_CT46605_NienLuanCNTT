import axios from 'axios';

const commonconfig = {
    headers: {
        "Conten-Type": "application/json",
        Accept: "application/json"
    },
}

export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonconfig
    })
}
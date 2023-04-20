import axios from "axios";

const commonconfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export default (baseURL) => {
  return axios.create({
    baseURL,
    ...commonconfig,
  });
};

import axios from "axios";
import { BASE_URL } from "../utils/constants";

// const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3001/api";
const baseUrl = BASE_URL + "/";

const api = {
  get: (endpoint) => axios.get(baseUrl + endpoint),
  post: (endpoint, data) => {
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    return axios.post(baseUrl + endpoint, data);
  },
  remove: (endpoint) => axios.delete(baseUrl + endpoint),
};

export default api;

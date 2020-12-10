import axios from "axios";
import { BASE_URL } from "./constants";

axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

axios.auth = () => {
  axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    "token"
  );
};

export default axios;

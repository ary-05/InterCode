import axios from "axios";
import { ENV } from "./env";

const axiosInstance = axios.create({
  baseURL: ENV.API_URL,
  withCredentials: true, //browser will send the cookies to server automatically, on every single req
});

export default axiosInstance;

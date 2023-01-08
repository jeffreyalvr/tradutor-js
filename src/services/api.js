import axios from "axios";

const api = axios.create({
  baseURL: "https://libretranslate.com/",
});

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://goalwise-ai-f8lm.onrender.com/api",
  withCredentials: true,
});

export default api;
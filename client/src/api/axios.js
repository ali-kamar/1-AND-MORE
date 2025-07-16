import axios from "axios";

const instance = axios.create({
  baseURL: "https://one-and-more.onrender.com/api/v1/",
  // baseURL: "http://localhost:10000/api/v1/",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default instance;

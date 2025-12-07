// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050/api", // change to deployed URL later
});

export default api;


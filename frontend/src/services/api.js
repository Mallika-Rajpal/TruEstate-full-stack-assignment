// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://truestate-full-stack-assignment.onrender.com/api", // 🔥 deployed backend
});

export default api;
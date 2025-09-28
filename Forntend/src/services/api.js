import axios from "axios";

const BASE_URL = "http://localhost:5000/api/auth";

export const signupUser = (name, email, password) => {
  return axios.post(`${BASE_URL}/signup`, { name, email, password });
};

export const loginUser = (email, password) => {
  return axios.post(`${BASE_URL}/login`, { email, password });
};

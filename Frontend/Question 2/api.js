// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/api';

export const registerCompanies = async () => {
  const response = await axios.post(`${API_BASE_URL}/register`);
  return response.data;
};

export const fetchProducts = async (company, category) => {
  const response = await axios.get(`${API_BASE_URL}/products`, {
    params: { company, category },
  });
  return response.data;
};

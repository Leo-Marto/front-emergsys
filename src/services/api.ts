import axios from 'axios';

const API_URL = 'https://api.emergsys.com'; // Replace with your actual API URL

export const login = async (email: string, password: string, userType: 'client' | 'installer'): Promise<string> => {
  const response = await axios.post(`${API_URL}/login`, { email, password, userType });
  return response.data.token;
};

export const register = async (name: string, email: string, password: string, userType: 'client' | 'installer'): Promise<void> => {
  await axios.post(`${API_URL}/register`, { name, email, password, userType });
};

export const getUserAccess = async (token: string): Promise<{ [key: string]: boolean }> => {
  const response = await axios.get(`${API_URL}/user-access`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data.accessConfig;
};
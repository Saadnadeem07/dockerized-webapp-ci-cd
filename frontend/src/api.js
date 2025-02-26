import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const signup = (user) => axios.post(`${API_URL}/signup`, user);
export const login = (user) => axios.post(`${API_URL}/login`, user);

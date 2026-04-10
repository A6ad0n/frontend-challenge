import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const catApiClient = axios.create({
  baseURL: apiUrl,
  headers: apiKey ? { 'x-api-key': apiKey } : undefined,
});

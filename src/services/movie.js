import axios from "axios";

const api = {
  base: import.meta.env.VITE_BASE_URL,
  key: import.meta.env.VITE_API_TMDB_KEY,
  token: import.meta.env.VITE_API_TMDB_TOKEN,
};

const options = {
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${api.token}`
  }
}

export async function fetcher(endpoint) {
  const response = await axios.get(`${api.base}/${endpoint}`, options);
  return response.data;
}
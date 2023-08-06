import axios from "axios";

const api = {
  base: import.meta.env.VITE_BASE_URL,
  key: import.meta.env.VITE_API_TMDB_KEY,
  token: import.meta.env.VITE_API_TMDB_TOKEN,
};

export const movieList = async () => {
  const url = `${api.base}/discover/movie?api_key=${api.key}`;
  const response = await axios.get(url);
  const data = await response.data;
  return data;
};

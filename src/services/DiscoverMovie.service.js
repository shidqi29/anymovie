import axios from "axios";

const api = {
  base: import.meta.env.VITE_BASE_URL,
  key: import.meta.env.VITE_API_TMDB_KEY,
  token: import.meta.env.VITE_API_TMDB_TOKEN,
};


export const DiscoverMovie = async ({page, sort_by}) => {
  const url = `${api.base}/discover/movie?api_key=${api.key}&page=${page}&sort_by=${sort_by}`;
  const response = await axios.get(url);
  const data = await response.data;
  return data;
};

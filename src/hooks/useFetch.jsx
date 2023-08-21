import { useEffect } from "react";
import { useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = {
    base: import.meta.env.VITE_BASE_URL,
    key: import.meta.env.VITE_API_TMDB_KEY,
    token: import.meta.env.VITE_API_TMDB_TOKEN,
  };
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api.token}`,
    },
  };
  useEffect(() => {
    fetch(`${api.base}/${endpoint}`, options)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [endpoint]);
  return { data, isLoading, error };
};

export default useFetch;

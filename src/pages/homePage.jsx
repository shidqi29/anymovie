import { useEffect, useState } from "react";
import { movieList } from "../services/movieList.service";
import MovieList from "../components/fragments/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const getMovies = async () => {
    try {
      const data = await movieList();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (!movies) return "Loading";

  return (
    <>
      <div className="w-full flex flex-wrap ">
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieList key={movie.id}>
              <MovieList.Header
                title={movie.title}
                release_date={movie.release_date}
              />
              <MovieList.Body
                image={
                  movie.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                    : "https://via.placeholder.com/400"
                }
                title={movie.title}>
                {movie.overview}
              </MovieList.Body>
            </MovieList>
          ))}
      </div>
    </>
  );
};

export default HomePage;

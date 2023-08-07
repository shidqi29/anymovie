import { useEffect, useState } from "react";
import { movieList } from "../services/movieList.service";
import MovieList from "../components/fragments/MovieList";
import LoadingSpinner from "../components/elements/loading/Loading";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getMovies = async () => {
    try {
      const data = await movieList();
      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <LoadingSpinner />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default HomePage;

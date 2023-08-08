import { useEffect, useState } from "react";
import { movieList } from "../services/movieList.service";
import MovieList from "../components/fragments/MovieList";
import LoadingSpinner from "../components/elements/loading/Loading";
import Poster from "../components/elements/poster/Poster";
import MainLayout from "../components/layouts/mainLayout";

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

  const renderPoster = () => {
    return movies
      .slice(0, 12)
      .map((movie) => (
        <Poster
          key={movie.id}
          image={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
              : "https://via.placeholder.com/400"
          }
          title={movie.title}
        />
      ));
  };

  const renderMovieList = () => {
    return movies.map((movie) => (
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
    ));
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
          <MainLayout>
            <div className="w-4/6">
              <section className="flex flex-wrap gap-2 w-full px-8 py-5">
                {movies.length > 0 && renderPoster()}
              </section>
              <section className="w-full flex flex-wrap ">
                {movies.length > 0 && renderMovieList()}
              </section>
            </div>
            <aside className="bg-white w-2/6">
              <div>Tes</div>
            </aside>
          </MainLayout>
      )}
    </>
  );
};

export default HomePage;

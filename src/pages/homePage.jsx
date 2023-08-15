import { useEffect, useState } from "react";
import { DiscoverMovie } from "../services/DiscoverMovie.service";
import ListFragment from "../components/fragments/ListFragment";
import LoadingSpinner from "../components/elements/loading/Loading";
import Poster from "../components/elements/poster/Poster";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const sort_by = ["popularity.desc", "vote_average.desc"];
  const getMovies = async () => {
    try {
      const data = await DiscoverMovie({ page: 1, sort_by: sort_by[0] });
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
      <ListFragment key={movie.id}>
        <ListFragment.Header
          title={movie.title}
          release_date={movie.release_date}
        />
        <ListFragment.Body
          image={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
              : "https://via.placeholder.com/400"
          }
          title={movie.title}>
          {movie.overview}
        </ListFragment.Body>
      </ListFragment>
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
        <main className="md:flex">
          <div className="w-full">
            <section className="flex flex-wrap gap-2 w-full px-8 py-5 justify-center ">
              {movies.length > 0 && renderPoster()}
            </section>
            <section className="w-full flex flex-wrap ">
              {movies.length > 0 && renderMovieList()}
            </section>
          </div>
          <aside className="bg-white w-full md:w-2/6 ">
            <div>Tes</div>
          </aside>
        </main>
      )}
    </>
  );
};

export default HomePage;

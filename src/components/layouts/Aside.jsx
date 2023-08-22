import { Tab } from "@headlessui/react";
import { fetcher } from "../../services/movie";
import { useState } from "react";
import { useEffect } from "react";
import ListAsideFragment from "../fragments/ListAsideFragment";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Aside = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const fetchMovies = async (endpoint, setter) => {
    try {
      const data = await fetcher(endpoint);
      setter(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies("trending/movie/day", setTrendingMovies);
    fetchMovies("movie/popular", setPopularMovies);
    fetchMovies("movie/upcoming", setUpcomingMovies);
  }, []);

  const tabs = ["Trending", "Popular", "Upcoming"];

  const renderMoviePosters = (movies) =>
    movies.slice(0, 6).map((movie) => (
      <ListAsideFragment key={movie.id}>
        <ListAsideFragment.Body
          image={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
              : "https://via.placeholder.com/400"
          }
          title={movie.title}>
          <ListAsideFragment.Header
            title={movie.title}
            release_date={movie.release_date}
          />
        </ListAsideFragment.Body>
      </ListAsideFragment>
    ));

  return (
    <aside className="bg-primary py-5 md:mr-4 w-full md:w-2/6 ">
      <div className="container">
        <Tab.Group>
          <Tab.List className="flex justify-center space-x-2 items-center px-2 mb-5">
            {tabs.map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2 px-2 text-sm font-medium leading-5 text-primary outline-none border  border-accent transition duration-150 ease-in-out",
                    selected
                      ? "bg-accent text-primary"
                      : "text-white hover:bg-accent hover:text-primary"
                  )
                }>
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {[trendingMovies, popularMovies, upcomingMovies].map(
              (movies, index) => (
                <Tab.Panel key={index}>
                  <div className="flex flex-wrap gap-2">
                    {renderMoviePosters(movies)}
                  </div>
                </Tab.Panel>
              )
            )}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </aside>
  );
};

export default Aside;

import { Tab } from "@headlessui/react";
import ListAsideFragment from "../fragments/ListAsideFragment";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Aside = () => {
  const [popularMovie, setPopularMovie] = useState(null);
  const [trendingMovie, setTrendingMovie] = useState(null);
  const [upcomingMovie, setUpcomingMovie] = useState(null);
  const { data: popularMovieData } = useFetch("movie/popular");
  const { data: trendingMovieData } = useFetch("trending/movie/day");
  const { data: upcomingMovieData } = useFetch("movie/upcoming");

  useEffect(() => {
    setPopularMovie(popularMovieData);
    setTrendingMovie(trendingMovieData);
    setUpcomingMovie(upcomingMovieData);
  }, [popularMovieData, trendingMovieData, upcomingMovieData]);

  const tabs = ["Trending", "Popular", "Upcoming"];

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
            <Tab.Panel>
              {trendingMovie && <ListAsideFragment movies={trendingMovie} />}
            </Tab.Panel>
            <Tab.Panel>
              {popularMovie && <ListAsideFragment movies={popularMovie} />}
            </Tab.Panel>
            <Tab.Panel>
              {upcomingMovie && <ListAsideFragment movies={upcomingMovie} />}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </aside>
  );
};

export default Aside;

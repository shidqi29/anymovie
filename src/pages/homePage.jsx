import ListFragment from "../components/fragments/ListFragment";
import LoadingSpinner from "../components/elements/loading/Loading";
import Poster from "../components/elements/poster/Poster";
import Aside from "../components/layouts/Aside";
import useFetch from "../hooks/useFetch";
import NotFound from "./notFound";
import { useEffect } from "react";

const HomePage = () => {
  const { error, isLoading, data: movie } = useFetch("movie/popular");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center min-h-screen">
          <LoadingSpinner />
        </div>
      )}
      {error ? (
        <div className="flex items-center justify-center min-h-screen">
          <NotFound />
        </div>
      ) : (
        <>
          <div className="w-full ">
            <img
              src="banner.jpg"
              alt=""
              className="object-cover w-full h-[45vh] bg-blend-darken"
            />
          </div>
          <main className="md:flex">
            <div className="w-full">
              <section className="w-full px-8 py-5 hidden sm:flex">
                {movie && <Poster datas={movie} category="movie"/>}
              </section>
              <section className="w-full flex flex-wrap px-4">
                {movie && <ListFragment datas={movie} category="movie" />}
              </section>
            </div>
            <Aside />
          </main>
        </>
      )}
    </>
  );
};

export default HomePage;

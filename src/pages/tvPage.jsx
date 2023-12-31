import ListFragment from "../components/fragments/ListFragment";
import LoadingSpinner from "../components/elements/loading/Loading";
import Poster from "../components/elements/poster/Poster";
import Aside from "../components/layouts/Aside";
import useFetch from "../hooks/useFetch";
import NotFound from "./notFound";
import { useEffect } from "react";

const TvPage = () => {
  const { error, isLoading, data: tvShow } = useFetch("tv/popular");
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
                {tvShow && <Poster datas={tvShow} category="tv-series"/>}
              </section>
              <section className="w-full flex flex-wrap px-4">
                {tvShow && <ListFragment datas={tvShow} category="tv-series"/>}
              </section>
            </div>
            <Aside />
          </main>
        </>
      )}
    </>
  );
};

export default TvPage;

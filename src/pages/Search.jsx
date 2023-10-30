import ListFragment from "../components/fragments/ListFragment";
import LoadingSpinner from "../components/elements/loading/Loading";
import Aside from "../components/layouts/Aside";
import useFetch from "../hooks/useFetch";
import NotFound from "./notFound";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams();

  const { error, isLoading, data } = useFetch(`search/multi?query=${query}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query]);

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
              src="/banner.jpg"
              alt=""
              className="object-cover w-full h-[45vh] bg-blend-darken"
            />
          </div>
          <h2 className="text-accent font-bold text-2xl px-4 py-2 capitalize">
            Search Result for: {query}
          </h2>
          <main className="md:flex">
            <div className="w-full">
              <section className="w-full flex flex-wrap px-4">
                {data && <ListFragment datas={data} />}
              </section>
            </div>
            <Aside />
          </main>
        </>
      )}
    </>
  );
};

export default Search;

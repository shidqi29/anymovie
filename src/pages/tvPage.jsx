import { useEffect, useState } from "react";
import { DiscoverTV } from "../services/DiscoverTV.service";
import ListFragment from "../components/fragments/ListFragment";
import LoadingSpinner from "../components/elements/loading/Loading";
import Poster from "../components/elements/poster/Poster";

const TVPage = () => {
  const [series, setSeries] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const sort_by = ["popularity.desc", "vote_average.desc"];
  const getTVSeries = async () => {
    try {
      const data = await DiscoverTV({ page: 1, sort_by: sort_by[1] });
      setSeries(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderPoster = () => {
    return series
      .slice(0, 12)
      .map((tv) => (
        <Poster
          key={tv.id}
          image={
            tv.poster_path !== null
              ? `https://image.tmdb.org/t/p/w400/${tv.poster_path}`
              : "https://via.placeholder.com/400"
          }
          title={tv.title}
        />
      ));
  };

  const renderSeriesList = () => {
    return series.map((tv) => (
      <ListFragment key={tv.id}>
        <ListFragment.Header title={tv.name} release_date={tv.first_air_date} />
        <ListFragment.Body
          image={
            tv.poster_path !== null
              ? `https://image.tmdb.org/t/p/w400/${tv.poster_path}`
              : "https://via.placeholder.com/400"
          }
          title={tv.name}>
          {tv.overview}
        </ListFragment.Body>
      </ListFragment>
    ));
  };

  useEffect(() => {
    getTVSeries();
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
            <section className="hidden md:flex flex-wrap gap-2 w-full px-8 py-5 justify-center">
              {series.length > 0 && renderPoster()}
            </section>
            <section className="w-full flex flex-wrap ">
              {series.length > 0 && renderSeriesList()}
            </section>
          </div>
          <aside className="bg-white w-full md:w-2/6">
            <div>Tes</div>
          </aside>
        </main>
      )}
    </>
  );
};

export default TVPage;

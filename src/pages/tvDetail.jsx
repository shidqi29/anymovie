import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "../components/elements/loading/Loading";
import NotFound from "./notFound";
import { formattedDate, getDuration, getYearFromDate } from "../lib/utils";
import { ClockIcon } from "@heroicons/react/24/outline";

const TVDetail = () => {
  const { id } = useParams();
  const { error, isLoading, data: tv } = useFetch(`tv/${id}`);
  const genres = tv?.genres.map((genre, i) => {
    return (
      <div key={genre.id}>
        {genre.name} {i !== tv.genres.length - 1 ? ", " : null}
      </div>
    );
  });

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
          <div className="space-y-5  px-8 py-3 ">
            <div className="">
              <div className="mb-5 text-sm text-secondary mt-12">
                <h1 className="text-2xl font-bold text-secondary">
                  {tv?.name} ({getYearFromDate(tv?.first_air_date)})
                </h1>
                <div className="flex mt-3 items-center gap-2 text-accent">
                  <ClockIcon className="h-4 w-4 text-accent" />{" "}
                  <span>{formattedDate(tv?.first_air_date)}</span>
                  {tv?.episode_run_time ? (
                    <span>{getDuration(tv?.episode_run_time)}</span>
                  ) : null}
                </div>
                <div className="flex gap-2 mb-4">{genres}</div>
                <p className="text-secondary text-base">{tv?.overview}</p>
              </div>
              <div className="w-full ">
                <img
                  src={
                    tv?.poster_path !== null
                      ? `https://image.tmdb.org/t/p/w400/${tv?.poster_path}`
                      : "https://via.placeholder.com/400"
                  }
                  alt=""
                  className="object-cover w-full bg-blend-darken"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TVDetail;

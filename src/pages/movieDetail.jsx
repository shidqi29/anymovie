import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "../components/elements/loading/Loading";
import NotFound from "./notFound";
import VideoPlayer from "../components/fragments/VideoPlayer";
import { formattedDate, getDuration, getYearFromDate } from "../lib/utils";
import { ClockIcon } from "@heroicons/react/24/outline";

const MovieDetail = () => {
  const { id } = useParams();
  const { error, isLoading, data: movie } = useFetch(`movie/${id}`);
  const { data: movieVideo } = useFetch(`movie/${id}/videos`);

  const movieUrl = `https://www.youtube.com/watch?v=${movieVideo?.results[0].key}`;
  const genres = movie?.genres.map((genre, i) => {
    return (
      <div key={genre.id}>
        {genre.name} {i !== movie.genres.length - 1 ? ", " : null}
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
                  {movie?.title} ({getYearFromDate(movie?.release_date)})
                </h1>
                <div className="flex mt-3 items-center gap-2 text-accent">
                  <ClockIcon className="h-4 w-4 text-accent" />{" "}
                  <span>{formattedDate(movie?.release_date)}</span>
                  {movie?.runtime ? (
                    <span>{getDuration(movie?.runtime)}</span>
                  ) : null}
                </div>
                <div className="flex gap-2 mb-4">{genres}</div>
            <VideoPlayer url={movieUrl} />
              </div>
              <p className="text-secondary">{movie?.overview}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetail;

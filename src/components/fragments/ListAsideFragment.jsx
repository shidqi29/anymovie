import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/outline";
import { formattedDate } from "../../lib/utils";

const ListAsideFragment = ({ movies }) => {
  return (
    <div className="w-full px-2 py-2">
      {movies.results.map((movie) => (
        <div key={movie.id}>
          <div className="flex py-5 border-b border-accent">
            <Link
              to={`/movie/${movie.id}`}
              className="h-32 w-18 aspect-[9/14] mr-2">
              <img
                src={
                  movie.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                    : "https://via.placeholder.com/400"
                }
                alt={movie.title}
                className=" object-cover w-full h-full rounded-lg  hover:opacity-60 duration-300"
              />
            </Link>
            <div className="flex flex-col">
              <Link to={`/movie/${movie.id}`}>
                <h2 className="text-white text-sm font-medium mb-2">{movie.title || movie.name}</h2>
              </Link>
              <div className="text-secondary font-light text-xs w-full flex">
                <ClockIcon className="h-3 w-3 mr-1 text-accent " />{" "}
                <span className="text-secondary ">
                  {formattedDate(movie.release_date || movie.first_air_date)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ListAsideFragment.propTypes = {
  movies: PropTypes.any,
};
export default ListAsideFragment;

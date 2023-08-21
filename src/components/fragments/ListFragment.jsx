import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/outline";
import { formattedDate } from "../../lib/utils";

const ListFragment = ({ movies }) => {
  return (
    <div className="w-full px-2 py-2 ">
      {movies.results.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <h3 className="text-white font-bold text-lg tracking-widest mb-2">
              {movie.title}
            </h3>
          </Link>
          <p className="text-secondary font-light text-xs mb-2 flex ">
            <ClockIcon className="h-4 w-4 mr-1 text-accent" />{" "}
            <span className="text-secondary">
              {formattedDate(movie.release_date)}
            </span>
          </p>
          <div className="flex border-b border-accent pb-4 mb-8">
            <Link to={`/movie/${movie.id}`} className="h-64 w-56 mr-4">
              <img
                src={
                  movie.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                    : "https://via.placeholder.com/400"
                }
                alt={movie.title}
                className=" object-cover rounded-lg h-full hover:opacity-60 duration-300"
              />
            </Link>
            <div className="text-secondary font-light text-xs w-full text-justify">
              {movie.overview}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ListFragment.propTypes = {
  movies: PropTypes.any,
};

export default ListFragment;

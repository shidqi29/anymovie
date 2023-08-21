import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Poster = ({ movies }) => {
  return (
    <div className="w-full flex flex-wrap gap-2 justify-center">
      {movies.results.slice(0, 12).map((movie) => (
        <div key={movie.id} className="w-24 ">
          <Link to={`/movie/${movie.id}`} className="">
            <img
              src={
                movie.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                  : "https://via.placeholder.com/400"
              }
              alt={movie.title}
              className=" object-cover rounded-lg w-full h-full hover:opacity-60 hover:scale-105 duration-300 border-b border-accent"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

Poster.propTypes = {
  movies: PropTypes.any,
};

export default Poster;

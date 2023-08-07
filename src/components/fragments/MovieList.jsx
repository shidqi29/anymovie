import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieList = ({ children }) => {
  return <div className="w-full px-5 py-3 ">{children}</div>;
};

const Header = ({ id, title, release_date }) => {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <h2 className="text-white font-bold text-lg tracking-widest mb-2">
          {title}
        </h2>
      </Link>
      <p className="text-secondary font-light text-xs mb-2">{release_date}</p>
    </div>
  );
};

const Body = ({ id, image, title, children }) => {
  return (
    <div className="flex border-b border-secondary pb-4">
      <Link to={`/movie/${id}`} className="h-[253px] w-[163px] mr-[15px]">
        <img
          src={image}
          alt={title}
          className=" object-cover rounded-lg h-full "
        />
      </Link>
      <div className="text-secondary font-light text-sm w-full">{children}</div>
    </div>
  );
};

MovieList.Header = Header;
MovieList.Body = Body;

MovieList.propTypes = {
  children: PropTypes.any,
};
Header.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  release_date: PropTypes.string,
};
Body.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.any,
};

export default MovieList;

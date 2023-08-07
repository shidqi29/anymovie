import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Poster = ({ id, image, title }) => {
  return (
    <div className="w-24 ">
      <Link to={`/movie/${id}`} className="h-full w-full">
        <img
          src={image}
          alt={title}
          className=" object-cover rounded-lg h-full hover:opacity-60 hover:scale-105 duration-300 border-b border-accent"
        />
      </Link>
    </div>
  );
};

Poster.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
};

export default Poster;

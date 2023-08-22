import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/outline";

const ListAsideFragment = ({ children }) => {
  return (
    <div className="w-full px-2 py-2 border-b border-accent">{children}</div>
  );
};

const Header = ({ id, title, release_date }) => {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <h2 className="text-white font-medium text-base tracking-wide mb-2">
          {title}
        </h2>
      </Link>
      <p className="text-secondary font-light text-xs mb-2 flex ">
        <ClockIcon className="h-4 w-4 mr-1 text-accent" />{" "}
        <span className="text-secondary">{release_date}</span>
      </p>
    </div>
  );
};

const Body = ({ id, image, title, children }) => {
  return (
    <div className="flex pb-4">
      <Link to={`/movie/${id}`} className="h-28 w-28 mr-2">
        <img
          src={image}
          alt={title}
          className=" object-cover rounded-lg  hover:opacity-60 duration-300"
        />
      </Link>
      <div className="text-secondary font-light text-xs w-full text-justify">
        {children}
      </div>
    </div>
  );
};

ListAsideFragment.Header = Header;
ListAsideFragment.Body = Body;

ListAsideFragment.propTypes = {
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

export default ListAsideFragment;

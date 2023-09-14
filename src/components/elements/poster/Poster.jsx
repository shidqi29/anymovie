import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Poster = ({ datas, category }) => {
  return (
    <div className="w-full flex flex-wrap gap-2 justify-center">
      {datas.results.slice(0, 12).map((data) => (
        <div key={data.id} className="w-24 ">
          <Link to={`/${category}/${data.id}`}>
            <img
              title={data.title || data.name}
              src={
                data.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w400/${data.poster_path}`
                  : "https://via.placeholder.com/400"
              }
              alt={data.title || data.name}
              className=" object-cover rounded-lg w-full h-full hover:opacity-60 hover:scale-105 duration-300 border-b border-accent"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

Poster.propTypes = {
  datas: PropTypes.any,
  category: PropTypes.string,
};

export default Poster;

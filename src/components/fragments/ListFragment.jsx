import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/outline";
import { formattedDate } from "../../lib/utils";

const ListFragment = ({ datas, category }) => {
  return (
    <div className="w-full px-2 py-2 ">
      {datas.results.map((data) => (
        <div key={data.id}>
          <Link to={`/${category}/${data.id}`}>
            <h3 className="text-white font-bold text-lg tracking-widest mb-2">
              {data.title || data.name}
            </h3>
          </Link>
          <p className="text-secondary font-light text-xs mb-2 flex ">
            <ClockIcon className="h-4 w-4 mr-1 text-accent" />{" "}
            <span className="text-secondary">
              {formattedDate(data.release_date || data.first_air_date)}
            </span>
          </p>
          <div className="flex border-b border-accent pb-4 mb-8">
            <Link to={`/${category}/${data.id}`} className="h-64 w-56 mr-4">
              <img
                title={data.title || data.name}
                src={
                  data.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w400/${data.poster_path}`
                    : "https://via.placeholder.com/400"
                }
                alt={data.title || data.name}
                className=" object-cover rounded-lg h-full hover:opacity-60 duration-300"
              />
            </Link>
            <div className="text-secondary font-light text-sm w-full text-justify">
              {data.overview}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ListFragment.propTypes = {
  datas: PropTypes.any,
  category: PropTypes.string,
};

export default ListFragment;

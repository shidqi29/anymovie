import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/outline";
import { formattedDate } from "../../lib/utils";

const ListFragment = ({ datas }) => {
  return (
    <div className="w-full px-2 py-2 ">
      {datas.results.map((data) => (
        <div key={data.id}>
          <Link to={`/movie/${data.id}`}>
            <h3 className="text-white font-bold text-lg tracking-widest mb-2">
              {data.title}
            </h3>
          </Link>
          <p className="text-secondary font-light text-xs mb-2 flex ">
            <ClockIcon className="h-4 w-4 mr-1 text-accent" />{" "}
            <span className="text-secondary">
              {formattedDate(data.release_date)}
            </span>
          </p>
          <div className="flex border-b border-accent pb-4 mb-8">
            <Link to={`/data/${data.id}`} className="h-64 w-56 mr-4">
              <img
                src={
                  data.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w400/${data.poster_path}`
                    : "https://via.placeholder.com/400"
                }
                alt={data.title}
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
};

export default ListFragment;

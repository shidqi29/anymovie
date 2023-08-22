import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-secondary px-5">
      <h1 className="font-bold text-7xl mb-5 text-accent">Oops!</h1>
      <p className="mb-20 text-center">{`Sorry, we cannot find the page you are looking for :(`}</p>
      <Link to="/" className="p-2 rounded-md border border-accent hover:bg-accent hover:text-primary transition-all">
        {" "}
        Back to main page
      </Link>
    </div>
  );
};

export default NotFound;

import Button from "../components/elements/button/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-secondary px-5">
      <h1 className="font-bold text-7xl mb-5 text-accent">Oops!</h1>
      <p className="mb-20 text-center">{`Sorry, we cannot find the page you are looking for :(`}</p>

      <Button
        classname=" p-2 border border-accent hover:bg-accent hover:text-primary transition-all"
        onClick={() => {
          window.location.href = "/";
        }}>
        Back to Main Page
      </Button>
    </div>
  );
};

export default NotFound;

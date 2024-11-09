import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="xl:px-28 px-8 bg-primary py-2 min-h-[calc(100vh-31.9rem)] flex flex-col items-center justify-center">
      <h1 className="text-center text-6xl text-secondary leading-[100px] font-bold">
        404 <br /> Page Not Found
      </h1>

      <Link to={"/Maiz/"}>
        <button className="bg-secondary text-primary hover:bg-primary hover:text-secondary px-8 py-2 rounded-md mt-8 transition-all duration-300">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default Error;

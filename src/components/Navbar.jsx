import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-5 flex justify-between bg-(--c1) text-white">
      <Link to="/" className="font-semibold text-2xl py-4 ">
        Media Search
      </Link>
      <div className="flex gap-5 items-center">
        <Link
          className="bg-white text-(--c1) py-1 px-3 rounded active:scale-95 font-semibold"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="bg-white text-(--c1) py-1 px-3 rounded active:scale-95 font-semibold"
          to={"/collection"}
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

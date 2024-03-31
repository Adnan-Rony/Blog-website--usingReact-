import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { FaFileSignature } from "react-icons/fa6";

const Navber = () => {
  const [searchButtonVisible, setSearchButtonVisible] = useState(false);

  return (
    <nav className="z-10 top-0 flex items-center justify-between w-full px-[5vw] py-5 border-b border-gray-50 bg-white relative">
      <Link className="flex-none w-10" to="/">
        <img
          className="w-full rounded-2xl"
          src="https://findingtom.com/images/uploads/medium-logo/article-image-00.jpeg"
          alt="Logo"
        />
      </Link>

      {searchButtonVisible || (
        <div className="absolute bg-white left-0 top-full py-4 px-[5vw] mt-0.5 border-gray-10 border-b w-full md:border-0 md:block md:relative md:inset-0 md:p-0">
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-auto md:pl-10 md:ml-5 bg-gray-50 p-3 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey outline-gray-100"
          />
          <CiSearch className="absolute text-xl right-[10%] md:pointer-events-none md:left-7 top-1/2 transform -translate-y-1/2" />
        </div>
      )}

      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button
          onClick={() => setSearchButtonVisible((prev) => !prev)}
          className="text-xl md:hidden bg-gray-100 flex items-center justify-center rounded-full md:w-10 md:h-10"
        >
          <CiSearch />
        </button>

        <Link
          className="hidden md:flex gap-2 items-center justify-center"
          to="/editor"
        >
          <FaFileSignature /> <p>Write</p>
        </Link>

        <Link
          to="/signin"
          className="btn btn-sm  rounded-full "
        >
          Sign In
        </Link>

        <Link
          to="/signup"
          className="btn hidden sm:block p-2 btn-sm bg-black rounded-full text-white"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navber;

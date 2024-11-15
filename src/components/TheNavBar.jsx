import { useState } from "react";
import { NavLink } from "react-router-dom";

const TheNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" fixed left-0 right-0">
      <div className="bg-blue_100 flex justify-between items-center p-5 sm:px-14 md:py-10">
        <NavLink
          to={"/"}
          className="text-2xl sm:text-4xl font-bold text-bone_white"
        >
          Subair Ihsan
        </NavLink>

        <ul
          className={`text-white space-x-8  hidden lg:flex items-center text-xl ${
            isOpen ? "block" : "hidden"
          }`}
          id="activeMenu"
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>

          <li>
            <NavLink to="/education">Education</NavLink>
          </li>

          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
        </ul>

        <div className="lg:hidden">
          <button
            className="focus:outline-none text-bone_white"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul
          className="flex flex-col items-end pr-5 sm:pr-14 pb-2 bg-blue_100 space-y-5 text-white"
          id="activeMenu"
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>

          <li>
            <NavLink to="/education">Edutcation</NavLink>
          </li>

          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TheNavBar;

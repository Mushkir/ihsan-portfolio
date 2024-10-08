import { useState } from "react";
import { NavLink } from "react-router-dom";

const TheNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="bg-primary-black flex justify-between items-center p-5 sm:px-14">
        <NavLink to={"/"} className="text-3xl font-bold text-yellow-400">
          Subair Ihsan
        </NavLink>

        <ul
          className={`text-white space-x-8  hidden xl:flex items-center text-xl ${
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

          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>

        <div className="xl:hidden">
          <button
            className="focus:outline-none text-yellow-400"
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

      <div
        className={` text-main-heading-color xl:hidden mt-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul
          className="flex flex-col items-end pr-14 bg-primary-black space-y-5 text-white"
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

          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TheNavBar;

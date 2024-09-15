import { NavLink } from "react-router-dom";

const TheNavBar = () => {
  return (
    <div className="bg-primary-black flex justify-between items-center px-14 py-5">
      <h3 className="text-3xl font-bold text-yellow-400">Subair Ihsan</h3>

      <ul className="text-white flex space-x-8" id="activeMenu">
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
  );
};

export default TheNavBar;

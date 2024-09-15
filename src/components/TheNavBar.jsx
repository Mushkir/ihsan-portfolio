import { Link } from "react-router-dom";

const TheNavBar = () => {
  return (
    <div className="bg-primary-black flex justify-between items-center px-14 py-5">
      <h3 className="text-3xl font-bold text-yellow-400">Subair Ihsan</h3>

      <ul className="text-white flex space-x-8">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/experience">Experience</Link>
        </li>

        <li>
          <Link to="/education">Edutcation</Link>
        </li>

        <li>
          <Link to="/skills">Skills</Link>
        </li>

        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default TheNavBar;

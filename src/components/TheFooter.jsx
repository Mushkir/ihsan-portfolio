import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const TheFooter = () => {
  return (
    <div className="bg-blue_100 text-bone_white sm:p-3">
      <p className="text-center font-semibold text-xs sm:text-lg px-3 pt-3 sm:p-0">
        Copyright&copy; - {new Date().getFullYear()} | Design and Developed by:{" "}
        <Link
          to={"https://github.com/Mushkir"}
          className="hover:font-bold hover:underline"
          target="_blank"
        >
          Mohamed Mushkir ♥️
        </Link>
      </p>

      <div className="flex justify-center items-center gap-x-2 sm:gap-x-4 mt-3 pb-5">
        {/* LinkedIn */}
        <Link
          to={"https://www.linkedin.com/in/mohamed-mushkir/"}
          target="_blank"
          className="text-xs sm:text-lg hover:-translate-y-1 transition-all"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={"https://github.com/Mushkir"}
          target="_blank"
          className="text-xs sm:text-lg hover:-translate-y-1 transition-all"
        >
          <FaGithub />
        </Link>
        <Link
          to={"https://www.instagram.com/mushkir_9611/"}
          target="_blank"
          className="text-xs sm:text-lg hover:-translate-y-1 transition-all"
        >
          <AiFillInstagram />
        </Link>
      </div>
    </div>
  );
};

export default TheFooter;

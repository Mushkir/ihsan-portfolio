import React from "react";
import PropTypes from "prop-types";

const TheSkillsListItem = ({ heading, skills }) => {
  return (
    <div className="border rounded-md p-2 sm:p-5 border-yellow-400 mb-5 w-full sm:w-[48%] md:w-[24%]">
      <h3 className="text-xl text-white font-bold">{heading}</h3>
      <ul className="text-gray-400 list-disc px-5 mt-2 space-y-2">
        {skills.map(
          (list, index) => (
            <li key={index}>{list}</li>
          )
          //   console.log(list);
        )}
      </ul>
    </div>
  );
};

TheSkillsListItem.propTypes = {
  heading: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
};

export default TheSkillsListItem;

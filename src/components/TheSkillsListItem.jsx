import React from "react";
import PropTypes from "prop-types";

const TheSkillsListItem = ({ heading, skills }) => {
  return (
    <div className="border-2 rounded-md p-2 sm:p-5 border-blue_100 mb-5 w-full sm:w-[48%] md:w-[24%]">
      <h3 className="text-xl text-blue_100 font-bold">{heading}</h3>
      <ul className="text-bone_white list-disc px-5 mt-2 space-y-2">
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

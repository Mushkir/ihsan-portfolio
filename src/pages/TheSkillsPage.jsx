import React from "react";
import TheSkillsListItem from "../components/TheSkillsListItem";

const TheSkillsPage = () => {
  return (
    <div className="font-nunito bg-sky_blue max-w-[1500px] px-1.5 md:px-14 pt-[9rem] sm:py-[8rem] lg:pt-[14rem] xl:pt-[17rem]">
      {/* lg:pt-[150px] xl:pt-[190px] */}
      <div className="flex">
        {/* Hero img */}
        <div className="md:flex mx-auto sm:mx-0 justify-center gap-x-10 items-start sm:mb-10 md:mb-0">
          <img
            className="w-[200px] h-[200px] mx-auto md:w-[300px] md:h-[300px] rounded-full border-4 border-blue_100 object-cover object-center mb-5 lg:mb-0"
            src="/ihsan_pic.JPG"
            alt="Ihsan Momz image"
          />

          <div className="border-2 rounded-md p-2 sm:p-5 border-blue_100 mb-5">
            <h3 className="text-xl text-blue_100 font-bold">Special Skills</h3>
            <ul className="text-bone_white list-disc px-5 mt-2 space-y-2">
              <li>
                Good Computer, Word, Spreadsheets, Operations and Communication
                Skills.
              </li>

              <li>Documentation and Control.</li>

              <li>Policy and Procedure modification.</li>

              <li>
                Strong interpersonal and communication skills (Oral, Written,
                Presentation).
              </li>

              <li>Expertise on taking off quantities.</li>

              <li>BOQ preparation.</li>

              <li>Tender document preparation.</li>

              <li>Subcontract administration.</li>

              <li>Proficient in Information Technology.</li>

              <li>
                Familiar with using MS office packages, AutoCAD, Cost X, Revit
                and Plan swift Gained organizational and leadership skills.
              </li>

              <li>
                Excellent communication skills and written knowledge of English
                language.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-start sm:mt-5">
        {/* Areas of Expertise */}
        <TheSkillsListItem
          heading={"Areas of Expertise"}
          skills={[
            "Document Management",
            "Office IT Skills",
            "Secretarial tasks",
            "Auto CAD",
            "BOQ preparation",
            "Tender document preparation",
            "Sub-contract administration",
            "Quantity taking off",
          ]}
        />

        {/* Familiar Software */}
        <TheSkillsListItem
          heading={"Familiar Software"}
          skills={[
            "Cost X",
            "AutoCAD",
            "Plan Swift",
            "MS Office Package",
            "3D Max",
          ]}
        />

        {/* Familiar Documents */}
        <TheSkillsListItem
          heading={"Familiar Documents"}
          skills={["FIDIC 1999 Red book", "NRM 1&2", "SLS 573"]}
        />

        {/* Personal Skills */}
        <TheSkillsListItem
          heading={"Personal Skills"}
          skills={[
            "Organizing Skills",
            "Responsibility",
            "Problem Solving",
            "First Aid",
            "Problem Solving",
            "Communication",
            "Hardworking",
          ]}
        />
      </div>
    </div>
  );
};

export default TheSkillsPage;

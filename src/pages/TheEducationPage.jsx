import React from "react";
import TheEducationItems from "../components/TheEducationItems";

const TheEducationPage = () => {
  return (
    <div className="font-nunito bg-sky_blue max-w-[1500px] px-2 sm:px-14 py-8 flex sm:pt-[80px] lg:pt-[150px] xl:pt-[190px]">
      {/* Hero img */}
      <div className="md:flex mx-auto sm:mx-0 justify-center gap-x-10 items-start mb-10 md:mb-0 lg:mx-20">
        <img
          className="w-[200px] h-[200px] mx-auto md:w-[300px] md:h-[300px] rounded-full border-4 border-blue_100 object-cover object-center mb-5 lg:mb-0"
          src="/ihsan_img.JPG"
          alt="Ihsan Momz image"
        />

        <div>
          {/* Degree */}
          <TheEducationItems
            name={"BSc (Hons) In Quantity Surveying (Following)"}
            orgName={"De Montfort university (DMU) Leicester (UK)"}
          />

          {/* HND */}
          <TheEducationItems
            name={"Higher National Diploma in Quantity Surveying (Level 5)"}
            orgName={"IPHS Campus"}
            country={"Sri Lanka."}
          />

          {/* Diploma */}
          <TheEducationItems
            name={"Diploma in Quantity Surveying"}
            country={"Sri Lanka. "}
            orgName={"London Business Academy"}
          />
        </div>
      </div>
    </div>
  );
};

export default TheEducationPage;

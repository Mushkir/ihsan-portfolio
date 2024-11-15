import TheListItems from "../components/TheListItems";

const TheExperiencePage = () => {
  return (
    <div className="font-nunito bg-sky_blue max-w-[1500px] px-1.5 sm:px-14 py-8 flex pt-[9rem] sm:py-[8rem] lg:pt-[14rem] xl:pt-[17rem]">
      {/* Hero img */}
      <div className="lg:flex justify-center gap-x-10 items-start mb-10 md:mb-0 lg:mx-20">
        <img
          className="w-[200px] h-[200px] mx-auto md:w-[300px] md:h-[300px] rounded-full border-4 border-blue_100 object-cover object-center mb-5 lg:mb-0"
          src="/ihsan_profile_1.JPG"
          alt="Ihsan Momz image"
        />

        <div>
          {/* Arabtec Construction L.L.C (Dubai, UAE) */}
          <TheListItems
            positionName={
              "Quantity Surveyor (June 2022 - March 2024) (22 Months)"
            }
            companyName={"Arabtec Construction L.L.C"}
            countryName={"Dubai, UAE"}
            dutiesAndResp={[
              "Preparation of Interim payment application",
              "Negotiation with subcontractor and suppliers and preparation of subcontractor bills",
              "Updating daily reports and progress reports.",
              "Take off MEP quantities",
            ]}
          />

          {/* Nawaloka Construction Company (Private) Limited. (Colombo, Sri Lanka) */}
          <TheListItems
            positionName={
              "Quantity Surveyor (April 2020 – May 2022) (24 Months)"
            }
            companyName={"Nawaloka Construction Company (Private) Limited"}
            countryName={"Colombo, Sri Lanka"}
            dutiesAndResp={[
              "Preparation of bill of quantities, bill of items and schedule of rates based on the clients’ requirements.",
              "Take off quantities for Civil and Interior fit out works by using AutoCAD drawings, tabulating, analyzing and formulating the information to facilitate the preparation of measurement sheet in MS Excel.",
              "Preparation of Contract document.",
              "Cost planning and budget establishment.",
            ]}
          />

          {/* East Lanka Engineering (Pvt) Ltd. (Addalaichenai, Sri Lanka) */}
          <TheListItems
            positionName={
              "Quantity Surveyor (March 2018 – February 2020) (24 Months)"
            }
            companyName={"East Lanka Engineering (Pvt) Ltd"}
            countryName={"Addalaichenai, Sri Lanka"}
            dutiesAndResp={[
              "Join measurement for Civil work and MEP work.",
              "Take off quantities for BOQ item.",
              "Formatting interim payment certificate.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TheExperiencePage;

import { Link } from "react-router-dom";

const TheAboutPage = () => {
  return (
    <div className="font-nunito bg-primary-black px-5 sm:px-14 py-8 flex flex-col sm:flex-row sm:pr-[3rem] md:pr-[5rem] xl:pr-[10rem]  sm:pt-[80px] lg:pt-[150px] xl:pt-[190px]">
      {/* Hero img */}
      <div className="flex justify-center mr-20">
        <img
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-4 border-yellow-400 object-cover object-center"
          src="/ihsan_profile.JPEG"
          alt="Ihsan Momz image"
        />
      </div>

      <div className="w-[700px] text-justify">
        <h3 className="text-yellow-400 text-3xl font-bold">About Me</h3>
        <p className="text-gray-300 mb-3">
          I am a skilled Quantity Surveyor with over five years of experience,
          specializing in data input, AutoCAD, document management, and
          preparing Bills of Quantities (BOQs). My methodical approach ensures
          accurate resource allocation, cost calculation, and project analysis,
          while my proficiency in AutoCAD enables me to produce precise
          drawings. I thrive in cost control and BOQ preparation, ensuring
          smooth project documentation with strong data entry skills. Adaptable
          to evolving industry standards, I am committed to contributing to
          successful construction projects while collaborating effectively with
          interdisciplinary teams.
        </p>

        <div className="border border-yellow-400 p-5 rounded-md">
          {/* Name */}
          <div className="flex item-center gap-x-5 mb-1.5">
            <span className="text-yellow-400">Name: </span>
            <span className="text-gray-200">Subair Ihsan</span>
          </div>

          {/* Passport No. */}
          <div className="flex item-center gap-x-5 mb-1.5">
            <span className="text-yellow-400">Passport No: </span>
            <span className="text-gray-200">N9209451</span>
          </div>

          {/* Email */}
          <div className="flex item-center gap-x-5 mb-1.5">
            <span className="text-yellow-400">Email: </span>
            <Link className="text-gray-200" to="mailto:ihsanmomz@gmail.com">
              ihsanmomz@gmail.com
            </Link>
          </div>

          {/* Phone */}
          <div className="flex item-center gap-x-5 mb-1.5">
            <span className="text-yellow-400">Phone No: </span>
            <Link className="text-gray-200" to="tel:+966503738512">
              +966503738512
            </Link>
          </div>

          {/* Iqama Status */}
          <div className="flex item-center gap-x-5 mb-1.5">
            <span className="text-yellow-400">Iqama Status: </span>
            <span className="text-gray-200">Transferable Iqama</span>
          </div>

          {/* Nationality */}
          <div className="flex item-center gap-x-5 mb-1.5">
            <span className="text-yellow-400">Nationality: </span>
            <span className="text-gray-200">Sri Lankan</span>
          </div>

          {/* Address */}
          <div className="flex item-center gap-x-5 mb-1.5">
            <span className="text-yellow-400">Address: </span>
            <span className="text-gray-200">
              Prince Majid, Building No. 7084, Jeddah, KSA
            </span>
          </div>

          {/* Zip code */}
          <div className="flex item-center gap-x-5 mb-1.5">
            <span className="text-yellow-400">Zip Code: </span>
            <span className="text-gray-200">23535</span>
          </div>

          {/* LinkedIn */}
          <div className="flex item-center gap-x-5 mb-1.5">
            <span className="text-yellow-400">LinkedIn: </span>
            <Link
              className="text-gray-200"
              target="_blank"
              to="https://www.linkedin.com/in/ihsan-momz/"
            >
              https://www.linkedin.com/in/ihsan-momz/
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheAboutPage;
import { Link } from "react-router-dom";

const TheHomePage = () => {
  return (
    <div className="font-nunito bg-sky_blue px-5 sm:px-14 py-8 flex flex-col sm:flex-row justify-between sm:pr-[3rem] md:pr-[5rem] xl:pr-[10rem]  sm:pt-[80px] lg:pt-[150px] xl:pt-[190px]">
      {/* Hero name info */}
      <div>
        <small className="text-bone_white mb-4 block sm:text-lg">Hello!</small>
        <h2 className="text-bone_white text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold">
          I&apos;m <span className="text-blue_100">Subair Ihsan</span>
        </h2>
        <span className="text-white text-lg block my-4 font-semibold">
          Quantity Surveyor
        </span>

        <div className="flex flex-col sm:flex-row items-center gap-y-5 sm:gap-x-2 md:gap-x-5 mb-10">
          {/* Contact me button */}
          <Link
            to={"https://wa.me/966503738512?text=Hello%20there!"}
            type="button"
            className="bg-blue_100 text-bone_white px-5 py-2 w-full sm:w-36 lg:w-[200px] rounded-full sm:rounded-lg  hover:opacity-95 hover:font-semibold hover:transition 500"
          >
            Contact me
          </Link>

          {/* Resume button */}
          <Link
            className="text-center text-white border border-blue_100 px-5 py-2 w-full sm:w-36 lg:w-[200px] rounded-full sm:rounded-lg hover:font-semibold hover:bg-blue_100 hover:text-bone_white hover:transition 500 "
            to={"#"}
          >
            Resume
          </Link>
        </div>
      </div>

      {/* Hero img */}
      <div className="flex justify-center">
        <img
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-4 border-blue_100 object-cover object-center"
          src="/ihsan_profile.JPEG"
          alt="Ihsan Momz image"
        />
      </div>
    </div>
  );
};

export default TheHomePage;

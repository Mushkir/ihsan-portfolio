import { Link } from "react-router-dom";

const TheHomePage = () => {
  return (
    <div className="font-nunito bg-primary-black px-14 py-8 flex justify-between pr-[10rem] h-screen pt-[150px]">
      {/* Hero name info */}
      <div>
        <small className="text-yellow-400 mb-4 block text-lg">Hello!</small>
        <h2 className="text-white text-7xl font-semibold">
          I&apos;m <span className="text-yellow-400">Subair Ihsan</span>
        </h2>
        <span className="text-white text-lg block my-4 font-semibold">
          Quantity Surveyor
        </span>

        <div className="flex items-center gap-x-5">
          {/* Contact me button */}
          <button
            type="button"
            className="bg-yellow-400 px-5 py-2 rounded-lg hover:opacity-95 hover:font-semibold hover:transition 500"
          >
            Contact me
          </button>

          {/* Resume button */}
          <Link
            className="text-white border border-yellow-400 px-5 py-2 rounded-lg hover:font-semibold hover:bg-yellow-400 hover:text-black hover:transition 500"
            to={"#"}
          >
            Resume
          </Link>
        </div>
      </div>

      {/* Hero img */}
      <div>
        <img
          className="w-[400px] h-[400px] rounded-full border-4 border-yellow-400 object-cover object-center"
          src="/ihsan_profile.JPEG"
          alt="Ihsan Momz image"
        />
      </div>
    </div>
  );
};

export default TheHomePage;

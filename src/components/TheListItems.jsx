import React from "react";
import { PiBuildingsFill } from "react-icons/pi";
import PropTypes from "prop-types";

const TheListItems = ({
  positionName,
  companyName,
  dutiesAndResp,
  countryName,
}) => {
  return (
    <div className="border rounded-md p-2 sm:p-5 border-yellow-400 mb-5">
      <h3 className="text-white text-lg flex sm:items-center gap-x-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <g fill="currentColor">
              <path
                fillRule="evenodd"
                d="M29 13.48a1 1 0 0 1-1-1V7.882a10 10 0 0 0-3-.807v3.405a1 1 0 0 1-2 0V7.02a8.9 8.9 0 0 0-3 .69v4.77a1 1 0 0 1-2 0V8.955a7.5 7.5 0 0 0-2.04 2.808q-.144.12-.282.25c-.243.91-.217 1.672-.045 2.15a1 1 0 0 1-1.882.676a4 4 0 0 1-.148-.525c-1.466 2.051-.114 3.533 2.493 4.447a8 8 0 1 0 15.809 0c2.611-.916 3.963-2.402 2.484-4.459q-.06.27-.15.53a1 1 0 1 1-1.887-.662c.195-.556.2-1.295-.017-2.098a4 4 0 0 0-.236-.122c-.402-.99-1.104-1.983-2.099-2.818v3.35a1 1 0 0 1-1 1m-4.356 6.375a1.5 1.5 0 1 0-1.288-2.71a1.5 1.5 0 0 0 1.288 2.71M24 22c1.51 0 2.796-.956 3.287-2.295a27 27 0 0 0 2.674-.391Q30 19.652 30 20a6 6 0 1 1-11.961-.686c.842.17 1.742.3 2.674.39A3.5 3.5 0 0 0 24 22"
                clipRule="evenodd"
              />
              <path d="M25 7a1 1 0 1 0-2 0z" />
              <path
                fillRule="evenodd"
                d="M28.466 28.4c1.15.184 2.348.43 3.534.735V42H16V29.135a40 40 0 0 1 3.534-.735L23 31h2zM26 37a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                clipRule="evenodd"
              />
              <path d="M12 30.425a29 29 0 0 1 2-.717V42h-2zm22-.717c.687.22 1.357.459 2 .717V42h-2zm-24 1.637C7.635 32.597 6 34.167 6 36v6h4zM42 36c0-1.833-1.635-3.404-4-4.655V42h4z" />
            </g>
          </svg>
        </div>
        <strong>{positionName}</strong>
      </h3>

      <div>
        {/* Company Name div */}
        <div className="flex sm:items-center gap-2 px-1 sm:px-7 mt-1 italic text-gray-300">
          <PiBuildingsFill />
          <div className="flex flex-wrap items-center">
            <small>{companyName}</small>
            &nbsp;{" - "}&nbsp;
            <small>
              {" "}
              <span className="not-italic">📍</span>
              {countryName}
            </small>
          </div>
        </div>

        <span className="px-1 sm:px-8 text-gray-300 text-sm mt-2 mb-1.5 block">
          Duties and responsibilities:
        </span>
        <ul className="pl-6 pr-2 sm:px-[50px] space-y-1 text-justify">
          {dutiesAndResp.map((resp, index) => (
            <li key={index} className="text-sm text-gray-400 list-disc">
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

TheListItems.propTypes = {
  positionName: PropTypes.string,
  companyName: PropTypes.string,
  countryName: PropTypes.string,
  dutiesAndResp: PropTypes.arrayOf(PropTypes.string),
};

export default TheListItems;

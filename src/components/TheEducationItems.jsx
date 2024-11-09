import React from "react";
import PropTypes from "prop-types";

const TheEducationItems = ({ name, orgName, country }) => {
  return (
    <div className="border-2 rounded-md p-2 sm:p-5 border-blue_100 mb-5">
      <h3 className="text-blue_100 text-lg flex sm:items-center gap-x-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="4"
            >
              <path
                fill="currentColor"
                d="M2 17.4L23.022 9l21.022 8.4l-21.022 8.4z"
              />
              <path
                strokeLinecap="round"
                d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825"
              />
            </g>
          </svg>
        </div>
        <strong>{name}</strong>
      </h3>

      <div>
        {/* Company Name div */}
        <div className="flex sm:items-center gap-2 px-1 sm:px-7 mt-1 italic text-bone_white">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 10a1 1 0 0 0 1-1V6a1 1 0 0 0-.684-.948l-9-3a1 1 0 0 0-.632 0l-9 3A1 1 0 0 0 2 6v3a1 1 0 0 0 1 1h1v7.184A2.995 2.995 0 0 0 2 20v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a2.995 2.995 0 0 0-2-2.816V10Zm-1 11H4v-1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM6 17v-7h2v7Zm4 0v-7h4v7Zm6 0v-7h2v7ZM4 8V6.72l8-2.666l8 2.667V8Z"
              />
            </svg>
          </div>
          <div className="flex flex-wrap items-center">
            {country ? (
              <div>
                <small>{orgName}</small>
                &nbsp;{" - "}&nbsp;
                <small>
                  {" "}
                  <span className="not-italic">📍{country}</span>
                </small>
              </div>
            ) : (
              <div>
                <small>{orgName}</small>
                {/* &nbsp;{" - "}&nbsp;
                <small>
                  {" "}
                  <span className="not-italic">📍</span>
                </small> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

TheEducationItems.propTypes = {
  name: PropTypes.string,
  orgName: PropTypes.string,
  country: PropTypes.string,
};

export default TheEducationItems;

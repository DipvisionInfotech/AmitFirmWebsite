import React from "react";
import bannerImage from "../assets/CA.jpg";

// Main Banner component containing the hero banner
const Banner = () => {
  return (
    <div className="h-70 md:h-screen font-sans">
      {/* Hero Banner Section */}
      <div
        className="relative w-full h-90 md:h-screen bg-cover bg-center"
        // Use a background image URL. This is a placeholder and should be replaced with your actual image.
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        {/* Semi-transparent overlay to make text more readable */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="max-w-4xl mx-auto">
            {/* Main title */}
            <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Welcome to <br />
              CA Amit P Kumar & Co.
            </h1>

            {/* Subtitle */}
            <p className="text-black text-lg sm:text-xl md:text-2xl font-light mb-8">
              Transforming Knowledge into Values
            </p>

            {/* "Contact Us" button with arrow icon */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-400 border border-transparent rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg"
            >
              Contact Us
              {/* SVG icon for the arrow */}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";

// Main App component for the information section
const Content = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      {/* The main container is now left-aligned */}

      <div className="max-w-6xl mx-auto">
        {/* Title of the section, now left-aligned */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          CA in Delhi
        </h2>
        {/* First paragraph of text */}
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The Chartered Accountants have been a significant part of not just the
          Indian economy but also of all the companies in the country which
          plays a crucial role in ensuring financial health. A Chartered
          Accountant is a professional who provides financial and tax services
          to individuals, businesses, and organizations. They are also known as
          Certified Public Accountants (CAPs). CA in Delhi works in all areas of
          finance, including auditing, taxation, financial planning, etc.
        </p>

        {/* Second paragraph of text */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          CA Amit P Kumar & Co., a Chartered Accountant firm, founded in 2011,
          by CA Amit P Kumar with the enthusiasm of providing the best
          consultancy and expertise. The team consists of highly skilled and
          experienced professionals by offering tax consultancy, accounting, tax
          auditing and financial advisory to meet our diverse client needs.
        </p>
        <div className="flex justify-center">
          {/* "Read More" button is now left-aligned */}
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-400 border border-transparent rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg"
          >
            Read More
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
  );
};

export default Content;

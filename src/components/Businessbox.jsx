import React from "react";
import { Fragment } from "react";

const Businessbox = () => {
  // Array of service objects with titles, descriptions, and SVG icons
  const services = [
    {
      title: "Foreign Company Registration",
      description:
        "For setting up a foreign company to establish a business as a subsidiary in India.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M12 22s-8-4-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.8-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      title: "Private Limited Company Registration",
      description:
        "The most popular form of corporate legal entity in India for Startups.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      title: "Public Limited Company Registration",
      description:
        "It is suitable for businesses that want to raise equity capital from the public.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5L22 7.5z" />
          <path d="M12 18V6" />
          <path d="M9 9h6" />
        </svg>
      ),
    },
    {
      title: "LLP Registration",
      description:
        "An ideal approach for small business in the unorganized sector having multiple promoters.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Nidhi Company Registration",
      description:
        "Develop the habit of economizing by collecting deposits and lending to members.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M12 2L2 7l10 5l10-5L12 2z" />
          <path d="M2 17l10 5l10-5" />
          <path d="M2 12l10 5l10-5" />
        </svg>
      ),
    },
    {
      title: "Producer Company Registration",
      description:
        "Ideal for starting the company for formers for agri purpose with 10 members.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "One Person Company Registration",
      description:
        "Business Entity ideal for single entrepreneurs aiming to start business with limited liability.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: "Partnership Registration",
      description:
        "Ideal for like-minded people for forming an entity with less procedural compliances.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "GST Registration",
      description:
        "GST Registration is applicable on goods (Turnover: 40 lakhs) and services (Turnover: 20 lakh).",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M15 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
          <path d="M12 13V21" />
          <path d="M12 13h-4" />
          <path d="M12 13h4" />
        </svg>
      ),
    },
    {
      title: "FSSAI Food License Registrations",
      description:
        "Food License for food entrepreneurs as a basic, state or Central License.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M12 2L2 7l10 5l10-5L12 2z" />
          <path d="M2 17l10 5l10-5" />
          <path d="M2 12l10 5l10-5" />
        </svg>
      ),
    },
    {
      title: "Import Export Code (IEC)",
      description:
        "Entrepreneurs/Entities planning to work overseas need to have Import Export Code.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
        </svg>
      ),
    },
    {
      title: "RERA Registrations",
      description:
        "Commercial or residential land of over 500sq m or having more than 8 apartments.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
          <path d="M12 6L6 12l6 6" />
          <path d="M18 6L12 12l6 6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          Business Registrations
        </h2>

        {/* Grid of service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Read More arrow */}
              <div className="mt-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600 transform group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Businessbox;

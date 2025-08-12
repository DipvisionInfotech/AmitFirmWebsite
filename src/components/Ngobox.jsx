import React from "react";
import { Fragment } from "react";

const Ngobox = () => {
  // Array of service objects with titles, descriptions, and SVG icons
  const services = [
    {
      title: "Trust Registration",
      description:
        "A Trust is an arrangement where owner or trustor of Trust transfers the property to a trustee.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-yellow-500"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          <path d="M12 12l-2-2" />
        </svg>
      ),
      bgGradient: "from-yellow-50 to-orange-100",
    },
    {
      title: "Society Registration",
      description:
        "A group of people working together to promote charitable activities like sports, music, culture, religion, art, education, etc.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-pink-500"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      bgGradient: "from-red-50 to-pink-100",
    },
    {
      title: "Section-8 Company",
      description:
        "Company formed with an object to promote commerce, art, science, sports, research, education, religion, protection of the environment, charity etc.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500"
        >
          <path d="M2 12s2 5 10 5 10-5 10-5-2-5-10-5-10 5-10 5z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      title: "FCRA Registration",
      description:
        "Foreign contributions or income from nations outside of India are governed by the Foreign Contribution Regulation Act (FCRA).",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      bgGradient: "from-green-50 to-teal-100",
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          NGO Registration
        </h2>

        {/* Grid of service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.bgGradient} p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300`}
            >
              {/* Flexbox utilities added to center the icon */}
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ngobox;

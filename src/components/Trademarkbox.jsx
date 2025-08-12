import React from "react";
import { Fragment } from "react";

const Trademarkbox = () => {
  // Array of service objects with titles, descriptions, icons, and a large number
  const services = [
    {
      number: "1",
      icon: (
        // The Trademark icon is now a simple text block
        <span className="text-5xl font-bold text-gray-800 leading-none">
          TM
        </span>
      ),
      title: "Trademark Registration",
      description:
        "Register your brand name/ logo and create your goodwill in the market.",
      gradient: "from-white to-gray-50",
    },
    {
      number: "2",
      icon: (
        // The Copyright icon is now a circle with a 'C'
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-800"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4H12V8" />
        </svg>
      ),
      title: "Copyright Registration",
      description:
        "Copyright is the legal right to ownership and enjoyment entitled to creators.",
      gradient: "from-white to-gray-50",
    },
    {
      number: "3",
      icon: (
        // A stylized icon for Design Registration
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-800"
        >
          <path d="M12 2L2 7l10 5l10-5L12 2zM2 17l10 5l10-5M2 12l10 5l10-5" />
        </svg>
      ),
      title: "Design Registration",
      description:
        "Protect any newly created shape, configuration, patterns and composition of lines or colours.",
      gradient: "from-white to-gray-50",
    },
    {
      number: "4",
      icon: (
        // Two test tubes for Patent Registration
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-800"
        >
          <path d="M14 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2zM8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8z" />
        </svg>
      ),
      title: "Patent Registration",
      description:
        "Secured invention or the special right given to an inventor by a govt to manufacture, sell or use invention",
      gradient: "from-white to-gray-50",
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          Trademark Registration
        </h2>

        {/* Grid of service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300 overflow-hidden bg-white"
            >
              {/* Large number in the background */}
              <div className="absolute top-0 right-0 text-gray-100 text-8xl font-bold opacity-75 leading-none">
                {service.number}
              </div>

              {/* Card content */}
              <div className="relative z-10 flex flex-col items-start text-left">
                {/* Icon */}
                <div className="mb-4">{service.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trademarkbox;

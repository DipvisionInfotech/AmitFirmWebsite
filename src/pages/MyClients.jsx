import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom

const clients = [
  {
    name: "ABC Pvt Ltd",
    logo: "/assets/clients/abc.png",
    feedback:
      "The team provides excellent tax consultation with quick turnaround.",
  },
  {
    name: "XYZ Enterprises",
    logo: "/assets/clients/xyz.png",
    feedback: "Highly professional service for audit and compliance.",
  },
  {
    name: "Global Tech",
    logo: "/assets/clients/global.png",
    feedback: "They guided us through complex corporate advisory smoothly.",
  },
  {
    name: "Metro Finance",
    logo: "/assets/clients/metro.png",
    feedback: "Trustworthy CA firm, always available for support.",
  },
];

export default function MyClients() {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-blue-600">Clients</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are proud to have partnered with amazing businesses across
          industries. Here’s what our clients say about us:
        </p>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-24 h-24 mx-auto object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {client.name}
            </h3>
            <p className="text-gray-600 italic mt-3">"{client.feedback}"</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Want to become our next client?
        </h2>
        <p className="text-gray-600 mt-2">
          Let’s work together and grow your business with expert financial
          guidance.
        </p>
        {/* ✅ Using Link correctly */}
        <Link
          to="/contact-us/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

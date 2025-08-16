import React from "react";

export default function Rightsection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Book an Appointment
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-lg"
        >
          Submit
        </button>
      </form>

      {/* Services */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Our Services
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>Private Limited Company Registration</li>
          <li>LLP Registration</li>
          <li>One Person Company Registration</li>
          <li>GST Registration</li>
          <li>Trademark Registration</li>
        </ul>
      </div>
    </div>
  );
}

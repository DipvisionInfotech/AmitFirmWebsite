import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function Rightsection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Book an Appointment
      </h2>
      <ContactForm />

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

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Get in Touch
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12">
          Have questions? We’d love to hear from you. Reach out to us anytime!
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center"
          >
            <FaPhoneAlt className="text-blue-500 text-4xl mb-4 transform rotate-12" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+91 9999999999</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center"
          >
            <FaEnvelope className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">info@caamit.com</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center"
          >
            <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">
              Plot Number 151 Pocket 9 First Floor Rohini Sector-21 Delhi-110086
            </p>
          </motion.div>
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <ContactForm />

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.586057051913!2d77.21672171508367!3d28.632878082417376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1e14c7df67%3A0x77e4e0a4c6cdbb5f!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1639397741196!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

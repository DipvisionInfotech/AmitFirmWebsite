import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [responseMsg, setResponseMsg] = useState("");
  const [isError, setIsError] = useState(false); // ✅ track success/error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation: check if any field is empty
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setIsError(true);
      setResponseMsg("All fields are mandatory!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setIsError(false); // ✅ success
        setResponseMsg(data.msg || "Message sent successfully!");
      } else {
        setIsError(true); // ❌ error from backend
        setResponseMsg(data.msg || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setIsError(true); // ❌ network/server error
      setResponseMsg("Something went wrong!");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-800">
        Book An Appointment
      </h3>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="4"
      ></textarea>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-lg"
      >
        Submit
      </motion.button>

      {/* ✅ dynamic message color */}
      {/* {responseMsg && (
        <p style={{ color: isError ? "red" : "green" }}>{responseMsg}</p>
      )} */}
      {responseMsg && (
        <p style={{ color: responseMsg.includes("success") ? "green" : "red" }}>
          {responseMsg}
        </p>
      )}
    </motion.form>
  );
}

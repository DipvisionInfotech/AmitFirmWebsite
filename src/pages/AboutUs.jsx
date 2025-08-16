// AboutUsPage.jsx
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.webp";

export default function AboutUsPage() {
  const team = [
    {
      name: "CA Amit P Kumar",
      role: "Founder & Senior CA",
      img: profile,
    },
    {
      name: "CA Priya Mehta",
      role: "Tax Consultant",
      img: profile,
    },
    {
      name: "CA Amit Verma",
      role: "Audit Specialist",
      img: profile,
    },
    {
      name: "CA Neha Gupta",
      role: "Corporate Advisor",
      img: profile,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-3xl mx-auto text-lg">
          We are a team of Chartered Accountants in Delhi, committed to
          providing tax, audit, and business advisory services with transparency
          and excellence.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          To simplify financial complexities for businesses and individuals,
          ensuring compliance and growth with personalized solutions.
        </p>
      </section>

      {/* Our Team */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-blue-500 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Call & Email */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
              Reach out to us for company registration, tax consultation, and
              other CA services in Delhi.
            </p>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-600 text-xl rotate-0" />
              <span className="text-lg text-gray-700 font-medium">
                +91 9999999999
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span className="text-lg text-gray-700 font-medium">
                contact@amitcadehli.com
              </span>
            </div>
          </div>

          {/* Right Side - Location Map */}
          <div className="w-full h-72 md:h-full">
            <iframe
              title="CA Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.251228139849!2d77.21672131508352!3d28.61393908242216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3c42a0f1d1%3A0xd5df6c3f46a1e6f1!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1676469999999"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-2xl shadow-md"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

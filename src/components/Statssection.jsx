import React from "react";
import { Phone, CheckCircle, Users, Award } from "lucide-react";

export default function Statssection() {
  const stats = [
    {
      number: "500+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "13+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Phone className="w-6 h-6" />,
    },
  ];
  return (
    <>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                // Correct use of template literal for dynamic class name
                className={`text-center group hover:scale-105 transition-transform duration-300 delay-${
                  (index + 1) * 100
                }`}
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

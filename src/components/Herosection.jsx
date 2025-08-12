import React, { useState, useEffect } from "react";
import { Mail, MapPin, ArrowRight, CheckCircle, Award } from "lucide-react";

export default function Herosection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    // Set a timeout to trigger the animation after a brief delay
    // This ensures the component has mounted before the animation starts
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Left Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Trusted Since 2011
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Trusted
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {" "}
                    Financial{" "}
                  </span>
                  Partners
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Expert chartered accountant services in Delhi. From tax
                  planning to business advisory, we provide comprehensive
                  financial solutions to help your business thrive.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  View Services
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Rohini, Delhi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">info@amit.com</span>
                </div>
              </div>
            </div>

            {/* Hero Right Card */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-white font-semibold text-lg mb-3">
                      Quick Services
                    </h3>
                    <div className="space-y-3">
                      {[
                        "ITR Filing",
                        "GST Registration",
                        "Company Formation",
                        "Tax Planning",
                      ].map((service, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between text-white/90"
                        >
                          <span>{service}</span>
                          <CheckCircle className="w-4 h-4" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-white/80 text-sm">Happy Clients</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white">13+</div>
                      <div className="text-white/80 text-sm">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

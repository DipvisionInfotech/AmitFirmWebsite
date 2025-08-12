import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Calendar,
  FileText,
  Calculator,
  Building2,
  Globe,
  Award,
} from "lucide-react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Content from "./Content";
import Ngobox from "./Ngobox";
import Trademarkbox from "./Trademarkbox";
import Businessbox from "./Businessbox";

const Homepage2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    // Set a timeout to trigger the animation after a brief delay
    // This ensures the component has mounted before the animation starts
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "ITR Filing",
      description:
        "ITR is a form in which an Assessee files his information about Income and tax payable to the Income Tax Department.",
      // features: ["Online Filing", "Expert Review", "Maximum Refunds"],
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "ROC Filing",
      description:
        "Annual General Meeting of the company is conducted once a year and the due date for the first Annual General Meeting.",
      // features: ["Investment Planning", "Tax Optimization", "Legal Compliance"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "GST Return",
      description:
        "All business  & entrepreneurs who are registered under the GST mechanism have to mandatorily file the GST returns in the relevant form.",
      // features: ["Internal Audits", "Statutory Audits", "GST Audits"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "TDS Return",
      description:
        "TDS return is a quarterly statement to be given to the IT department. It is compulsory for Deductor to submit a TDS return on time.",
      // features: ["FEMA Compliance", "Tax Treaties", "Repatriation"],
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "GST Audit",
      description:
        "GST Audit refers to the examination of the returns, records and other important documents which a taxable individual maintains.",
      // features: ["Registration", "Compliance", "Advisory"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Bank Audit",
      description:
        "They handle a huge amount of deposits and savings of the public, so they have to be closely monitored and reviewed.",
      // features: ["Business Planning", "Financial Analysis", "Growth Strategy"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "NGO Audit",
      description:
        "Non-profit making organization in which funds are raised from members, donors or contributors besides from receiving donations.",
      // features: ["Business Planning", "Financial Analysis", "Growth Strategy"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Tax Audit",
      description:
        "There are various types of audits under different laws such as company audit, statutory audit, cost audit, stock audit, etc.",
      // features: ["Business Planning", "Financial Analysis", "Growth Strategy"],
    },
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Amit P Kumar & Co.
                </h1>
                <p className="text-sm text-gray-600">Chartered Accountants</p>
              </div>
            </div>
            <Navbar />
            <div className="hidden md:flex items-center space-x-6">
              {/* <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="w-4 h-4" />
                <span className="font-medium">‪+91 9999999999‬</span>
              </div> */}
              <button className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                <Phone className="w-4 h-4" />
                <span className="font-medium">‪+91 9999999999‬</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <Banner />
      <Content />
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

      <Ngobox />
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
      <Businessbox />
      <Trademarkbox />
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Our Expertise
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Audit and Tax Management
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{service.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div> */}

                <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get expert chartered accountant services from CA Amit P Kumar and
              team. Schedule your free consultation today and discover how we
              can help your business grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <Phone className="w-5 h-5 inline mr-2" />
                Call +91 9999999999
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                <Calendar className="w-5 h-5 inline mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Amit P Kumar & Co.</h3>
                  <p className="text-gray-400 text-sm">Chartered Accountants</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Expert financial services and tax consultancy in Delhi since
                2011.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  ITR Filing
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Tax Planning
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  GST Services
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Company Formation
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  NRI Taxation
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Our Team
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Careers
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+91 9999999999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>info@amit.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 mt-1" />
                  <span>
                    Plot Number 151 Pocket 9 <br /> First Floor Rohini Sector-21
                    <br />
                    Delhi-110086
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Amit P Kumar & Co. All rights reserved. | Founded by
              CA Amit
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage2;

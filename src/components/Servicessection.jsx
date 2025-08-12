import React from "react";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  FileText,
  Calculator,
  Building2,
  Globe,
} from "lucide-react";

export default function Servicessection() {
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
  return (
    <>
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
                <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

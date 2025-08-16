import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Faqsection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-8 px-4 md:px-10 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-4 border-blue-900 inline-block">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 bg-gray-50 hover:bg-blue-50 transition-all duration-200"
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp className="text-blue-900" />
              ) : (
                <FaChevronDown className="text-blue-900" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-white border-t border-gray-200">
                <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import { FaCheckCircle } from "react-icons/fa";
import Faqsection from "./Faqsection";
import Rightsection from "./Rightsection";

export default function ServicePage({ content }) {
  return (
    <div className="bg-blue-50 min-h-screen py-10 px-4 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Left Side Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {content.title}
            </h1>
            <p className="text-gray-700 leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Benefits of {content.title.split(" in")[0]}
            </h2>
            <ul className="space-y-2 text-gray-700">
              {content.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  {b.icon}
                  {b.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Process of {content.title.split(" in")[0]}
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              {content.process.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Documents Required */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Documents Required
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {content.documents.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </div>

          {/* FAQs */}
          <Faqsection faqs={content.faqs} />
        </div>

        {/* Right Side Form */}
        <Rightsection />
      </div>
    </div>
  );
}

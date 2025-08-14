import React from "react";
import { Phone, Calendar } from "lucide-react";

export default function Ctasection() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-blue-400">
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
              <button className="bg-white text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <Phone className="w-5 h-5 inline mr-2" />
                Call +91 9999999999
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-400 transition-all duration-300">
                <Calendar className="w-5 h-5 inline mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

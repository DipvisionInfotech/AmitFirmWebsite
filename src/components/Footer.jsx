import React from "react";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <>
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
    </>
  );
}

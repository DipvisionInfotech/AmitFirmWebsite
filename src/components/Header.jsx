import React from "react";
import { Phone } from "lucide-react";
import Navbar from "./Navbar";
import Logosection from "./Logosection";

export default function Header() {
  return (
    <>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="bg-white container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logosection />
            <Navbar />
            <div className="hidden md:flex items-center space-x-6">
              <button className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                <Phone className="w-4 h-4" />
                <span className="font-medium">‪+91 9999999999‬</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

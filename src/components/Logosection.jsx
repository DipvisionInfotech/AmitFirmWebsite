import React from "react";
import { Building2 } from "lucide-react";

export default function Logosection() {
  return (
    <>
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
    </>
  );
}

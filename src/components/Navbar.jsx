// import React from "react";
// import { ChevronDown } from "lucide-react";

// const Navbar = () => {
//   return (
//     <nav className="hidden lg:flex items-center space-x-8">
//       <div className="relative group">
//         <a
//           href="#"
//           className="text-gray-700 hover:text-blue-900 font-medium flex items-center"
//         >
//           Start Business <ChevronDown className="w-4 h-4 ml-1" />
//         </a>
//         <div className="absolute top-full left-0 mt-5 w-120 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//           <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-0 py-1">
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Company Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Private Limited Company Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Public Limited Company Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Limited Liability Partnership Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               One Person Company Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Nidhi Company Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Producer Company Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Foreign Company Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Partnership Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Sole Proprietorship Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               GST Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               FSSAI Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Import Export Code
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               ISO Certification
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               RERA Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               MSME Udyam Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Shop Act Registration
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Business Registration Number (BRN)
//             </a>
//             <a
//               href="#"
//               className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Startup Registration
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="relative group">
//         <a
//           href="#"
//           className="text-gray-700 hover:text-blue-900 font-medium flex items-center"
//         >
//           NGO <ChevronDown className="w-4 h-4 ml-1" />
//         </a>
//         <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//           <div className="py-2">
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               NGO Registration
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Section 8 NPO Registration
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Trust Registration
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Society Registration
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               NGO Darpan Registration
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               FCRA Registration
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               80G 12A Registration
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Corporate Social Responsibility
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="relative group">
//         <a
//           href="#"
//           className="text-gray-700 hover:text-blue-900 font-medium flex items-center"
//         >
//           Trademark <ChevronDown className="w-4 h-4 ml-1" />
//         </a>
//         <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//           <div className="py-2">
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Trademark Registration
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Copyright Registration
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Design Registration
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
//             >
//               Patent Registration
//             </a>
//           </div>
//         </div>
//       </div>
//       <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">
//         Blog
//       </a>
//       <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">
//         About Us
//       </a>
//       <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">
//         Contact
//       </a>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { ChevronDown, Menu, X, Plus, Minus, Building2 } from "lucide-react";

// Main App component containing the Navbar
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const menuItems = [
    {
      name: "Start Business",
      dropdown: [
        { href: "#", label: "Company Registration" },
        { href: "#", label: "Private Limited Company Registration" },
        { href: "#", label: "Public Limited Company Registration" },
        { href: "#", label: "Limited Liability Partnership Registration" },
        { href: "#", label: "One Person Company Registration" },
        { href: "#", label: "Nidhi Company Registration" },
        { href: "#", label: "Producer Company Registration" },
        { href: "#", label: "Foreign Company Registration" },
        { href: "#", label: "Partnership Registration" },
        { href: "#", label: "Sole Proprietorship Registration" },
        { href: "#", label: "GST Registration" },
        { href: "#", label: "FSSAI Registration" },
        { href: "#", label: "Import Export Code" },
        { href: "#", label: "ISO Certification" },
        { href: "#", label: "RERA Registration" },
        { href: "#", label: "MSME Udyam Registration" },
        { href: "#", label: "Shop Act Registration" },
        { href: "#", label: "Business Registration Number (BRN)" },
        { href: "#", label: "Startup Registration" },
      ],
    },
    {
      name: "NGO",
      dropdown: [
        { href: "#", label: "NGO Registration" },
        { href: "#", label: "Section 8 NPO Registration" },
        { href: "#", label: "Trust Registration" },
        { href: "#", label: "Society Registration" },
        { href: "#", label: "NGO Darpan Registration" },
        { href: "#", label: "FCRA Registration" },
        { href: "#", label: "80G 12A Registration" },
        { href: "#", label: "Corporate Social Responsibility" },
      ],
    },
    {
      name: "Trademark",
      dropdown: [
        { href: "#", label: "Trademark Registration" },
        { href: "#", label: "Copyright Registration" },
        { href: "#", label: "Design Registration" },
        { href: "#", label: "Patent Registration" },
      ],
    },
    { name: "Blog", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-white bg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.dropdown ? (
                <>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-900 font-medium flex items-center"
                  >
                    {item.name}{" "}
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                  </a>
                  <div
                    className={`absolute top-full left-0 mt-5 ${
                      item.dropdown.length > 9 ? "w-140" : "w-64"
                    } bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}
                  >
                    {/* Responsive grid for the "Start Business" dropdown */}
                    <div
                      className={`${
                        item.name === "Start Business"
                          ? "grid grid-cols-2 gap-0"
                          : "py-2"
                      }`}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 font-medium"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 rounded p-1 z-10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`fixed inset-0 bg-white h-screen transition-transform duration-300 z-40 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="lg:hidden flex justify-between p-4">
          {/* <a href="#" className="text-2xl font-bold text-gray-800">
            Amit P Kumar & Co.
          </a> */}
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
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 rounded p-1 z-10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="p-4 pt-4 flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full text-left text-lg font-medium text-gray-800 py-2 flex justify-between items-center"
                  >
                    {item.name}
                    {openDropdown === item.name ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === item.name
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 border-l border-gray-200 mt-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block text-gray-600 hover:text-blue-900 py-1"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block text-lg font-medium text-gray-800 py-2"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

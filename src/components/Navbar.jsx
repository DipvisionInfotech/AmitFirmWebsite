import React, { useState } from "react";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";
import Logosection from "./Logosection";
import logo from "../assets/WhatsApp.svg.webp";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null); // NEW: For inner accordions

  const services = [
    {
      name: "Business Registration",
      sub: [
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
      ],
    },
    {
      name: "Licenses",
      sub: [
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
      sub: [
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
      sub: [
        { href: "#", label: "Trademark Registration" },
        { href: "#", label: "Copyright Registration" },
        { href: "#", label: "Design Registration" },
        { href: "#", label: "Patent Registration" },
      ],
    },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-1">
        <Logosection />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-900">
              Home
            </a>
          </li>
          <li className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-900">
              Services <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[200px]">
              <ul>
                {services.map((cat, idx) => (
                  <li key={idx} className="relative group/item">
                    <div className="px-4 py-2 hover:bg-blue-100 flex justify-between">
                      {cat.name}
                      {cat.sub.length > 0 && (
                        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                      )}
                    </div>
                    {cat.sub.length > 0 && (
                      <div className="absolute top-0 left-full bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200">
                        <ul className="min-w-[300px] py-2">
                          {cat.sub.map((sub, i2) => (
                            <li key={i2}>
                              <a
                                href={sub.href}
                                className="block px-4 py-2 text-sm hover:bg-blue-100"
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-900">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-900">
              Insights
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-900">
              Contact Us
            </a>
          </li>
        </ul>

        {/* WhatsApp Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="flex items-center space-x-1 bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-3 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
            <img src={logo} alt="WhatsApp Logo" className="w-6 h-6" />
            <span className="font-medium">‪+91 9999999999‬</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-gray-700 hover:text-blue-900"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white min-h-screen border-t border-gray-200 overflow-y-auto max-h-[80vh]">
          <ul className="px-4 py-2 space-y-2">
            <li>
              <a href="#" className="block py-2">
                Home
              </a>
            </li>

            {/* Services Accordion */}
            <li>
              <button
                onClick={() =>
                  setOpenCategory(
                    openCategory === "services" ? null : "services"
                  )
                }
                className="flex justify-between w-full py-2"
              >
                Services {openCategory === "services" ? <Minus /> : <Plus />}
              </button>

              {openCategory === "services" && (
                <div className="pl-4">
                  {services.map((cat, idx) => (
                    <CategoryAccordion
                      key={idx}
                      category={cat}
                      isOpen={openSubCategory === idx}
                      onToggle={() =>
                        setOpenSubCategory(openSubCategory === idx ? null : idx)
                      }
                    />
                  ))}
                </div>
              )}
            </li>
            <li>
              <a href="#" className="block py-2">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                Insights
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const CategoryAccordion = ({ category, isOpen, onToggle }) => {
  return (
    <div>
      <button onClick={onToggle} className="flex justify-between w-full py-2">
        {category.name} {isOpen ? <Minus /> : <Plus />}
      </button>
      {isOpen && category.sub.length > 0 && (
        <div className="pl-4">
          {category.sub.map((sub, idx) => (
            <a key={idx} href={sub.href} className="block py-1">
              {sub.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

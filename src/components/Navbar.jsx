import React, { useState } from "react";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
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
        { to: "company-registration/", label: "Company Registration" },
        {
          to: "private-limited-company/",
          label: "Private Limited Company Registration",
        },
        {
          to: "public-limited-company/",
          label: "Public Limited Company Registration",
        },
        { to: "#", label: "Limited Liability Partnership Registration" },
        { to: "#", label: "One Person Company Registration" },
        { to: "#", label: "Nidhi Company Registration" },
        { to: "#", label: "Producer Company Registration" },
        { to: "#", label: "Foreign Company Registration" },
        { to: "#", label: "Partnership Registration" },
        { to: "#", label: "Sole Proprietorship Registration" },
      ],
    },
    {
      name: "Licenses",
      sub: [
        { to: "#", label: "GST Registration" },
        { to: "#", label: "FSSAI Registration" },
        { to: "#", label: "Import Export Code" },
        { to: "#", label: "ISO Certification" },
        { to: "#", label: "RERA Registration" },
        { to: "#", label: "MSME Udyam Registration" },
        { to: "#", label: "Shop Act Registration" },
        { to: "#", label: "Business Registration Number (BRN)" },
        { to: "#", label: "Startup Registration" },
      ],
    },
    {
      name: "NGO",
      sub: [
        { to: "#", label: "NGO Registration" },
        { to: "#", label: "Section 8 NPO Registration" },
        { to: "#", label: "Trust Registration" },
        { to: "#", label: "Society Registration" },
        { to: "#", label: "NGO Darpan Registration" },
        { to: "#", label: "FCRA Registration" },
        { to: "#", label: "80G 12A Registration" },
        { to: "#", label: "Corporate Social Responsibility" },
      ],
    },
    {
      name: "Trademark",
      sub: [
        { to: "#", label: "Trademark Registration" },
        { to: "#", label: "Copyright Registration" },
        { to: "#", label: "Design Registration" },
        { to: "#", label: "Patent Registration" },
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
            <Link to="/" className="text-gray-700 hover:text-blue-900">
              Home
            </Link>
          </li>
          <li className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-900">
              Services <ChevronDown className="w-4 h-4 ml-1 mt-1" />
            </button>
            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[200px]">
              <ul>
                {services.map((cat, idx) => (
                  <li key={idx} className="relative group/item">
                    <div className="px-4 py-2 text-gray-700 hover:bg-blue-100 flex justify-between">
                      {cat.name}
                      {cat.sub.length > 0 && (
                        <ChevronDown className="w-4 h-4 mt-1 rotate-[-90deg]" />
                      )}
                    </div>
                    {cat.sub.length > 0 && (
                      <div className="absolute top-0 left-full bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 text-gray-700">
                        <ul className="min-w-[300px] py-2">
                          {cat.sub.map((sub, i2) => (
                            <li key={i2}>
                              <Link
                                to={sub.to}
                                className="block px-4 py-2 text-sm hover:bg-blue-100"
                              >
                                {sub.label}
                              </Link>
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
            <Link to="/clients" className="text-gray-700 hover:text-blue-900">
              Our Clients
            </Link>
          </li>
          <li>
            <Link to="about-us/" className="text-gray-700 hover:text-blue-900">
              About Us
            </Link>
          </li>
          <li>
            <Link to="blogs/" className="text-gray-700 hover:text-blue-900">
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="contact-us/"
              className="text-gray-700 hover:text-blue-900"
            >
              Contact Us
            </Link>
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
              <Link
                to="/"
                className="block py-2"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
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
                      closeMenu={() => setMobileOpen(false)} // pass close function
                    />
                  ))}
                </div>
              )}
            </li>
            <li>
              <Link
                to="about-us/"
                className="block py-2"
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="clients/"
                className="block py-2"
                onClick={() => setMobileOpen(false)}
              >
                Our Clients
              </Link>
            </li>
            <li>
              <Link
                to="blogs/"
                className="block py-2"
                onClick={() => setMobileOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="contact-us/"
                className="block py-2"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const CategoryAccordion = ({ category, isOpen, onToggle, closeMenu }) => {
  return (
    <div>
      <button onClick={onToggle} className="flex justify-between w-full py-2">
        {category.name} {isOpen ? <Minus /> : <Plus />}
      </button>
      {isOpen && category.sub.length > 0 && (
        <div className="pl-4">
          {category.sub.map((sub, idx) => (
            <Link
              to={sub.to}
              key={idx}
              className="block py-1"
              onClick={closeMenu}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

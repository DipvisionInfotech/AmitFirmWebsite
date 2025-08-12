import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

const Homepage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              ‪+91-9785312345‬
            </span>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              info@cagmc.com
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-300" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-300" />
            <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-300" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-blue-300" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-900">
                CA GOYAL MANGAL & CO.
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-900 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-900 font-medium"
              >
                About Us
              </a>
              <div className="relative group">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-900 font-medium flex items-center"
                >
                  Services <ChevronDown className="w-4 h-4 ml-1" />
                </a>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      ITR Filing
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      Tax Planning
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      GST Registration
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      Company Formation
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      FCRA Registration
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      Trademark Registration
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-900 font-medium"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-900 font-medium"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-gray-700 hover:text-blue-900 py-2">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-900 py-2">
                  About Us
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-900 py-2">
                  Services
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-900 py-2">
                  Blog
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-900 py-2">
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                CA in Jaipur - Professional Chartered Accountant Services
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Chartered Accountants have been a significant part of not
                just the Indian economy but also of all the companies in the
                country which plays a crucial role in ensuring financial health.
                A Chartered Accountant is a professional who provides financial
                and tax services to individuals, businesses, and organizations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                CA Goyal Mangal & Co., a Chartered Accountant firm, founded in
                2011, by CA Pulkit Goyal with the enthusiasm of providing the
                best consultancy and expertise. The team consists of highly
                skilled and experienced professionals by offering tax
                consultancy, accounting, tax auditing and financial advisory to
                meet our diverse client needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors">
                  Get Consultation
                </button>
                <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-md hover:bg-blue-900 hover:text-white transition-colors">
                  Our Services
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-900"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-900"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-900"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-900">
                    <option>Select Service</option>
                    <option>ITR Filing</option>
                    <option>Tax Planning</option>
                    <option>GST Registration</option>
                    <option>Company Formation</option>
                    <option>Other</option>
                  </select>
                </div>
                <button className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition-colors">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive chartered accountant services to help
              individuals and businesses meet their financial and regulatory
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trust Registration */}
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trust Registration
              </h3>
              <p className="text-gray-600">
                A Trust is an arrangement where owner or trust or of Trust
                transfers the property to a trustee.
              </p>
            </div>

            {/* Society Registration */}
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Society Registration
              </h3>
              <p className="text-gray-600">
                A group of people working together to promote charitable
                activities like sports, music, culture, religion, art,
                education, etc.
              </p>
            </div>

            {/* Section 8 Company */}
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Section 8 Company
              </h3>
              <p className="text-gray-600">
                Company formed with an object to promote commerce, art, science,
                sports, research, education, religion, protection of the
                environment, charity etc.
              </p>
            </div>

            {/* FCRA Registration */}
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                FCRA Registration
              </h3>
              <p className="text-gray-600">
                Foreign contributions or income from nations outside of India
                are governed by the Foreign Contribution Regulation Act (FCRA).
              </p>
            </div>

            {/* Copyright Registration */}
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Copyright Registration
              </h3>
              <p className="text-gray-600">
                Copyright is the legal right to ownership and enjoyment entitled
                to creators.
              </p>
            </div>

            {/* Design Registration */}
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Design Registration
              </h3>
              <p className="text-gray-600">
                Protect any newly created shape, configuration, patterns and
                composition of lines or colours.
              </p>
            </div>

            {/* Patent Registration */}
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Patent Registration
              </h3>
              <p className="text-gray-600">
                Secured invention or the special right given to an inventor by a
                govt to manufacture, sell or use invention.
              </p>
            </div>

            {/* ITR Filing */}
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ITR Filing
              </h3>
              <p className="text-gray-600">
                Professional income tax return filing services for individuals
                and businesses with maximum refunds.
              </p>
            </div>

            {/* GST Registration */}
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                GST Registration
              </h3>
              <p className="text-gray-600">
                Complete GST registration and compliance services for businesses
                of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CA Goyal Mangal & Co.?
            </h2>
            <p className="text-lg text-gray-600">
              Founded in 2011 by CA Pulkit Goyal, we bring years of expertise
              and dedication to serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">13+</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Years Experience
              </h4>
              <p className="text-gray-600">
                Serving clients since 2011 with expertise and dedication
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">500+</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Happy Clients
              </h4>
              <p className="text-gray-600">
                Trusted by hundreds of satisfied clients
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Support Available
              </h4>
              <p className="text-gray-600">
                Round the clock support for all your queries
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Client Satisfaction
              </h4>
              <p className="text-gray-600">
                Committed to delivering the best results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact CA Goyal Mangal & Co. for professional chartered accountant
            services in Jaipur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919785312345"
              className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +91-9785312345
            </a>
            <a
              href="mailto:info@cagmc.com"
              className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CA GOYAL MANGAL & CO.</h3>
              <p className="text-gray-400 mb-4">
                Professional Chartered Accountant services in Jaipur since 2011.
                Founded by CA Pulkit Goyal.
              </p>
              <div className="flex space-x-3">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    ITR Filing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tax Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    GST Registration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Company Formation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FCRA Registration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+91-9785312345</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>info@cagmc.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CA Goyal Mangal & Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import CompanyRegistrationPage from "./pages/CompanyRegistrationPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateLimitedRegistrationPage from "./pages/PrivateLimitedRegistrationPage";
import PublicLimitedCompanyPage from "./pages/PublicLimitedCompanyPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BlogList from "./pages/BlogList";
import BlogTemplate from "./pages/BlogTemplate";
import MyClients from "./pages/MyClients";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router basename="/AmitFirmWebsite">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/company-registration/"
            element={<CompanyRegistrationPage />}
          />
          <Route
            path="/private-limited-company/"
            element={<PrivateLimitedRegistrationPage />}
          />
          <Route
            path="/public-limited-company/"
            element={<PublicLimitedCompanyPage />}
          />
          <Route path="/about-us/" element={<AboutUs />} />
          <Route path="/contact-us/" element={<ContactUs />} />
          <Route path="/blogs/" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogTemplate />} />
          <Route path="/clients/" element={<MyClients />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

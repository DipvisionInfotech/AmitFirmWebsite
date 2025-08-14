import Banner from "./Banner";
import Content from "./Content";
import Ngobox from "./Ngobox";
import Trademarkbox from "./Trademarkbox";
import Businessbox from "./Businessbox";
import Herosection from "./Herosection";
import Statssection from "./Statssection";
import Servicessection from "./Servicessection";
import Ctasection from "./Ctasection";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      <Navbar />
      <Banner />
      <Content />
      <Herosection />
      <Ngobox />
      <Statssection />
      <Businessbox />
      <Trademarkbox />
      <Servicessection />
      <Testimonials />
      <Ctasection />
      <Footer />
    </div>
  );
};

export default Homepage;

import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Ngobox from "./Ngobox";
import Trademarkbox from "./Trademarkbox";
import Businessbox from "./Businessbox";
import Header from "./Header";
import Herosection from "./Herosection";
import Statssection from "./Statssection";
import Servicessection from "./Servicessection";
import Ctasection from "./Ctasection";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      <Header />
      <Banner />
      <Content />
      <Herosection />
      <Ngobox />
      <Statssection />
      <Businessbox />
      <Trademarkbox />
      <Servicessection />
      <Ctasection />
      <Footer />
    </div>
  );
};

export default Homepage;

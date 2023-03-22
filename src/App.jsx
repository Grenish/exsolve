import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Team,
  Aim,
  Works,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-rich-black">
        <div className="bg-hero-3 bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="bg-hero-2 bg-cover bg-no-repeat bg-center">
          <Aim />
        </div>
        <Team />
        <Works />
        <Contact />
        <div className="bg-hero-1 bg-cover bg-no-repeat bg-center">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

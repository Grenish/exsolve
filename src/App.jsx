import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Team,
  Works,
  Testimonials,
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
        <Team />
        <Works />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

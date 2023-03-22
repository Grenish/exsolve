import React from "react";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <div className="w-full bg-hero-1 bg-cover bg-no-repeat bg-center flex justify-center h-10 items-center">
      <p className="text-ash-gray text-[12px]">
        <span>Exsolve</span> @ <span>2023</span> |{" "}
        <span>Made with passion</span>
      </p>
    </div>
  );
};

export default SectionWrapper(Footer, "");

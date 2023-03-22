import React from "react";

import { styles } from "../styles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex xs:flex-row flex-col justify-between md:items-center items-end gap-5`}
      >
        <div className="">
          <h1 className={`${styles.heroHeadText}`}>Hello there!</h1>
          <p className={`${styles.heroSubText}`}>
            We showcase our team's expertise, creativity,
            <br className="sm:block hidden" /> and dedication to crafting custom
            solutions <br className="sm:block hidden" />
            that help our clients achieve their online goals.
          </p>
          <div className="flex xs:flex-row flex-col xs:gap-5 gap-0 mt-5">
            <a href="mailto:example@example.com">
              <button className="p-2 xs:w-[170px] w-[140px] xs:text-[16px] text-[11px]  bg-honey-dew rounded-xl transition text-rich-black hover:bg-white-100 xs:p-4">
                Email Us
              </button>
            </a>
            <a href="#contact">
              <button className="p-2 xs:w-[170px] w-[140px] xs:text-[16px] text-[11px] xs:mt-0 mt-5 border-[2px] border-honey-dew rounded-xl transition text-white-100 hover:backdrop-blur-sm xs:p-4">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[54px] rounded-3xl border-[3px] border-ash-gray items-start p-1.5">
            <motion.div
              animate={{
                y: [0, 25, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-xl bg-ash-gray"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

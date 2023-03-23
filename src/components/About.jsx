import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Us</p>
        <h2 className={styles.sectionHeadText}>Who are we?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-honey-dew text-[17px] max-w-3xl leading-[30px]"
      >
        Our team of college undergraduates is highly skilled in web development
        and software development, with a strong command of various frameworks
        and programming languages. We have a proven track record of delivering
        high-quality products within tight deadlines. Additionally, we offer a
        range of customizable web services tailored to meet your specific needs.
        We pride ourselves on our professionalism and commitment to providing
        exceptional results for our clients.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");

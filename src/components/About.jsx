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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, animi?
        Iste doloribus fuga necessitatibus qui. Fugit nostrum voluptate vel
        iusto corrupti alias. Alias maxime nihil adipisci vero dolore nisi
        fugiat est provident ipsam nobis! Alias atque maiores minus repellat!
        Pariatur animi aliquam amet similique nesciunt eius accusamus ab
        explicabo. Maiores veniam harum ullam dignissimos.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");

import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { aim } from "../constants";

const Card = ({ index, title, number }) => {
  return (
    <motion.div variants={fadeIn("down", "spring", 0.5 * index, 0.75)}>
      <>
        <p className={`mb-3 ${styles.aimSubText}`}>{title}</p>
        <p className="xs:text-[70px] text-[50px] text-center font-bold leading-[50px] text-ash-gray">
          {number}
        </p>
      </>
    </motion.div>
  );
};

const Aim = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="max-w-xl  flex justify-between"
      >
        {aim.map((goal, index) => (
          <Card key={aim.title} index={index} {...goal} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Aim, "");
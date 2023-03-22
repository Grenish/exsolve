import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { members } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const MemberCard = ({
  index,
  name,
  description,
  skills,
  image,
  profile_link1,
  icon,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-[300px] bg-dark-purple rounded-xl"
    >
      <div className="w-full flex justify-center my-2">
        <img
          src={image}
          alt={name}
          className="w-[280px] h-[300px] object-cover rounded-xl transition hover:-translate-y-4"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-center text-[18px] font-bold text-white-100">
          {name}
        </p>
        <p className="text-center text-secondary">{description}</p>
        <p className="text-center text-ash-gray w-[280px]">{skills}</p>
        <a href={profile_link1} target="_blank">
          <img src={icon} alt="github" className="w-[28px] my-2" />
        </a>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <>
      <motion.div className={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Our Team</p>
        <h2 className={`${styles.sectionHeadText}`}>Meet our expert minds</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {members.map((member, index) => (
          <MemberCard key={`member-${index}`} index={index} {...member} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Team, "");

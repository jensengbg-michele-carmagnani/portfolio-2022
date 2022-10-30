import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typing";

type Props = { skills: SkillType[] };

const Skills: React.FC<Props> = ({ skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto pt-24 md:pt-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h4 className="absolute top-36 tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency{" "}
      </h4>
      <div className="grid grid-cols-4  gap-5 ">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          // eslint-disable-next-line no-underscore-dangle
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          // eslint-disable-next-line no-underscore-dangle
          <Skill key={skill._id} skill={skill} directinLeft />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

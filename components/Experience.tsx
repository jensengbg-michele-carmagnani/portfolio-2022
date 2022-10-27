import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typing";
import ExperienceCard from "./ExperienceCard";

type Props = { experiences: Experience[] };

const Experience: React.FC<Props> = ({ experiences }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center xl:px-10 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-base md:text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin">
        {experiences.map((experience) => (
          // eslint-disable-next-line no-underscore-dangle
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

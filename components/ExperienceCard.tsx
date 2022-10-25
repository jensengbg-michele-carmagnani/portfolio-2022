import Image from "next/image";
import React from "react";
import Quartr from "../public/Quartr.jpeg";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  date: {
    start: string;
    end: string;
  };
  summary: string[];
};

const ExperienceCard: React.FC<Props> = ({
  title,
  description,
  date,
  tech,
  summary,
}) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden scrollbar-track-gray-400/20 ">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src={Quartr}
          alt="quartr"
          width={200}
          height={200}
          className="rounded-full object-cover object-center"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Web developer</h4>
        <p className="font-bold text-2xl mt-1">Frontend and backend</p>
        <div className="flex space-x-2 my-2">
          <Image src={Quartr} alt="quartr" width={50} height={50} />

          {/* tech used*/}
          {/* tech used*/}
          {/* tech used*/}
        </div>
        <p className="uppercase py-5 text-gray-300">
          started work ... Ended ..
        </p>
        <ul className="list-disc space-y-4 text-lg">
          <li>Sommary point </li>
          <li>Sommary point </li>
          <li>Sommary point </li>
          <li>Sommary point </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

import { motion } from "framer-motion";
import React from "react";
import Valtech from "../public/valtech.jpeg";
import Quartr from "../public/Quartr.jpeg";
import { Skill } from "../typing";
import { urlFor } from "../sanity";

type Props = { directinLeft?: boolean; skill: Skill };

const Skill: React.FC<Props> = ({
  directinLeft,
  skill: { image, title, progress },
}) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directinLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(image).width(200).url()}
        alt={title}
        className=" rounded-full border border-gray-500 w-16  h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out bg-white"
      />
      <div className="absolute opacity-0 hover:opacity-80 transition ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl  font-bold text-black opacity-100">
            {progress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;

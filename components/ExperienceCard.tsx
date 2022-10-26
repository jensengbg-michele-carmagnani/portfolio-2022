import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard: React.FC<Props> = ({
  experience: {
    company,
    companyImage,
    isCurrentlyWorkingHere,
    jobTitle,
    dateEnded,
    dateStarted,
    points,
    technologies,
    _id,
  },
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
          src={urlFor(companyImage).url()}
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
          <Image
            src={urlFor(companyImage).url()}
            alt="quartr"
            width={50}
            height={50}
            layout="fill"
          />
          {/* tech used*/}
          {technologies.map((technology) => (
            <Image
              // eslint-disable-next-line no-underscore-dangle
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={technology.title}
              width={30}
              height={30}
              layout="fill"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          started work ... Ended ..
          {new Date(dateStarted).toDateString()} -{" "}
          {isCurrentlyWorkingHere
            ? "Present"
            : new Date(dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 text-lg max-h-96 overscroll-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A] ">
          {points.map((point, i) => (
            // eslint-disable-next-line no-underscore-dangle
            <li key={i}>{point}</li>
          ))}
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

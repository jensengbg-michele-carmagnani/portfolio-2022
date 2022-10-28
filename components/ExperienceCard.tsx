import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";
import moment from "moment";
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
    companyUrl,
  },
}) => {
  return (
    <article className="flex flex-col rounded-lg items-center md:space-y-7 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden scrollbar-track-gray-400/20 ">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <img
          alt="quartr"
          src={urlFor(companyImage).url()}
          className="rounded-full object-cover object-center h-5 w-3 md:w-12 md:h-7"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <div className="flex justify-center items-center py-5">
          <a href={companyUrl} target="blank">
            <img
              src={urlFor(companyImage).url()}
              alt="quartr"
              className="w-40 h-48"
            />
          </a>
          <p></p>
        </div>
        <div className="flex space-x-2 my-2">
          {/* tech used*/}
          {technologies.map((technology, I) => (
            <img
              className="w-10 h-10 rounded-lg object-cover object-center"
              key={I}
              src={urlFor(technology.image).url()}
              alt={technology.title}
            />
          ))}
        </div>
        <p className=" text-sm uppercase py-5 text-gray-300">
          started work: {""}
          <span className="text-green-200/40 pl-3">
            {moment(dateStarted).format("MMM Do YY")}{" "}
          </span>
          <br />
          ended:
          <span className="text-red-300/40 pl-[73px] ">
            {isCurrentlyWorkingHere
              ? "Present"
              : ` ${moment(dateEnded).format("MMM Do YY")}`}
          </span>
        </p>
        <ul className="list-disc md:space-y-4 text-sm md:text-lg max-h-96 overscroll-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A] ">
          {points.map((point, i) => (
            // eslint-disable-next-line no-underscore-dangle
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

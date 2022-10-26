import { motion } from "framer-motion";

import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typing";

type Props = { pageInfo: PageInfo };

const About: React.FC<Props> = ({ pageInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 400 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-evenly relative h-screen text-center md:text-left max-w-7xl md:flex-row px-10 itmes-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        about
      </h3>
      <motion.img
        className="mb-20 md:md-0 flex-shrink-0 object-cover object-center  w-56 h-56 md:rounded-lg  md:h-95 md:w-64 xl:w-[500px] xl:h-[600px] border border-gray-500/60 rounded-sm"
        initial={{ x: -400, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{
          opacity: 1,
          x: 1,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo.profilePic).url()}
      />
      <div className="space-y-5 px-0 md:max-w-2xl md:px-2">
        <h4 className="text-4xl font-semibold">
          Here is a little bit of{" "}
          <span className="underline decoration-[#F7AB0A]/50">background</span>
        </h4>
        <p className="text-base text-gray-400">
          My name is Michele I'm sofotware engineer based in Sweden. I'm a
          passionate developer who loves to build project. My main focus is
          frontend development but I also have experience in backend
          development. I start to code when I was a teenager and I fell in love
          with it. I'm a self-taught developer and I'm always looking for new
          challenges.
          {pageInfo.backgroundInformation}
        </p>
        <h2 className="text-gray-300">Education</h2>
        <p className="text-base text-gray-400 ">
          I took part in course as frontend developer at{" "}
          <span className="underline decoration-yellow-400/70">
            {" "}
            Jensen Skolan
          </span>{" "}
          in Sweden. The course was 2 years long and I learned serveral thinks.
          I also learned how to work in a team and how to work with a project
          from scratch.
        </p>
      </div>
    </motion.div>
  );
};

export default About;

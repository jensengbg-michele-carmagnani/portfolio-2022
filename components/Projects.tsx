import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import Image from "next/image";
type Props = { projects: Project[] };

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex overflow-hidden flex-col test-left md:flex-row max-w-full justify-end md:justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>

      <div className="reltive w-full flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin">
        {projects.map((project, i) => (
          <div
            // eslint-disable-next-line no-underscore-dangle
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-14 md:p-44 h-full "
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="object-contain h-80 md:h-[600px] "
              src={urlFor(project?.image).url()}
              alt={project.title}
            />

            <div className="space-y-10 px-0 md:px-10 text-center ">
              <h4 className="text-2xl md:text-4xl font-semibold ">
                <span className="underline decoration-yellow-100/40">
                  Case Study {i + 1} of {projects.length}
                </span>{" "}
                {project?.title}
                <div className="space-x-2 py-10 flex justify-center items-center">
                  {project?.technologies.map((technology) => (
                    <img
                      className=" object-fill h-10 w-10 md:h-16  md:w-16"
                      // eslint-disable-next-line no-underscore-dangle
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt=""
                    />
                  ))}
                </div>
              </h4>
            </div>
            <p className="text-lg text-center md:text-left">
              {project?.summary}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12 " />
    </motion.div>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typing';
import { urlFor } from '../sanity';

type Props = { projects: Project[] };

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col justify-center items-center  md:items-start md:justify-center overflow-hidden text-left md:flex-row max-w-full mx-auto z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500  text-2xl ">
        Projects
      </h3>

      <div className="relative h-screen w-full flex overflow-x-scroll pt-20 md:pt-0  overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin">
        {projects.map((project, i) => (
          <div
            // eslint-disable-next-line no-underscore-dangle
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-14  md:p-44 h-full "
          >
            <a
              href={project?.githubLink}
              target="_blank"
              rel="noreferrer"
              className="w-fit scale-100 transition-all duration-100  hover:scale-95 block"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="cursor-pointer object-contain h-56 md:h-[270px] "
                src={urlFor(project?.image).url()}
                alt={project.title}
              />
            </a>

            <div className="space-y-10 px-0 md:px-10 text-center ">
              <h4 className="text-base md:text-2xl font-semibold ">
                <span className="text-gray-300 underline decoration-yellow-100/40 mr-3">
                  Case Study {i + 1} of {projects.length}
                </span>{' '}
                <a href={project?.githubLink} target="_blanck">
                  <span className="transition-all ease-in-out duration-150 hover:text-red-600/60">
                    {project?.title}
                  </span>
                </a>
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

            <p className="hidden md:flex text-lg text-center ">
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

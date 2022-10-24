import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

const Projects: React.FC<Props> = (props: Props) => {
  const projects = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex overflow-hiπdden flex-col test-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <div className="reltive w-full flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 md:p-44 h-full "
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="max-h-[600px]  object-cover border border-gray-500 rounded-sm"
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg&_gl=1*1afn8mx*_ga*MTg3MTg0ODU4NS4xNjY2NjEzOTY3*_ga_8JE65Q40S6*MTY2NjYxMzk2Ny4xLjEuMTY2NjYxNDAzNy4wLjAuMA.."
              alt={`Project `}
            />
            <div className="space-y-10 px-0 md:px-10  text-center ">
              <h4 className="text-4xl font-semibold ">
                <span className="underline decoration-yellow-100/40">
                  Case Study
                </span>{' '}
                UPS clone
              </h4>
            </div>
            <p className="text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              voluptas quae, ducimus cupiditate iste labore quasi maiores qui!
              Nesciunt vel repellat fugit natus dignissimos sunt neque porro
              impedit error nam?
            </p>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
};

export default Projects;

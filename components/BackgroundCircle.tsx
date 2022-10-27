import { motion } from "framer-motion";
import React from "react";

type Props = {};

const BackgroundCircle: React.FC = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 4, repeat: Infinity }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border border-[#333333] rounded-full md:h-[200px] h-[100px] md:w-[200px] w-[100px] mt-52 animate-ping   " />
      <div className=" absolute border border-[#333333] rounded-full md:h-[300px] h-[150px] md:w-[300px] w-[150px] mt-52 animate-ping " />
      <div className=" absolute border border-[#333333] rounded-full md:h-[500px] h-[250px] md:w-[500px] w-[250px] mt-52 animate-ping " />
      <div className=" absolute border border-[#F7AB0A] rounded-full md:h-[650px] h-[325px] md:w-[650px] w-[325px] mt-52 animate-pulse " />
      <div className=" absolute border border-[#333333] rounded-full md:h-[800px] h-[400px] md:w-[800px] w-[400px] mt-52 animate-ping " />
    </motion.div>
  );
};

export default BackgroundCircle;

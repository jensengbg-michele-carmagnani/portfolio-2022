import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

const Header: React.FC = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        className="flex items-center space-x-4"
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* socialIcon */}

        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://www.linkedin.com/in/michele-carmagnani-78909a42/"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row cursor-pointer text-gray-300 items-center"
        >
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
          <p className=" cursor-pointer uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;

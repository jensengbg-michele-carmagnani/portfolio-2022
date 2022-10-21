import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import Me from '../public/Me.jpg';

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen relative flex flex-col items-center text-center md:text-left max-w-7xl justify-evenly mx-auto ">
      <h3 className="abosolte top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        about
      </h3>
      <motion.img
        className="mb-20 md:md-0 flex-shrink-0 object-cover object-center rounded-full w-32 h-32 md:rounded-lg  md:h-96 md:w-96 xl:w-[500px] xl:h-[600px]"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://scontent.fgse1-1.fna.fbcdn.net/v/t39.30808-6/311137544_10160175718509510_5975160762464941417_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oXq9SvHmXuIAX_uevUt&_nc_ht=scontent.fgse1-1.fna&oh=00_AT-I_d7aZXPbn5X0udMA6SzARfm1jZMCIQq6kMzyodtGjQ&oe=635789B1"
      />
    </div>
  );
}

export default About;

import { motion } from 'framer-motion';

import React from 'react';

type Props = {};

function About({}: Props) {
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
        src="https://scontent.fgse1-1.fna.fbcdn.net/v/t39.30808-6/311137544_10160175718509510_5975160762464941417_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oXq9SvHmXuIAX_uevUt&_nc_ht=scontent.fgse1-1.fna&oh=00_AT-I_d7aZXPbn5X0udMA6SzARfm1jZMCIQq6kMzyodtGjQ&oe=635789B1"
      />
      <div className="space-y-10 px-0 md:max-w-2xl md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a little bit of{' '}
          <span className="underline decoration-[#F7AB0A]/50">background</span>
        </h4>
        <p className="text-base text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </motion.div>
  );
}

export default About;

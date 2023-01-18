import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';
import { PageInfo } from '../typing';
import { urlFor } from '../sanity';

type Props = { pageInfo: PageInfo };

const Hero: React.FC<Props> = ({ pageInfo }) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo.name} ",
      "Guy-who-loves-Food",
      "<ButLovesToCodeMore/>`,
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="rounded-full mx-auto w-32 object-cover"
        alt="Picture of the author"
        src={urlFor(pageInfo?.heroImage).width(200).url()}
      />

      <div className="z-20">
        <h2 className=" text-sm text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-2xl lg:text-3xl font-semibold px-10 py-4 ">
          <span className="mr-3 max-w-md">{text}</span>
          <Cursor cursorColor="#F7AB0A" cursorStyle="I" />
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center  md:space-x-10 mt-16 text-gray-500">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

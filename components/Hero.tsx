import Image from "next/image";
import React from "react";
import profilePic from "../public/profilePic.jpeg";
import {
  Cursor,
  useTypewriter,
} from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

const Hero: React.FC = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Michele Carmagnani",
      "Guy-who-loves-Food",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image className="rounded-full mx-auto w-32 object-cover"
        width={128}
        height={128}
        alt="Picture of the author" src={profilePic} />
       
      <div>
        <h2 className=" text-sm text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
      <h1 className="text-2xl lg:text-3xl font-semibold px-10 ">
        <span className="mr-3 max-w-md">{text}</span>
          <Cursor cursorColor="#F7AB0A" cursorStyle="I" />
        </h1>
        <div>
          <div>About</div>
          <div>Experience</div>
          <div>Skills</div>
          <div>Project</div>
        </div>

      </div>
    </div>
  );
};

export default Hero;

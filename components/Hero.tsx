import React from "react";
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
          <BackgroundCircle/>
      <h1>
              <span>{text}</span>
                <Cursor />
      </h1>
    </div>
  );
};

export default Hero;

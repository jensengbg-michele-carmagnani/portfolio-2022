import React from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className=" pb-5 w-full abosolute  ">
      <Link href="#hero">
        <ArrowUpIcon
          className="cursor-pointer  border hover:bg-[#F7AB0A] rounded-full animate-bounce z-30"
          width={40}
          height={40}
        />
      </Link>
    </footer>
  );
};

export default Footer;

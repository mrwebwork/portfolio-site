//* Importing required modules and components
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaShopify,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function SkillSection() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl py-10">Skills</h1>
      </div>

      {/* //* The skill icons are displayed in a flex container with space between each icon. */}
      {/* //* The size is for the size of each icon and the title is for the description on hover */}
      <div className="flex flex-row justify-center space-x-4 pb-5 px-3">
        <FaHtml5 size={50} title="HTML5" />
        <FaCss3Alt size={50} title="CSS3" />
        <FaSass size={50} title="SASS" />
        <FaJsSquare size={50} title="JavaScript" />
        <FaReact size={50} title="React.js" />
        <FaNodeJs size={50} title="Node.js" />
        <SiNextdotjs size={50} title="Next.js" />
        <FaShopify size={50} title="Shopify" />
      </div>
    </>
  );
}

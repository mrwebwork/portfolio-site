import React, { useState, useEffect } from "react";

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
  //* Set icon size
  const [iconSize, setIconSize] = useState(50);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setIconSize(50); //* size for mobile
      } else if (window.innerWidth < 1024) {
        setIconSize(54); //* size for tablet
      } else {
        setIconSize(60); //* size for desktop
      }
    };

    window.addEventListener("resize", updateSize);
    //* call the function initially to set the size based on the initial window size
    updateSize();

    //* cleanup listener on unmount
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl py-5">Top Skills</h1>
      </div>

      <div className="icon-size flex flex-row justify-center space-x-4 py-5 px-3">
        <FaHtml5 size={iconSize} title="HTML5" />
        <FaCss3Alt size={iconSize} title="CSS3" />
        <FaSass size={iconSize} title="SASS" />
        {/* <FaJsSquare size={iconSize} title="JavaScript" /> */}
        <FaReact size={iconSize} title="React.js" />
        <FaNodeJs size={iconSize} title="Node.js" />
        <SiNextdotjs size={iconSize} title="Next.js" />
        <FaShopify size={iconSize} title="Shopify" />
      </div>
    </>
  );
}

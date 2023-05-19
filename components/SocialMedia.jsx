import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="container mx-auto ps-4 pb-2 md:pb-0 flex md:justify-center">
      <a
        href="https://www.linkedin.com/in/allanhillman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={26} />
      </a>
      <a
        className="ps-4"
        href="https://github.com/mrwebwork"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={26} />
      </a>
    </div>
  );
}

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="container mx-auto flex justify-center pb-10">
      <a
        href="https://www.linkedin.com/in/allanhillman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={34} />
      </a>
      <a
        className="ps-4"
        href="https://github.com/mrwebwork"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={34} />
      </a>
    </div>
  );
}

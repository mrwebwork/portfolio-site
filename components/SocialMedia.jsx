//* Importing required modules and components
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

//* The SocialMedia component is responsible for rendering social media icons with the corresponding links.
export default function SocialMedia() {
  return (
    //* The component returns a div container with LinkedIn and GitHub icons as child components.
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

import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import { TbBrandFiverr } from "react-icons/tb";

//* The SocialMedia component is responsible for rendering social media icons with the corresponding links.
export default function SocialMedia() {
  return (
    //* The component returns a div container with LinkedIn and GitHub icons as child components.
    <div className="container mx-auto ps-4 pb-2 md:pb-0 flex md:justify-center">
      <a
        aria-label="Link to Allan Hillman LinkedIn Page"
        href="https://www.linkedin.com/in/allanhillman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={28} />
      </a>

      <a
        aria-label="Link to Allan Hillman GitHub Page"
        className="ps-4"
        href="https://github.com/mrwebwork"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={28} />
      </a>
      <a
        aria-label="Link to Allan Hillman Fiverr Freelance Page"
        className="ps-4"
        href="https://www.fiverr.com/allanhillman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbBrandFiverr size={28} />
      </a>
    </div>
  );
}

import React from "react";

import dynamic from "next/dynamic";

import ToggleTheme from "./ToggleTheme";

import NavLink from "@/styles/styled-components/NavLink";

// Define ScrollLink as a dynamic import
const ScrollLink = dynamic(
  () => import("react-scroll").then((mod) => mod.Link),
  {
    ssr: false,
  }
);

export default function DesktopNavBar() {
  const links = [
    // { path: "home", text: "Home" },
    { path: "projects", text: "Projects" },
    { path: "skills", text: "Skills" },
    { path: "reviews", text: "Reviews" },
    { path: "about", text: "About" },
    { path: "contact", text: "Contact" },
    {
      path: "https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:34e21d7b-1a25-4596-9004-e37bc1bfddda",
      text: "Resume",
      isExternal: true,
    },
  ];

  return (
    <>
      <div className="hidden container mx-auto md:flex md:justify-center pt-10 h-full">
        <nav className="flex text-xl lg:text-2xl">
          {links.map((link, index) =>
            link.isExternal ? (
              <li key={index} className="list-none hover:text-gray-300">
                <NavLink
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </NavLink>
              </li>
            ) : (
              <li key={index} className="list-none hover:text-gray-300">
                <NavLink href={"#" + link.path}>
                  <ScrollLink
                    className="nav-bar-links"
                    activeClass="active"
                    to={link.path}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {link.text}
                  </ScrollLink>
                </NavLink>
              </li>
            )
          )}
          <ToggleTheme />
        </nav>
      </div>
    </>
  );
}

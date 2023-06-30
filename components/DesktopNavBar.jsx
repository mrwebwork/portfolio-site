import React from "react";
import ToggleTheme from "./ToggleTheme";
import NavLink from "@/styles/styled-components/NavLink";

export default function DesktopNavBar() {
  const links = [
    { path: "#home", text: "Home" },
    { path: "#projects", text: "Projects" },
    { path: "#skills", text: "Skills" },
    { path: "#reviews", text: "Reviews" },
    { path: "#about", text: "About" },
    { path: "#contact", text: "Contact" },
  ];

  return (
    //* Desktop Navbar
    <>
      <div className="hidden container mx-auto md:flex md:justify-center pt-10 h-full">
        <nav className="flex text-xl lg:text-2xl">
          {links.map((link, index) => (
            <li key={index} className="list-none mr-4 hover:text-gray-300">
              <NavLink href={link.path}>{link.text}</NavLink>
            </li>
          ))}
          <ToggleTheme />
        </nav>
      </div>
    </>
  );
}
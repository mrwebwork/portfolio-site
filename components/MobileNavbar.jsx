import React, { useState, useRef, useEffect } from "react";

import NavLink from "@/styles/styled-components/NavLink";

import ToggleTheme from "./ToggleTheme";

import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function MobileNavbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);

  const links = [
    { path: "#home", text: "Home" },
    { path: "#projects", text: "Projects" },
    { path: "#skills", text: "Skills" },
    { path: "#reviews", text: "Reviews" },
    { path: "#about", text: "About" },
    { path: "#contact", text: "Contact" },
  ];

  return (
    //* Mobile Navbar
    <>
      <nav ref={ref} className="navbar md:hidden">
        <div className="navbar-top">
          <button className="toggle" onClick={() => setNavbarOpen(!navbarOpen)}>
            {navbarOpen ? (
              <MdClose style={{ width: "32px", height: "32px" }} />
            ) : (
              <FiMenu
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
            )}
          </button>
        </div>
        <ul className={`rounded-lg menu-nav${navbarOpen ? " show-menu" : ""}`}>
          {links.map((link, index) => (
            <li key={index} onClick={() => setNavbarOpen(false)}>
              <NavLink className="mobile-nav-links" href={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
          <div className="mobile-toggle py-3 text-center">
            <ToggleTheme />
          </div>
        </ul>
      </nav>
    </>
  );
}

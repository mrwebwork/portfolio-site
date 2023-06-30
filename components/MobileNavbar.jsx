import { useState, useEffect, useRef } from "react";

import { useAnimate, stagger, motion } from "framer-motion";

import NavLink from "@/styles/styled-components/NavLink";
import ToggleTheme from "./ToggleTheme";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

//* Animation
function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      ".menu-items",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );
    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

//* Mobile Navbar
export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const node = useRef();

  //* Close menu when clicked outside
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current && !node.current.contains(e.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  return (
    <nav className="menu md:hidden pt-10" ref={scope}>
      <div ref={node}>
        <motion.button
          className="menu-button"
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Navigation
          <div className="arrow">
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </div>
        </motion.button>
        <ul
          onClick={closeMenu}
          className={`menu-items ${
            isOpen ? "menu-items-open" : "menu-items-closed"
          }`}
        >
          <li>
            <NavLink className="nav-link" href="#home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" href="#projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" href="#reviews">
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" href="#about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" href="#skills">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" href="#contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:34e21d7b-1a25-4596-9004-e37bc1bfddda"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </NavLink>
          </li>
          <li className="theme-toggler">
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </nav>
  );
}

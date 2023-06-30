import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import NavLink from "@/styles/styled-components/NavLink";
import ToggleTheme from "./ToggleTheme";

const variants = {
  open: { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 10px)" },
  closed: {
    opacity: 0,
    scale: 0.3,
    clipPath: "inset(10% 50% 90% 50% round 10px)",
  },
};

const liVariants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.3 },
};

const arrowVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const transition = {
  type: "spring",
  bounce: 0,
  duration: 0.5,
};

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const node = useRef();

  useEffect(() => {
    controls.start(isOpen ? "open" : "closed");
  }, [controls, isOpen]);

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

  const links = [
    { path: "#projects", text: "Projects" },
    { path: "#reviews", text: "Reviews" },
    { path: "#about", text: "About" },
    { path: "#skills", text: "Skills" },
    { path: "#contact", text: "Contact" },
    {
      path: "https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:34e21d7b-1a25-4596-9004-e37bc1bfddda",
      text: "Resume",
      isExternal: true,
    },
    { component: <ToggleTheme />, text: "Theme Toggler" },
  ];

  return (
    <nav className="menu pt-10 md:hidden" ref={node}>
      <motion.button
        className="menu-button"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Navigation
        <motion.div
          className="arrow"
          variants={arrowVariants}
          initial={false}
          animate={controls}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        onClick={closeMenu}
        className={`menu-items ${
          isOpen ? "menu-items-open" : "menu-items-closed"
        }`}
        variants={variants}
        initial={false}
        animate={controls}
        transition={transition}
      >
        {links.map((link, index) =>
          link.component ? (
            <motion.li
              className="theme-toggler"
              variants={liVariants}
              key={index}
            >
              {link.component}
            </motion.li>
          ) : (
            <motion.li variants={liVariants} key={index}>
              <NavLink
                className="nav-link"
                href={link.path}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
              >
                {link.text}
              </NavLink>
            </motion.li>
          )
        )}
      </motion.ul>
    </nav>
  );
}

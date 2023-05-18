import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Svg from "@/styles/styled-components/Svg";

export default function Navbar() {
  const project = "Projects";
  const about = "About";
  const contact = "Contact";
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        //* Inside click
        return;
      }
      //* Outside click
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative min-h-screen md:flex">
      {/* Mobile menu bar */}
      <div className="bg-cyan-800 text-gray-100 flex justify-between md:hidden">
        <a href="/" className="block p-5 text-white font-bold text-2xl">
          Allan's Portfolio
        </a>
        {/* Navigation Button */}
        <button
          ref={node}
          className="mobile-menu-button p-2 focus:outline-none focus:bg-cyan-700 "
        >
          <Svg
            width="50"
            height="50"
            viewBox="0 0 32 42"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? "active" : ""}
          >
            <g transform="matrix(1,0,0,1,-389.5,-264.004)">
              <g id="arrow_left2">
                <g transform="matrix(1,0,0,1,0,5)">
                  <path
                    id="top"
                    d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                  />
                </g>
                <g transform="matrix(1,1.22465e-16,1.22465e-16,-1,0,564.935)">
                  <path
                    id="bottom"
                    d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                  />
                </g>
                <path id="middle" d="M390,284.967L420,284.967" />
              </g>
            </g>
          </Svg>
        </button>
      </div>

      {/* Desktop Navbar */}

      {/* Sidebar */}
      <div
        ref={node}
        className={`bg-cyan-800 text-gray-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out md:hidden`}
      >
        <a href="/" className="text-white flex items-center space-x-2 px-4">
          <span className="text-2xl font-extrabold">Portfolio</span>
        </a>
        <nav>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            href="/projects"
          >
            {project}
          </Link>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            href="/about"
          >
            {about}
          </Link>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            href="/contact"
          >
            {contact}
          </Link>
        </nav>
      </div>
    </div>
  );
}

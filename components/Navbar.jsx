import React, { useState } from "react";
import Link from "next/link";
import Svg from "@/styles/styled-components/Svg";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
  const project = "Projects";
  const about = "About";
  const contact = "Contact";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="relative min-h-screen md:hidden">
        {/* Mobile Menu Bar */}
        <div className="bg-cyan-800 text-gray-100 flex justify-between">
          <Link href="/" className="block p-5 text-white font-bold text-2xl">
            Allan's Portfolio
          </Link>

          {/* Navigation Button */}
          <button className="mobile-menu-button p-2 focus:outline-none focus:bg-cyan-700 ">
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

        {/* Sidebar */}
        <div
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
            <div className="ps-4 pt-3">
              <ToggleTheme />
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden container mx-auto md:flex p-5 justify-around items-center h-full text-[rgb(var(--foreground-rgb))]">
        <Link
          href="/"
          className="font-bold text-2xl text-[rgb(var(--foreground-rgb))]"
        >
          Allan's Portfolio
        </Link>
        <nav>
          <Link
            href="/projects"
            className="mr-4 hover:text-gray-300 text-[rgb(var(--foreground-rgb))]"
          >
            {project}
          </Link>
          <Link
            href="/about"
            className="mr-4 hover:text-gray-300 text-[rgb(var(--foreground-rgb))]"
          >
            {about}
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 text-[rgb(var(--foreground-rgb))] pe-5"
          >
            {contact}
          </Link>
          <ToggleTheme />
        </nav>
      </div>
    </>
  );
}

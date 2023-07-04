import NavLink from "@/styles/styled-components/NavLink";
import React from "react";

export default function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <>
      <div className="outline-footer">
        <footer className="footer-container container mx-auto text-center pt-5 pb-10">
          <div className="pb-4 font-bold">
            <NavLink
              className="portfolio-repo-link"
              href="https://github.com/mrwebwork/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the GitHub Repo for this Site
            </NavLink>
          </div>
          <p className="footer-text">
            © Copyright {currentYear} ® | All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

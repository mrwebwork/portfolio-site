import React from "react";

import NavLink from "@/styles/styled-components/NavLink";

export default function ContactMe() {
  return (
    <div className="contact-me-container pb-10">
      <NavLink
        href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:82171787-3dcf-4c67-8eef-d00d3e63eabc"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </NavLink>
      <NavLink
        href="https://github.com/mrwebwork"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </NavLink>
      <NavLink href="mailto:tech@allanswebwork.info">Email</NavLink>
    </div>
  );
}

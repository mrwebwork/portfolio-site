import React from "react";

import NavLink from "@/styles/styled-components/NavLink";

export default function ContactMe() {
  return (
    <div className="contact-me-container pb-10">
      <NavLink
        href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:34e21d7b-1a25-4596-9004-e37bc1bfddda"
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

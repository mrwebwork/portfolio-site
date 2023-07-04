import React from "react";

import MobileNavbar from "./MobileNavbar";
import DesktopNavBar from "./DesktopNavBar";

export default function Navbar() {
  return (
    <>
      <MobileNavbar />
      <DesktopNavBar />
    </>
  );
}

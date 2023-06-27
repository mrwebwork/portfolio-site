import React from "react";

export default function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="container mx-auto text-center py-10">
        <p className="footer-text">
          © Copyright {currentYear} ® | All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

import React from "react";

export default function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <>
      <section className="container mx-auto text-center pt-10">
        <p>© Copyright {currentYear} ® | All Rights Reserved.</p>
      </section>
    </>
  );
}

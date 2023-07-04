import React from "react";

export default function Header({ pageHeader, pageDesc, className }) {
  return (
    <>
      <header className="container mx-auto">
        <section className="flex flex-col justify-center my-5 pt-5 px-2 text-center mx-auto">
          <h1 className={`text-4xl md:text-5xl ${className}`}>{pageHeader}</h1>
          <p className="py-7 px-3 text-3xl">{pageDesc}</p>
        </section>
      </header>
    </>
  );
}

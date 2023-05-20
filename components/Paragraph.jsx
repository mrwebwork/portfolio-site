import React from "react";

export default function Paragraph({ children, className }) {
  return (
    <>
      <div className="container mx-auto text-center text-black-400 text-xl px-5 py-3 sm:px-4 lg:w-6/12">
        <p className={className}>{children}</p>
      </div>
    </>
  );
}

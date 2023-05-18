import React from "react";

export default function Paragraph({ children, className }) {
  return (
    <>
      <div className="container mx-auto text-center px-10 sm:px-4 lg:w-6/12">
        <p className={className}>{children}</p>
      </div>
    </>
  );
}

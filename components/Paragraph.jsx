//* Importing required modules
import React from "react";

export default function Paragraph({
  //* Props destructuring to extract required properties
  children,
  className,
}) {
  return (
    <>
      <div className="container mx-auto text-center text-black-400 text-xl px-5 py-3 sm:px-4 lg:w-6/12">
        {/* //* The 'p' element displays the actual text content. */}
        {/* //* The 'className' prop allows for additional styles to be applied to the paragraph. */}
        <p className={className}>{children}</p>
      </div>
    </>
  );
}

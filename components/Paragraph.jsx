import React from "react";

export default function Paragraph({ children, className }) {
  return (
    <>
      <div>
        <p className={className}>{children}</p>
      </div>
    </>
  );
}

//* Importing required modules and components
import React from "react";

//* The ProfileSection component is responsible for rendering a profile image and related information such as a title and a description.
export default function ProfileSection({ image, altText, title, description }) {
  return (
    //* The component returns a section element with two main parts: image section and text section.
    <section className="container mx-auto flex flex-col md:flex-row pb-10 px-5">
      <div className="mx-auto md:mr-5 mb-5 md:mb-0">
        <img
          className="rounded-tr-3xl rounded-bl-3xl"
          src={image}
          alt={altText}
        />
      </div>
      <div className="mx-auto md:ml-5 text-center md:text-left flex flex-col justify-center">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </section>
  );
}
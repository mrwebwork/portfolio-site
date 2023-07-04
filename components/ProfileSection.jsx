//* Importing required modules and components
import React from "react";

import Image from "next/image";
import SocialMedia from "./SocialMedia";

//* The ProfileSection component is responsible for rendering a profile image and related information such as a title and a description.
export default function ProfileSection({ image, altText, title, description }) {
  return (
    //* The component returns a section element with two main parts: image section and text section.
    <section className="container mx-auto flex flex-col md:flex-row mb-7 md:pb-0 px-5">
      <div className="mx-auto md:mr-5 mb-5 md:mb-0">
        <Image
          className="rounded-tr-3xl rounded-bl-3xl"
          src={image}
          alt={altText}
          width={200}
          height={200}
          loading="eager"
        />
      </div>
      <div className="mx-auto md:ml-5 text-center md:text-left flex flex-col justify-center">
        <h2 className="text-4xl">{title}</h2>
        <p className="pt-2 lg:text-xl">{description}</p>
        <SocialMedia size={34} className="py-6 justify-center align-middle" />
      </div>
    </section>
  );
}

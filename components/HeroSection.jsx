import React from "react";
import ProfileSection from "./ProfileSection";

export default function HeroSection() {
  return (
    <>
      <ProfileSection
        image="/allan-hillman-picture.jpeg"
        altText="A photo of Allan Hillman"
        ariaLabel="An image of the web developer Allan Hillman"
        title="Software Engineer"
        description="Crafting the Web, One Line at a Time"
      />
    </>
  );
}

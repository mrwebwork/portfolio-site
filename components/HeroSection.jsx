import React from "react";
import ProfileSection from "./ProfileSection";

export default function HeroSection() {
  return (
    <>
      <ProfileSection
        image="/allan-hillman-picture.jpeg"
        alt="A photo of Allan Hillman"
        aria-label="Photo of Allan Hillman"
        title="Software Engineer"
        description="Crafting the Web, One Line at a Time"
      />
    </>
  );
}

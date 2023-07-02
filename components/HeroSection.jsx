import React from "react";
import ProfileSection from "./ProfileSection";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <ProfileSection
        image="/allan-hillman-picture.jpeg"
        altText="A photo of Allan Hillman"
        title="Front-End Engineer"
        description="Crafting the Web, One Line at a Time"
      />
    </div>
  );
}

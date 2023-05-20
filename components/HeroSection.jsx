import React from "react";
import ProfileSection from "./ProfileCard";

export default function HeroSection() {
  return (
    <>
      <ProfileSection
        image="/allan-hillman-picture.jpeg"
        alt="A photo of Allan Hillman"
        title="Front-End Developer"
        description="Innovation Through Code"
      />
    </>
  );
}

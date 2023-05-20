import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import FiverrLink from "@/styles/styled-components/FiverrLink";

export default function About() {
  return (
    <>
      <Navbar />
      <Header
        pageHeader="Meet Allan Hillman"
        pageDesc="Crafting seamless digital experiences with code."
      />
      <Paragraph>
        I graduated from Texas State University with a Bachelor of Business
        Administration in Computer Information Systems.
      </Paragraph>
      <Paragraph>
        As a Front-End Developer, I bring ideas to life in the digital world.
        With a rich experience in platforms like Shopify and WordPress, and
        proficiency in HTML5, CSS3, SASS, JavaScript, React.js, and Next.js. I
        craft user-friendly interfaces for an exceptional online experience.
        Collaborating seamlessly with back-end developers, my aim is to create
        dynamic and responsive websites. My passion fuels my continuous
        learning, helping me to deliver top-notch results, on time. Always
        excited for new challenges, I offer my services globally via{" "}
        <FiverrLink
          href="https://www.fiverr.com/allanhillman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fiverr
        </FiverrLink>
        . Let's connect and transform your vision into a reality.
      </Paragraph>
    </>
  );
}

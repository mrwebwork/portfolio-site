import React from "react";

import FiverrLink from "@/styles/styled-components/FiverrLink";

import Paragraph from "@/components/Paragraph";

export default function About() {
  return (
    <div className="pt-10">
      <div className="text-center">
        <h1 className="text-5xl pb-5">About Me</h1>
      </div>
      <Paragraph className="my-story-text">
        As a Software Engineer, I bring ideas to life in the digital world. With
        a rich experience in platforms like Shopify and WordPress, and
        proficiency in HTML5, CSS3, SASS, JavaScript, React.js, and Next.js.
      </Paragraph>
      <Paragraph className="my-story-text">
        I craft user-friendly interfaces for an exceptional online experience.
        My passion fuels my continuous learning, helping me to deliver top-notch
        results, on time. Always excited for new challenges, I offer my services
        globally via&nbsp;
        <FiverrLink
          href="https://www.fiverr.com/allanhillman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fiverr
        </FiverrLink>
        . Let&apos;s connect and transform your vision into a reality.
      </Paragraph>
      <Paragraph className="my-story-text lg:mb-8">
        Web development is not just my profession—it&apos;s my passion. The
        thrill of learning new technologies, coupled with my ability to
        collaborate effectively, fuels my drive to create dynamic, user-friendly
        web experiences.
      </Paragraph>
    </div>
  );
}

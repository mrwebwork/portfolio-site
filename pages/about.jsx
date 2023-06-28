import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import FiverrLink from "@/styles/styled-components/FiverrLink";
import ProfileSection from "@/components/ProfileSection";

export default function About() {
  return (
    <>
      <Head>
        <title>About Allan Hillman - Software Engineer</title>
        <meta
          name="description"
          content="Learn more about Allan Hillman, a passionate software engineer, and his journey in the world of technology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="About Allan Hillman - Software Engineer"
        />
        <meta
          property="og:description"
          content="Learn more about Allan Hillman, a passionate software engineer, and his journey in the world of technology."
        />
        <meta property="og:url" content="https://allanhillman.com" />
      </Head>

      <Navbar />
      <Header
        pageHeader="Meet Allan Hillman"
        pageDesc="Coding Enthusiast to Industry Expert: Discover My Journey in the Tech Realm"
      />
      <ProfileSection
        image="/allan-hillman-picture.jpeg"
        alt="A photo of Allan Hillman"
      />
      <Paragraph>
        Graduating from Texas State University with a Bachelor of Business
        Administration in Computer Information Systems was a pivotal point in my
        life, but my journey into the world of technology and teamwork began
        long before college.
      </Paragraph>
      <Paragraph>
        In high school, I discovered my love for strategy and leadership as the
        President of the Chess Club. Harnessing the power of careful planning
        and foresight refined my decision-making skills, something I later
        applied to my web development career. This curiosity about intricate
        systems also led me to establish the Cryptocurrency Club, where I
        navigated the complex world of digital currencies with my peers.
      </Paragraph>
      <Paragraph>
        Sports have also been a crucial part of my life, from basketball and
        football to track and field. As an athlete, I learned the essence of
        teamwork and the significance of representing something larger than
        oneself. The camaraderie and competition nurtured my resilience and
        collaborative spirit—traits I bring to every project I undertake today.
      </Paragraph>
      <Paragraph>
        As a Software Engineer, I bring ideas to life in the digital world. With
        a rich experience in platforms like Shopify and WordPress, and
        proficiency in HTML5, CSS3, SASS, JavaScript, React.js, and Next.js. I
        craft user-friendly interfaces for an exceptional online experience.
        Collaborating seamlessly with back-end developers, my aim is to create
        dynamic and responsive websites. My passion fuels my continuous
        learning, helping me to deliver top-notch results, on time. Always
        excited for new challenges, I offer my services globally via&nbsp;
        <FiverrLink
          href="https://www.fiverr.com/allanhillman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fiverr
        </FiverrLink>
        . Let&apos;s connect and transform your vision into a reality.
      </Paragraph>
      <Paragraph>
        Outside of the digital world, you&apos;ll often find me running along
        the trails of Austin, paddleboarding on the river, or going for
        reflective walks. I believe in maintaining a healthy balance between
        personal growth and professional development.
      </Paragraph>
    </>
  );
}

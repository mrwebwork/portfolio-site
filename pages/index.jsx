import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import HeroSection from "@/components/HeroSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <>
      <header className="container mx-auto text-white dark:text-black bg-black dark:bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {/* //* Heading for Home Page */}
          <Header
            pageHeader="Websites made simple for all businesses."
            pageDesc="Transforming your vision into a dynamic online presence."
          />

          {/* //* Hero Section */}
          <HeroSection />

          {/* //* About Me */}
          <div className="text-center">
            <h1 className="text-5xl py-5">My Story</h1>
          </div>
          <Paragraph>
            My journey started at Shopify, where I integrated payment systems
            and boosted site traffic by 40% through SEO strategies. I was
            instrumental in tailoring the e-commerce experience, building custom
            features using Liquid. Then, I dove into freelancing on Fiverr,
            where I&apos;ve delivered 40+ websites with innovative UI/UX
            designs, securing higher conversion rates and customer satisfaction.
          </Paragraph>
          <Paragraph>
            Web development is not just my profession—it&apos;s my passion. The
            thrill of learning new technologies, coupled with my ability to
            collaborate effectively, fuels my drive to create dynamic,
            user-friendly web experiences.
          </Paragraph>

          {/* //* Skills Section */}
          <SkillSection />
        </main>
      </header>
    </>
  );
}

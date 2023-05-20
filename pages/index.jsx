import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Paragraph from "@/components/Paragraph";
import HeroSection from "@/components/HeroSection";
import SkillSection from "@/components/SkillSection";
import Testimonals from "@/components/Testimonals";

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
            where I've delivered 40+ websites with innovative UI/UX designs,
            securing higher conversion rates and customer satisfaction.
          </Paragraph>
          <Paragraph>
            Web development is not just my profession—it's my passion. The
            thrill of learning new technologies, coupled with my ability to
            collaborate effectively, fuels my drive to create dynamic,
            user-friendly web experiences.
          </Paragraph>

          {/* //* Skills Section */}
          <SkillSection />

          {/* //* Reviews Section */}
          <Testimonals />

          {/* //* Project Webistes */}
          <Header pageHeader="React Projects" />
          <section className="container mx-auto lg:flex lg:flex-wrap lg:justify-center">
            <ProjectCard
              image="/netflix-ai-image.png"
              text="Netflix"
              description="Text about a brand goes here"
              linkText="Watch Movies"
              href="#"
              showCodeLink
              codeLink="https://github.com/mrwebwork"
            />
            <ProjectCard
              image="/fb-messenger-ai-image.png"
              text="Messenger"
              description="Text about a brand goes here x2"
              linkText="Chat Now"
              href="#"
              showCodeLink
              codeLink="https://github.com/mrwebwork"
            />
            <ProjectCard
              image="/keeper-ai-image.png"
              text="Note Keeper"
              description="Text about a brand goes here"
              linkText="Take Notes"
              href="#"
              showCodeLink
              codeLink="https://github.com/mrwebwork"
            />
          </section>
        </main>
      </header>
    </>
  );
}

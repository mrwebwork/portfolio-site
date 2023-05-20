import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Paragraph from "@/components/Paragraph";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import MySkills from "@/components/MySkills";

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
          {/* <HeroSection /> */}

          {/* //* About Me */}
          <div className="text-center">
            <h1 className="text-5xl py-5">My Story</h1>
          </div>
          <Paragraph>
            My journey started at Shopify, where I integrated payment systems
            and boosted site traffic by 40% through SEO strategies. Then, I dove
            into freelancing on Fiverr, where I've delivered 40+ websites with
            innovative UI/UX designs, securing higher conversion rates and
            customer satisfaction.
          </Paragraph>
          <Paragraph>
            Web development is not just my profession—it's my passion. The
            thrill of learning new technologies, coupled with my ability to
            collaborate effectively, fuels my drive to create dynamic,
            user-friendly web experiences.
          </Paragraph>

          {/* //* Skills Section */}
          <MySkills />
          {/* //* Project Webistes */}
          <Header pageHeader="React Websites" />
          <section className="container mx-auto mb-10 lg:flex lg:flex-wrap lg:justify-center">
            <ProjectCard
              image="https://placehold.jp/150x150.png"
              text="Netflix"
              description="Text about a brand goes here"
              linkText="Watch Movies"
              href="#"
              showCodeLink
              codeLink="https://github.com/mrwebwork"
            />
            <ProjectCard
              image="https://placehold.jp/150x150.png"
              text="Messenger"
              description="Text about a brand goes here x2"
              linkText="Chat Now"
              href="#"
              showCodeLink
              codeLink="https://github.com/mrwebwork"
            />
            <ProjectCard
              image="https://placehold.jp/150x150.png"
              text="Note Keeper"
              description="Text about a brand goes here"
              linkText="Take Notes"
              href="#"
              showCodeLink
              codeLink="https://github.com/mrwebwork"
            />
          </section>

          {/* //* Reviews Section */}

          {/* //* Contact Me */}
          {/* <div className="mt-10">
            <ContactForm />
          </div> */}
        </main>
      </header>
    </>
  );
}

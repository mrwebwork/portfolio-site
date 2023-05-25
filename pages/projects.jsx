import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Allan Hillman - My Projects | Web Developer & Designer</title>
        <meta
          name="description"
          content="Explore a collection of my professional and personal web development projects, including websites created for clients worldwide."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Allan Hillman - My Projects | Web Developer & Designer"
        />
        <meta
          property="og:description"
          content="Explore a collection of my professional and personal web development projects, including websites created for clients worldwide."
        />
        <meta property="og:url" content="https://allanhillman.com" />
      </Head>

      <div className="container mx-auto">
        <Navbar />
        <Header
          pageHeader="Websites & Personal Projects"
          pageDesc="Showcasing my web development journey & creations."
        />
        <Header pageHeader="Shopify Webistes" />
        <section className="container mx-auto lg:flex lg:flex-wrap lg:justify-center">
          <ProjectCard
            image="/montauk-ai-image.png"
            text="Montauk Group"
            description="Premium Beachy Lifestyle Attire"
            linkText="Shop Seaside"
            href="https://shopthemontaukgroup.com/"
          />
          <ProjectCard
            image="/yas-cycles-ai-image.png"
            text="Yas Mena Cycles"
            description="Expert Bicycle Shop & Services"
            linkText="Shop Bikes"
            href="https://yascycles.com/"
          />
          <ProjectCard
            image="/together-bev-ai-image.png"
            text="Together Beverages"
            description="Beverages Bonding Communities"
            linkText="Shop Drinks"
            href="https://togetherbeverages.com/"
          />
        </section>
        <section className="container mx-auto lg:flex lg:flex-wrap lg:justify-center">
          <ProjectCard
            image="/anime-ai-image.png"
            text="Zenshin Labs"
            description="Streetwear Meets Anime Soul"
            linkText="Shop Anime"
            href="https://zenshinlabs.com/"
          />
          <ProjectCard
            image="/tonem-ai-image.png"
            text="TŌNEM"
            description="Serenity in Sonic Vibrations"
            linkText="Shop Therapy"
            href="https://puretonetherapy.com/"
          />
          <ProjectCard
            image="/front-line-2-ai-image.png"
            text="Frontline Optics"
            description="Eyewear for Everyday Heroes"
            linkText="Shop Shades"
            href="https://frontline-optics.com/"
          />
        </section>
      </div>
    </>
  );
}

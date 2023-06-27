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

      <div className="projects-container mx-auto">
        <Navbar />
        {/* <Header
          pageHeader="Websites & Personal Projects"
          pageDesc="Showcasing my web development journey & creations"
        /> */}
        <Header
          pageHeader="From Concept to Code: My Web Creations"
          pageDesc="Where Creativity Meets Functionality"
        />
        {/* //* Personal Projects */}
        <section className="projects-section flex flex-col lg:flex-row lg:mx-auto lg:container lg:max-w-4xl">
          <ProjectCard
            image="/tic-tac-toe.png"
            text="Tic Tac Toe"
            description="An interactive game crafted with HTML, CSS, and JS, hosted via GitHub pages"
            linkText="Play Now"
            href="https://mrwebwork.github.io/tic-tac-toe/"
            showCodeLink={true}
            codeLink={"https://github.com/mrwebwork/tic-tac-toe"}
          />
          <ProjectCard
            image="/spotify.png"
            text="Spotify Clone"
            description="A dynamic clone leveraging Next.js, React.js, TypeScript, Tailwind, and Supabase"
            linkText="In Progress"
            href="https://github.com/mrwebwork/spotify"
            showCodeLink={true}
            codeLink={"https://github.com/mrwebwork/spotify"}
          />
        </section>
        <Header
          pageHeader="Bridging Ambitions with Technology"
          pageDesc="Web Solutions for Global Clients"
        />
        {/* //* Client Websites */}
        <section className="projects-section container mx-auto">
          <ProjectCard
            image="/montauk-ai-image.png"
            text="Montauk Group"
            description="Custom 'Shop' pages engineered using Liquid, SCSS, HTML, and JS"
            linkText="Shop Seaside"
            href="https://shopthemontaukgroup.com/pages/shop-womens"
          />
          <ProjectCard
            image="/yas-cycles-ai-image.png"
            text="Yas Mena Cycles"
            description="Entire store front developed leveraging Shopify 2.0 features"
            linkText="Shop Bikes"
            href="https://yascycles.com/"
          />
          <ProjectCard
            image="/together-bev-ai-image.png"
            text="Together Beverages"
            description="Crafted a digital store from scratch, incorporated with a seamless POD app"
            linkText="Shop Drinks"
            href="https://togetherbeverages.com/"
          />
        </section>
        <section className="projects-section container mx-auto">
          <ProjectCard
            image="/anime-ai-image.png"
            text="Zenshin Labs"
            description="Designed several landing templates, and executed end-to-end store development"
            linkText="Shop Anime"
            href="https://zenshinlabs.com/"
          />
          <ProjectCard
            image="/tonem-ai-image.png"
            text="TŌNEM"
            description="Developed a dropshipping store, crafted landing pages, and established store tracking"
            linkText="Shop Therapy"
            href="https://puretonetherapy.com/"
          />
          <ProjectCard
            image="/front-line-2-ai-image.png"
            text="Frontline Optics"
            description="Constructed custom landing pages using Liquid sections and established email automation"
            linkText="Shop Shades"
            href="https://frontline-optics.com/"
          />
        </section>
      </div>
    </>
  );
}

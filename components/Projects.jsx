import React from "react";

import Head from "next/head";

import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <div className="projects-container mx-auto pb-10">
        <Header
          pageHeader="From Concept to Code: My Web Creations"
          pageDesc="Where Creativity Meets Functionality"
        />
        {/* //* Personal Projects */}
        <section className="projects-section flex flex-col lg:flex-row lg:mx-auto lg:container lg:max-w-4xl">
          <ProjectCard
            image="/tic-tac-toe.png"
            text="Tic Tac Toe"
            description="An interactive Tic Tac Toe game crafted with HTML, CSS, and JS, hosted via GitHub pages"
            linkText="Play Now"
            href="https://mrwebwork.github.io/tic-tac-toe/"
            showCodeLink={true}
            codeLink={"https://github.com/mrwebwork/tic-tac-toe"}
          />
          <ProjectCard
            image="/spotify.png"
            text="Spotify Clone"
            description="A dynamic clone leveraging Next.js, React.js, TypeScript, Tailwind, Supabase, and Stripe"
            linkText="Listen Now"
            href="https://spotify-sigma-six.vercel.app/"
            showCodeLink={true}
            codeLink={"https://github.com/mrwebwork/spotify"}
          />
        </section>
        <Header
          pageHeader="Bridging Ambitions with Technology"
          pageDesc="E-commerce Web Solutions for Global Clients"
        />
        {/* //* Client Websites */}
        <section className="projects-section container mx-auto">
          <ProjectCard
            image="/montauk-ai-image.png"
            text="Montauk Group"
            description="Built custom 'Shop' pages engineered using Liquid, SCSS, HTML, and JS"
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
        <section className="projects-second-section container mx-auto">
          <ProjectCard
            image="/tonem-ai-image.png"
            text="TŌNEM"
            description="Developed dropshipping store, created mulitple landing pages, and integrated GA4 analytics"
            linkText="Shop Therapy"
            href="https://puretonetherapy.com/"
          />
          <ProjectCard
            image="/front-line-2-ai-image.png"
            text="Frontline Optics"
            description="Constructed custom landing pages using Liquid sections and established email automation with Klaviyo"
            linkText="Shop Shades"
            href="https://frontline-optics.com/"
          />
        </section>
      </div>
    </>
  );
}

import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Header
          pageHeader="Websites & Personal Projects"
          pageDesc="Showcasing my web development journey & creations."
        />
        <Header pageHeader="Giddy Websites" />
        <section className="container mx-auto lg:flex lg:flex-wrap lg:justify-center">
          <ProjectCard
            image="https://placehold.jp/150x150.png"
            text="Eddie by Giddy"
            description="Text about a brand goes here"
            linkText="Buy Eddie"
            href="https://eddiebygiddy.com/"
          />
          <ProjectCard
            image="https://placehold.jp/150x150.png"
            text="Giddy Health"
            description="Text about a brand goes here x2"
            linkText="Shop Vitamins"
            href="https://giddyhealth.com/"
          />
          <ProjectCard
            image="https://placehold.jp/150x150.png"
            text="Giddy"
            description="Text about a brand goes here"
            linkText="Read Articles"
            href="https://getmegiddy.com/"
          />
        </section>
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
        <Header pageHeader="Shopify Webistes" />
        <section className="container mx-auto lg:flex lg:flex-wrap lg:justify-center">
          <ProjectCard
            image="https://placehold.jp/150x150.png"
            text="Montauk Group"
            description="Text about a brand goes here"
            linkText="Shop Seaside"
            href="https://shopthemontaukgroup.com/"
          />
          <ProjectCard
            image="https://placehold.jp/150x150.png"
            text="Yas Mena Cycles"
            description="Text about a brand goes here x2"
            linkText="Shop Bikes"
            href="https://yascycles.com/"
          />
          <ProjectCard
            image="https://placehold.jp/150x150.png"
            text="Together Beverages"
            description="Text about a brand goes here"
            linkText="Shop Drinks"
            href="https://togetherbeverages.com/"
          />
        </section>
        <section className="container mx-auto lg:flex lg:flex-wrap lg:justify-center">
          <ProjectCard
            image="https://placehold.jp/150x150.png"
            text="Zenshin Labs"
            description="Text about a brand goes here"
            linkText="Shop Anime"
            href="https://zenshinlabs.com/"
          />
          <ProjectCard
            image="https://placehold.jp/150x150.png"
            text="TŌNEM"
            description="Text about a brand goes here x2"
            linkText="Shop Therapy"
            href="https://puretonetherapy.com/"
          />
          <ProjectCard
            image="https://placehold.jp/150x150.png"
            text="Frontline Optics"
            description="Text about a brand goes here"
            linkText="Shop Shades"
            href="https://frontline-optics.com/"
          />
        </section>
      </div>
    </>
  );
}

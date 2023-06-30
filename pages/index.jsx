import React from "react";

import Head from "next/head";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillSection from "@/components/SkillSection";
import Reviews from "@/components/Reviews";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  //* Reviews Data
  const reviewsData = [
    {
      clientName: "Fiverr Client",
      reviewText: "Amazing work!",
      rating: 5,
      clientImage: "/path/to/img.jpg",
    },
  ];
  return (
    <>
      <Head>
        <title>Allan Hillman - Software Engineer</title>
        <meta
          name="description"
          content="Welcome to Allan Hillman's portfolio. Discover my journey in web development, my skills, experience, and the projects I've worked on."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Allan Hillman - Software Engineer | Home"
        />
        <meta
          property="og:description"
          content="Welcome to Allan Hillman's portfolio. Discover my journey in web development, my skills, experience, and the projects I've worked on."
        />
        <meta property="og:url" content="https://allanhillman.com" />
      </Head>

      <header id="home" className="container mx-auto flex flex-col">
        {/* //* Navbar */}
        <Navbar />
        <main className="flex-grow flex flex-col">
          {/* //* Header */}
          <Header
            pageHeader="Welcome to Allan Hillman's Digital Domain"
            pageDesc="Building Interactive, High-Performing, and User-Friendly Websites"
          />

          {/* //* Hero */}
          <div id="hero">
            <HeroSection />
          </div>
          {/* //* Skills */}
          <div id="skills">
            <SkillSection />
          </div>
          {/* //* Projects */}
          <div id="projects">
            <Projects />
          </div>
          {/* //* Reviews */}
          <div id="reviews">
            <Reviews reviews={reviewsData} />
          </div>
          {/* //* About Me */}
          <div id="about">
            <About />
          </div>
          {/* //* Contact */}
          <div id="contact">
            <Contact />
          </div>
        </main>
      </header>
    </>
  );
}

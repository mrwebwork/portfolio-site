import React from "react";

import Head from "next/head";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import HeroSection from "@/components/HeroSection";
import SkillSection from "@/components/SkillSection";
import Reviews from "@/components/Reviews";
import ReviewButton from "@/components/ReviewButton";

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
        <title>Allan Hillman - Software Engineer | Home</title>
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

      <header className="container mx-auto text-white dark:text-black bg-black dark:bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {/* //* Heading for Home Page */}
          <Header
            pageHeader="Welcome to Allan Hillman's Digital Domain"
            pageDesc="Building Interactive, High-Performing, and User-Friendly Websites"
          />

          {/* //* Hero Section */}
          <HeroSection />

          {/* //* About Me */}
          <section className="text-center">
            <h1 className="text-5xl pb-5">My Story</h1>
          </section>
          <Paragraph className="my-story-text">
            My journey started at Shopify, where I integrated payment systems
            and boosted site traffic by 40% through SEO strategies. I was
            instrumental in tailoring the e-commerce experience, building custom
            features using Liquid. Then, I dove into freelancing on Fiverr,
            where I&apos;ve delivered 40+ websites with innovative UI/UX
            designs, securing higher conversion rates and customer satisfaction.
          </Paragraph>
          <Paragraph className="my-story-text lg:mb-8">
            Web development is not just my profession—it&apos;s my passion. The
            thrill of learning new technologies, coupled with my ability to
            collaborate effectively, fuels my drive to create dynamic,
            user-friendly web experiences.
          </Paragraph>

          {/* //* Reviews Section */}
          <Reviews reviews={reviewsData} />

          {/* //* Skills Section */}
          <SkillSection />
        </main>
      </header>
    </>
  );
}

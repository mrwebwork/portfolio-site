import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="container mx-auto text-white dark:text-black bg-black dark:bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Header
            pageHeader="Websites made simple for all businesses."
            pageDesc="Transforming your vision into a dynamic online presence."
          />
        </main>
        <Footer />
      </main>
    </>
  );
}

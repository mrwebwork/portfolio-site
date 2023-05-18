import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <Header
        pageHeader="Meet Allan Hillman"
        pageDesc="Crafting seamless digital experiences with code."
      />
      <Paragraph className="text-blue-400">Does text show up?</Paragraph>
      <Footer />
    </>
  );
}

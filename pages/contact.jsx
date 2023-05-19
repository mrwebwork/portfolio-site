import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Header
        pageHeader="Contact Me"
        pageDesc="Let's connect! Excited to discuss your web development needs."
      />
      <SocialMedia />
      <Footer />
    </>
  );
}

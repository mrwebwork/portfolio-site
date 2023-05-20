import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Header
        pageHeader="Contact Me"
        pageDesc="Let's connect! Excited to discuss your web development needs."
      />
      <ContactForm />
    </>
  );
}

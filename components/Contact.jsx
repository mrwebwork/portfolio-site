import React from "react";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="contact-container">
      <Header
        className="text-5xl"
        pageHeader="Contact Me"
        pageDesc="Excited to discuss your web development needs"
      />
      <ContactMe />
      {/* <ContactForm /> */}
    </div>
  );
}

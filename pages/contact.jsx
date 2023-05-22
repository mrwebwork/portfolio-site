import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Allan Hillman - Web Developer & Designer</title>
        <meta
          name="description"
          content="Let's connect! Reach out to discuss your web development needs, project ideas, or any other inquiries."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Contact Allan Hillman - Web Developer & Designer"
        />
        <meta
          property="og:description"
          content="Let's connect! Reach out to discuss your web development needs, project ideas, or any other inquiries."
        />
        <meta property="og:url" content="https://allanhillman.com" />
      </Head>

      <Navbar />
      <Header
        pageHeader="Contact Me"
        pageDesc="Let's connect! Excited to discuss your web development needs."
      />
      <ContactForm />
    </>
  );
}

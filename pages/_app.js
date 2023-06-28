import "../styles/globals.css";

import "../styles/main.scss";

import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  );
}

import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  );
}
export default MyApp;

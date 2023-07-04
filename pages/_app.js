import "../styles/main.scss";

import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="text-foreground bg-background min-h-screen">
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </div>
  );
}

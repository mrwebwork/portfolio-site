import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ToggleTheme from "@/components/ToggleTheme";

export default function Home() {
  return (
    <>
      <main className="container mx-auto text-white dark:text-black bg-black dark:bg-white flex flex-col">
        <Navbar />
        <div>
          <Header />
        </div>
      </main>
    </>
  );
}

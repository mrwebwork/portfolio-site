import React from "react";
import Navbar from "@/components/Navbar";
import ToggleTheme from "@/components/ToggleTheme";

export default function Home() {
  return (
    <>
      <main className="container mx-auto text-white dark:text-black bg-black dark:bg-white flex flex-col">
        <Navbar />
        <div>
          <ToggleTheme />
        </div>
      </main>
    </>
  );
}

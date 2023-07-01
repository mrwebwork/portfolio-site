import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    // Now we're in the "effect", we can safely access `window`
    let storedTheme = window.localStorage.getItem("theme");
    setIsDark(storedTheme ? storedTheme === "dark" : false);
  }, []); // Run this effect once on component mount

  useEffect(() => {
    if (isDark === null) {
      return;
    }

    const foregroundColor = isDark
      ? "var(--color-primary-light)"
      : "var(--color-primary)";
    const backgroundColor = isDark
      ? "var(--color-primary)"
      : "var(--color-primary-light)";
    const theme = isDark ? "dark" : "light";

    document.documentElement.style.setProperty("--foreground", foregroundColor);
    document.documentElement.style.setProperty("--background", backgroundColor);
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", theme);
  }, [isDark]); // Run this effect when `isDark` changes

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  if (isDark === null) {
    return null;
  }

  const icon = isDark ? <FaSun size={25} /> : <FaMoon size={25} />;

  return (
    <button
      role="button"
      aria-label="Toggle button for switching between night and light mode"
      className="flex items-center sm:pt-2 sm:ps-4"
      onClick={toggleTheme}
    >
      {icon}
    </button>
  );
}

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = window.localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme === "dark";
      }
      return null;
    } else {
      return false;
    }
  });

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
  }, [isDark]);

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
      className="lg:ps-2 md:pb-1 lg:pb-0"
      onClick={toggleTheme}
    >
      {icon}
    </button>
  );
}

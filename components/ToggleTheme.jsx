import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  //* On component mount, check if user has a preferred color scheme
  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setIsDark(initialColorValue === "dark");
  }, []);

  //* Toggle between light and dark mode
  const toggleTheme = () => {
    let root = window.document.documentElement;
    root.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <button className="btn " onClick={toggleTheme}>
      {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

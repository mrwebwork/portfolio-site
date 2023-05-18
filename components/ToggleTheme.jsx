import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

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

  //* Depending on the current mode, select the corresponding icon
  const icon = isDark ? <FaSun /> : <FaMoon />;
  return <button onClick={toggleTheme}>{icon}</button>;
}

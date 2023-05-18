import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("theme") === "dark";
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const icon = isDark ? <FaSun /> : <FaMoon />;

  return (
    <button className="md:ps-5" onClick={toggleTheme}>
      {icon}
    </button>
  );
}

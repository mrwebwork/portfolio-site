//* Importing required modules and components
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

//* The ToggleTheme component is responsible for handling theme switching functionality.
export default function ToggleTheme() {
  //* The 'isDark' state determines the current theme. It initially tries to get the theme from local storage or defaults to 'false' (light theme).
  const [isDark, setIsDark] = useState(() => {
    //* Checking if window is defined before trying to access local storage to avoid issues during server side rendering.
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("theme") === "dark";
    } else {
      return false;
    }
  });

  //* 'useEffect' hook is used to add or remove the 'dark' class to the document element depending on the 'isDark' state, and also save the current theme to local storage.
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [isDark]); //* 'isDark' state is added as a dependency to 'useEffect' hook, meaning it will run everytime 'isDark' changes.

  //* 'toggleTheme' function is responsible for switching the 'isDark' state value, effectively toggling the theme.
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  //* Depending on the 'isDark' state, different icons are assigned to the 'icon' variable.
  const icon = isDark ? <FaSun size={24} /> : <FaMoon size={24} />;

  return (
    <button className="md:ps-5 md:pb-0" onClick={toggleTheme}>
      {icon}
    </button>
  );
}

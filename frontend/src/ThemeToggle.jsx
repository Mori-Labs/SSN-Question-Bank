import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gray-800 text-white dark:bg-white dark:text-black shadow-lg"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

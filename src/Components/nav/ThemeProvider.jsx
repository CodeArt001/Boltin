import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext"; // Import from the file you just named

export const ThemeProvider = ({ children }) => {
  // Check local storage or system preference for initial theme
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Whenever the theme changes, update local storage and the HTML class
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import { createContext, useContext, useState } from "react";
import { config } from "./config";
// localStorage.clear();
const defaultTheme = () => {
  const theme = JSON.parse(localStorage.getItem("theme"));

  if (theme === null) {
    localStorage.setItem(
      "theme",
      JSON.stringify({ styles: config.dark, theme: "dark" })
    );

    return config.dark;
  }

  return theme;
};

const ThemeContext = createContext(defaultTheme());

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => defaultTheme());

  const changeTheme = (isLight) => {
    if (isLight) {
      localStorage.setItem(
        "theme",
        JSON.stringify({ styles: config.light, theme: "light" })
      );
      setTheme({ styles: config.light, theme: "light" });
    } else {
      localStorage.setItem(
        "theme",
        JSON.stringify({ styles: config.dark, theme: "dark" })
      );
      setTheme({ styles: config.dark, theme: "dark" });
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

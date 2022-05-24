import { createContext, useContext, useState } from "react";
import { config } from "./config";

const defaultTheme = config.dark;

const ThemeContext = createContext(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const changeTheme = (isLight) => {
    // if (theme === config.dark) setTheme(config.light);
    // else setTheme(config.dark);
    if (isLight) setTheme(config.light);
    else setTheme(config.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

export type ThemeTypes = "light" | "dark";

export interface ThemeContextProps {
  theme: ThemeTypes;
  changeTheme: (theme?: ThemeTypes) => void;
}

const defaultThemeContextValue: ThemeContextProps = {
  theme: "light",
  changeTheme: () => {},
};

const ThemeContext = createContext<ThemeContextProps>(defaultThemeContextValue);

const switchTheme = (theme: ThemeTypes): ThemeTypes => {
  return theme === "light" ? "dark" : "light";
};

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme: ThemeTypes;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, defaultTheme }) => {
  const [currentTheme, setTheme] = useState<ThemeContextProps["theme"]>(defaultTheme);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("app-theme") as ThemeTypes;

    if (localStorageTheme) {
      setTheme(localStorageTheme);
    } else {
      localStorage.setItem("app-theme", currentTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.querySelector("html");

      const localStorageTheme = localStorage.getItem("app-theme") as ThemeTypes;

      if (html) {
        const className = html.className.trim();
        if (
          className === "" || className === "light" || className === "dark"
        ) {
          html.className = currentTheme;
        } else {
          const newClassName = className.split(" ").map((cn) => {
            return cn === "light" || cn === "dark" ? switchTheme(cn) : cn;
          }).join(" ");
          html.className = newClassName;
        }
      }
    }
  }, [currentTheme]);

  const changeTheme: ThemeContextProps["changeTheme"] = (theme) => {
    if (theme) {
      localStorage.setItem("app-theme", theme);
      setTheme(theme);
    } else {
      const targetTheme = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem("app-theme", targetTheme);
      setTheme(targetTheme);
    }
  };

  const value: ThemeContextProps = {
    theme: currentTheme,
    changeTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

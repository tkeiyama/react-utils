import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

export type ThemeTypes = "light" | "dark";

export interface ThemeContextProps {
  /**
   * An application's theme.
   */
  theme: ThemeTypes;
  /**
   * A handler to change a theme.
   * 
   * @param theme which sets to a next theme.
   */
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
  /**
   * Component(s) which need to get a theme.
   */
  children: ReactNode;
  /**
   * A default theme.
   */
  defaultTheme: ThemeTypes;
}

/**
 * You need to wrap a root component with this provider.
 * 
 * @param defaultTheme which provided to an application as the default theme.
 * @default "light"
 */
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

/**
 * A react hook returns `theme` and `changeTheme`.
 * 
 * This function won't work unless you wrap component(s) by the `ThemeProvider` component.
 */
export const useTheme = () => useContext(ThemeContext);

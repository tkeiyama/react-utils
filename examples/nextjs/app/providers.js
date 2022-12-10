"use client";

import { ThemeProvider } from "@tkeiyama/react-dev-utils";

export const Providers = ({ children }) => {
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>;
};

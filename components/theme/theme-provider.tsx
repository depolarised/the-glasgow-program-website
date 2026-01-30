"use client";

import { createContext, useContext } from "react";
import { glasgowTheme } from "@/lib/themes";
import type { Theme } from "@/lib/themes";

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // CSS variables are defined in globals.css, so no client-side application needed
  // This provider simply makes the theme object available via context
  return (
    <ThemeContext.Provider value={{ theme: glasgowTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

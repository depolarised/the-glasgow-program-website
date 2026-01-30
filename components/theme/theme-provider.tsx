"use client";

import { createContext, useContext } from "react";
import { glasgowTheme } from "@/lib/themes";
import type { Theme } from "@/lib/themes";

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // CSS variables are statically defined in styles/globals.css
  // No need for dynamic application since we have a single theme
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

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { glasgowTheme, getThemeCSSVariables } from "@/lib/themes";
import type { Theme } from "@/lib/themes";

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Apply theme CSS variables on mount
  useEffect(() => {
    setMounted(true);
    const variables = getThemeCSSVariables(glasgowTheme);

    Object.entries(variables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, []);

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

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

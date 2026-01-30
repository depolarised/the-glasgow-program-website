"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { themes, defaultTheme, getThemeCSSVariables } from "@/lib/themes";
import type { ThemeName, Theme } from "@/lib/themes";

interface ThemeContextType {
  theme: Theme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "glasgow-ecg-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName | null;
    if (stored && themes[stored]) {
      setThemeName(stored);
    }
  }, []);

  // Apply theme CSS variables
  useEffect(() => {
    if (!mounted) return;

    const theme = themes[themeName];
    const variables = getThemeCSSVariables(theme);

    Object.entries(variables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    // Store preference
    localStorage.setItem(THEME_STORAGE_KEY, themeName);
  }, [themeName, mounted]);

  const setTheme = useCallback((name: ThemeName) => {
    setThemeName(name);
  }, []);

  const theme = themes[themeName];

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme }}>
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

"use client";

import { useState } from "react";
import { Palette, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./theme-provider";
import { themes } from "@/lib/themes";
import type { ThemeName } from "@/lib/themes";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { themeName, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions: { name: ThemeName; preview: { bg: string; primary: string; accent: string } }[] = [
    {
      name: "clinical",
      preview: { bg: "#FAFBFC", primary: "#1E3A5F", accent: "#D9534F" },
    },
    {
      name: "modern",
      preview: { bg: "#FAFAFA", primary: "#0D7377", accent: "#E07A3D" },
    },
    {
      name: "minimal",
      preview: { bg: "#FFFFFF", primary: "#4A6FA5", accent: "#E05A00" },
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          "text-foreground-muted hover:text-foreground hover:bg-surface-hover",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        )}
        aria-label="Change theme"
        aria-expanded={isOpen}
      >
        <Palette className="h-4 w-4" />
        <span className="hidden sm:inline">Theme</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 z-50 w-72 rounded-lg border border-border bg-surface p-2 shadow-medium"
            >
              <div className="px-2 py-1.5 mb-1">
                <p className="text-xs font-medium text-foreground-muted uppercase tracking-wider">
                  Color Scheme
                </p>
              </div>

              {themeOptions.map((option) => {
                const theme = themes[option.name];
                const isActive = themeName === option.name;

                return (
                  <button
                    key={option.name}
                    onClick={() => {
                      setTheme(option.name);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-start gap-3 rounded-md p-3 text-left transition-colors",
                      isActive
                        ? "bg-primary-muted"
                        : "hover:bg-surface-hover"
                    )}
                  >
                    {/* Color preview */}
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-md border border-border overflow-hidden"
                      style={{ backgroundColor: option.preview.bg }}
                    >
                      <div className="h-full flex flex-col">
                        <div
                          className="h-1/2"
                          style={{ backgroundColor: option.preview.primary }}
                        />
                        <div className="h-1/2 flex">
                          <div className="w-1/2" style={{ backgroundColor: option.preview.bg }} />
                          <div
                            className="w-1/2"
                            style={{ backgroundColor: option.preview.accent }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Theme info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">
                          {theme.label}
                        </span>
                        {isActive && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <p className="text-xs text-foreground-muted mt-0.5 truncate">
                        {theme.description}
                      </p>
                    </div>
                  </button>
                );
              })}

              <div className="mt-2 px-2 py-1.5 border-t border-border">
                <p className="text-xs text-foreground-muted">
                  All themes are designed to be colorblind-friendly
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

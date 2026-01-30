export type ThemeName = "clinical" | "modern" | "minimal";

export interface Theme {
  name: ThemeName;
  label: string;
  description: string;
  colors: {
    // Backgrounds
    background: string;
    backgroundAlt: string;
    surface: string;
    surfaceHover: string;

    // Text
    text: string;
    textMuted: string;
    textInverse: string;

    // Primary brand color
    primary: string;
    primaryHover: string;
    primaryMuted: string;

    // Accent for CTAs and alerts
    accent: string;
    accentHover: string;
    accentMuted: string;

    // Borders
    border: string;
    borderHover: string;

    // Status colors (colorblind-friendly)
    success: string;
    warning: string;
    critical: string;

    // ECG line color
    ecgLine: string;
    ecgGlow: string;
  };
  isDark: boolean;
}

// Option A: Glasgow Clinical Blue
// Authoritative, calm, data-first - suitable for B2B and regulatory clients
export const clinicalTheme: Theme = {
  name: "clinical",
  label: "Glasgow Clinical Blue",
  description: "Authoritative and calm, ideal for healthcare partners",
  isDark: false,
  colors: {
    // Light backgrounds with subtle blue undertones
    background: "#FAFBFC",
    backgroundAlt: "#F0F4F8",
    surface: "#FFFFFF",
    surfaceHover: "#F7F9FB",

    // Text - high contrast for accessibility
    text: "#1A2B3C",
    textMuted: "#5A6B7C",
    textInverse: "#FFFFFF",

    // Deep clinical blue - trust and longevity
    primary: "#1E3A5F",
    primaryHover: "#2A4A73",
    primaryMuted: "#E8EEF4",

    // Coral accent - warm but professional
    accent: "#D9534F",
    accentHover: "#C9433F",
    accentMuted: "#FDF2F2",

    // Borders - slate grey
    border: "#D1D9E0",
    borderHover: "#1E3A5F",

    // Colorblind-friendly status colors
    success: "#2E7D32", // Green with good contrast
    warning: "#ED8B00", // Orange (distinct from red/green)
    critical: "#C62828", // Red with blue undertone

    // ECG visualization
    ecgLine: "#1E3A5F",
    ecgGlow: "rgba(30, 58, 95, 0.2)",
  },
};

// Option B: AI Modern Teal
// Contemporary, technological clarity - modern AI aesthetic
export const modernTheme: Theme = {
  name: "modern",
  label: "AI Modern Teal",
  description: "Contemporary and technological, modern AI aesthetic",
  isDark: false,
  colors: {
    // Clean white with subtle warmth
    background: "#FAFAFA",
    backgroundAlt: "#F0F7F7",
    surface: "#FFFFFF",
    surfaceHover: "#F5FAFA",

    // Text
    text: "#1A2F2F",
    textMuted: "#5A7070",
    textInverse: "#FFFFFF",

    // Clear teal - technological clarity
    primary: "#0D7377",
    primaryHover: "#0A5C5F",
    primaryMuted: "#E6F4F4",

    // Soft orange accent - warm contrast
    accent: "#E07A3D",
    accentHover: "#C96A2F",
    accentMuted: "#FEF4EE",

    // Borders
    border: "#D0E0E0",
    borderHover: "#0D7377",

    // Colorblind-friendly status
    success: "#1B7340",
    warning: "#D97706",
    critical: "#BE3A3A",

    // ECG - teal with glow
    ecgLine: "#0D7377",
    ecgGlow: "rgba(13, 115, 119, 0.25)",
  },
};

// Option C: Research-Centric Minimal
// Scientific journal aesthetic - extremely clean and credible
export const minimalTheme: Theme = {
  name: "minimal",
  label: "Research Minimal",
  description: "Scientific and clean, journal-like credibility",
  isDark: false,
  colors: {
    // Pure white and stone grey
    background: "#FFFFFF",
    backgroundAlt: "#F8F8F6",
    surface: "#FFFFFF",
    surfaceHover: "#FAFAF8",

    // Text - graphite
    text: "#2D2D2D",
    textMuted: "#6B6B6B",
    textInverse: "#FFFFFF",

    // Muted blue - data visualization
    primary: "#4A6FA5",
    primaryHover: "#3A5F95",
    primaryMuted: "#EEF2F7",

    // Bold orange - urgent/important only
    accent: "#E05A00",
    accentHover: "#C04A00",
    accentMuted: "#FFF3EB",

    // Borders - stone
    border: "#E5E5E0",
    borderHover: "#4A6FA5",

    // Colorblind-friendly status
    success: "#3A7D44",
    warning: "#CC7A00",
    critical: "#C43C3C",

    // ECG - muted blue
    ecgLine: "#4A6FA5",
    ecgGlow: "rgba(74, 111, 165, 0.15)",
  },
};

export const themes: Record<ThemeName, Theme> = {
  clinical: clinicalTheme,
  modern: modernTheme,
  minimal: minimalTheme,
};

export const defaultTheme: ThemeName = "clinical";

// Generate CSS variables from theme
export function getThemeCSSVariables(theme: Theme): Record<string, string> {
  return {
    "--color-background": theme.colors.background,
    "--color-background-alt": theme.colors.backgroundAlt,
    "--color-surface": theme.colors.surface,
    "--color-surface-hover": theme.colors.surfaceHover,

    "--color-text": theme.colors.text,
    "--color-text-muted": theme.colors.textMuted,
    "--color-text-inverse": theme.colors.textInverse,

    "--color-primary": theme.colors.primary,
    "--color-primary-hover": theme.colors.primaryHover,
    "--color-primary-muted": theme.colors.primaryMuted,

    "--color-accent": theme.colors.accent,
    "--color-accent-hover": theme.colors.accentHover,
    "--color-accent-muted": theme.colors.accentMuted,

    "--color-border": theme.colors.border,
    "--color-border-hover": theme.colors.borderHover,

    "--color-success": theme.colors.success,
    "--color-warning": theme.colors.warning,
    "--color-critical": theme.colors.critical,

    "--color-ecg-line": theme.colors.ecgLine,
    "--color-ecg-glow": theme.colors.ecgGlow,
  };
}

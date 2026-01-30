// University of Glasgow Brand Colors
// Based on official UofG brand guidelines

export interface Theme {
  name: string;
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

    // Primary brand color - University Blue
    primary: string;
    primaryHover: string;
    primaryMuted: string;

    // Accent - Light Blue from secondary palette
    accent: string;
    accentHover: string;
    accentMuted: string;

    // Borders
    border: string;
    borderHover: string;

    // Status colors using secondary palette
    success: string;
    warning: string;
    critical: string;

    // ECG line color
    ecgLine: string;
    ecgGlow: string;
  };
  isDark: boolean;
}

// University of Glasgow Official Brand Palette
//
// Primary: University Blue #011451
//
// Secondary Light Palette (for accents, light backgrounds):
// - Light purple: #A5A1CE
// - Light pink: #E98BAF
// - Light green: #81C071
// - Light blue: #4DBBC6
// - Light yellow: #F2D25C
//
// Accessibility:
// - White text on dark backgrounds
// - University Blue text on light backgrounds

export const glasgowTheme: Theme = {
  name: "glasgow",
  label: "University of Glasgow",
  description: "Official University of Glasgow brand colors",
  isDark: false,
  colors: {
    // Backgrounds - subtle tints from secondary light blue palette
    background: "#F8FBFC", // Very pale blue tint
    backgroundAlt: "#EEF5F6", // Subtle light blue undertone
    surface: "#FFFFFF",
    surfaceHover: "#F5FAFA", // Light blue hover

    // Text - University Blue for readability on light backgrounds
    text: "#011451", // University Blue
    textMuted: "#3D4F6F",
    textInverse: "#FFFFFF",

    // Primary - University Blue
    primary: "#011451",
    primaryHover: "#1A2D62",
    primaryMuted: "#E8ECF4",

    // Accent - Light Blue from secondary palette
    accent: "#4DBBC6",
    accentHover: "#3AA8B3",
    accentMuted: "#E6F7F8",

    // Borders
    border: "#D1D9E6",
    borderHover: "#011451",

    // Status colors from secondary light palette
    success: "#81C071", // Light green
    warning: "#F2D25C", // Light yellow
    critical: "#E98BAF", // Light pink

    // ECG visualization - University Blue
    ecgLine: "#011451",
    ecgGlow: "rgba(1, 20, 81, 0.2)",
  },
};

// Secondary Light Palette - exported for use in components
export const secondaryLightPalette = {
  purple: "#A5A1CE",
  pink: "#E98BAF",
  green: "#81C071",
  blue: "#4DBBC6",
  yellow: "#F2D25C",
};

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

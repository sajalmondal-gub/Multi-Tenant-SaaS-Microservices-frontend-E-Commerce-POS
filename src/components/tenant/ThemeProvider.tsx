"use client";

import React, { useEffect, useState } from "react";

// In the future, this interface will map to API response
interface ThemeConfig {
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  bg: string;
  surface: string;
  text: string;
  muted: string;
}

// Default Grocery Theme (Emerald / Premium White)
const defaultGroceryTheme: ThemeConfig = {
  primary: "#10b981", // Emerald 500
  primaryForeground: "#ffffff",
  secondary: "#f0fdf4", // Emerald 50
  secondaryForeground: "#064e3b", // Emerald 900
  accent: "#f59e0b", // Amber 500 (for deals/badges)
  accentForeground: "#ffffff",
  bg: "#ffffff", // Pure white background
  surface: "#ffffff", // Pure white cards
  text: "#0f172a", // Slate 900
  muted: "#64748b", // Slate 500
};

export function TenantThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeConfig>(defaultGroceryTheme);

  // In the future:
  // useEffect(() => {
  //   fetch('/api/tenant/theme').then(res => res.json()).then(setTheme)
  // }, []);

  // Create CSS variables object using Tailwind v4's native --color-* prefix
  const cssVariables = {
    "--color-tenant-primary": theme.primary,
    "--color-tenant-primary-foreground": theme.primaryForeground,
    "--color-tenant-secondary": theme.secondary,
    "--color-tenant-secondary-foreground": theme.secondaryForeground,
    "--color-tenant-accent": theme.accent,
    "--color-tenant-accent-foreground": theme.accentForeground,
    "--color-tenant-bg": theme.bg,
    "--color-tenant-surface": theme.surface,
    "--color-tenant-text": theme.text,
    "--color-tenant-muted": theme.muted,
    // Add legacy aliases just in case
    "--tenant-primary": theme.primary,
    "--tenant-bg": theme.bg,
    "--tenant-text": theme.text,
  } as React.CSSProperties;

  return (
    <div 
      style={cssVariables}
      className="bg-tenant-bg text-tenant-text font-sans selection:bg-tenant-primary/20 selection:text-tenant-primary min-h-screen"
    >
      {children}
    </div>
  );
}

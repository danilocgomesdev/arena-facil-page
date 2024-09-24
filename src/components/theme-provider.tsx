"use client";
import { useThemeStore } from "@/stores/themeStore";
import { useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: "dark" | "light" | "system";
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "theme-store",
}: ThemeProviderProps) {
  const { theme, loadThemeFromStorage } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      loadThemeFromStorage(defaultTheme, storageKey);
      setMounted(true);
    }
  }, [defaultTheme, storageKey, loadThemeFromStorage]);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme, mounted]);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}

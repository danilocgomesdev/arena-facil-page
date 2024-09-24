"use client";
import { useThemeStore } from "@/app/stores/themeStore"; // Atualize o caminho conforme necessário
import { useEffect } from "react";

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

  useEffect(() => {
    loadThemeFromStorage(defaultTheme, storageKey);
  }, [defaultTheme, storageKey, loadThemeFromStorage]);

  useEffect(() => {
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
  }, [theme]);

  return <>{children}</>;
}

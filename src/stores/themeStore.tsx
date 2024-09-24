import { create } from "zustand";

type Theme = "dark" | "light" | "system";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  loadThemeFromStorage: (defaultTheme: Theme, storageKey: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "system",
  setTheme: (theme: Theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme-store", theme);
    }
    set({ theme });
  },
  loadThemeFromStorage: (defaultTheme: Theme, storageKey: string) => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(storageKey) as Theme;
      set({ theme: storedTheme || defaultTheme });
    } else {
      set({ theme: defaultTheme });
    }
  },
}));

import { create } from "zustand";

type ThemeState = { theme: "dark" | "light" };
type ThemeStateActions = {
  setTheme: (theme: ThemeState["theme"]) => void;
};

const getInitialTheme = (): ThemeState["theme"] => {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};
type ThemeStore = ThemeState & ThemeStateActions;
const UseTheme = create<ThemeStore>()((set) => ({
  theme: getInitialTheme(),
  setTheme: (newTheme) => {
    localStorage.setItem("theme", newTheme);
    set({ theme: newTheme });
  },
}));

export { UseTheme };

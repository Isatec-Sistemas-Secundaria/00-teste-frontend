import { create } from "zustand";

type ThemeState = { theme: "dark" | "light" };
type ThemeStateActions = {
  setTheme: (theme: ThemeState["theme"]) => void;
};
const setThemeOnDocument: (theme: ThemeState["theme"]) => void = (theme) => {
  const oldTheme = theme == "dark" ? "light" : "dark";
  document.documentElement.classList.add(theme);
  document.documentElement.classList.remove(oldTheme);
};

const getInitialTheme = (): ThemeState["theme"] => {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    setThemeOnDocument(stored);
    return stored;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setThemeOnDocument(prefersDark ? "dark" : "light");
  return prefersDark ? "dark" : "light";
};
type ThemeStore = ThemeState & ThemeStateActions;
const UseTheme = create<ThemeStore>()((set) => ({
  theme: getInitialTheme(),
  setTheme: (newTheme) => {
    localStorage.setItem("theme", newTheme);
    const oldTheme = newTheme == "dark" ? "light" : "dark";
    document.documentElement.classList.add(newTheme);
    document.documentElement.classList.remove(oldTheme);
    set({ theme: newTheme });
  },
}));

export { UseTheme };

import { UseTheme } from "../lib/themeState";
import { Sun, Moon } from "lucide-react";

function ThemeButton() {
  const theme = UseTheme((state) => state.theme);
  const setTheme = UseTheme((state) => state.setTheme);
  const handleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <button onClick={handleTheme} className="bg-(--bg) fixed left-4 top-4">
      {theme == "dark" ? <Sun /> : <Moon />}
    </button>
  );
}

export { ThemeButton };

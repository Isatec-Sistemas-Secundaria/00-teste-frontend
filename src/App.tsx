import { Login } from "./pages/Login"
import { useTheme } from "./hooks/useTheme"
import { Sun, Moon } from "lucide-react"

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main>
      <button
        onClick={toggleTheme}
        className="fixed top-1 right-1 sm:top-4 sm:right-4 p-2.5 rounded-full bg-surface-card border border-zinc-200 dark:border-zinc-700 shadow-lg hover:scale-110 transition-all cursor-pointer z-50"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <Sun className="text-yellow-400" size={20} /> : <Moon className="text-zinc-600" size={20} />}
      </button>

      <Login />
    </main>
  )
}

export default App

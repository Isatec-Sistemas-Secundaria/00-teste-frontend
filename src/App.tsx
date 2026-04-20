import { ThemeProvider } from './contexts/ThemeContext'
import { ThemeToggle } from './components/ThemeToggle'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <LoginPage />
    </ThemeProvider>
  )
}

export default App

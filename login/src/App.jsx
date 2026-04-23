import { useState } from 'react'
import LoginPage from './components/LoginPage'

function App() {
  const [dark, setDark] = useState(false)

  return <LoginPage dark={dark} onToggleDark={() => setDark(d => !d)} />
}

export default App
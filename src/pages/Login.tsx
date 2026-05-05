import { useState } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import logo from "../assets/logo_monocrome.png"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    if (!email || !password) return alert("Preencha todos os campos")
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert("Login realizado!")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-primary px-4 transition-colors duration-300">
      <div className="w-full max-w-md bg-surface-card p-8 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 transition-all">
        <img src={logo} alt="Logo" className="mx-auto h-16 w-16 mb-6" />

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-content-main">Bem-Vindo</h1>
          <p className="text-content-muted">Faça login na sua conta</p>
        </div>

        <div className="space-y-5">
          <Input
            label="E-mail"
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="space-y-1">
            <Input
              label="Senha"
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-end">
              <a href="#" className="text-xs text-accent hover:underline">Esqueceu a senha?</a>
            </div>
          </div>

          <Button onClick={handleLogin} loading={loading}>
            Entrar
          </Button>

          <p className="text-xs text-center text-content-muted pt-4">
            &copy; 2026 Isatec Sistemas e Consultoria
          </p>
        </div>
      </div>
    </div>
  )
}

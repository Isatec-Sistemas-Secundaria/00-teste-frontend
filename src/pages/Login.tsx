import { useState } from "react"
import logo from '../assets/logo_monocrome.png'

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    if (!email || !password) {
      alert("Preencha todos os campos")
      return
    }

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      alert("Login realizado!")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#151d2d] px-4">
      <div className="w-full max-w-md bg-white dark:bg-[#212939] p-6 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.95)] relative">
        <img src={logo} alt="Logo" className="mx-auto h-16 w-16 mb-8 mt-4" />
        <div className="flex flex-col items-center mb-6 space-y-2">
          <h1 className="text-2xl text-center text-zinc-800 dark:text-white">
            Bem-Vindo
          </h1>
          <p className=" text-center dark:text-white">
            Faça login na sua conta
          </p>
        </div>

        <div className="space-y-3 px-4">
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="seu@email.com"
            className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-[#151d2d] text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

            <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-[#151d2d] text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          <div className="flex justify-end p-2 ">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Esqueceu a senha?
            </a>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full mb-8 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
          <div className="absolute bottom-2 left-0 right-0">
            <p className="text-sm text-center text-zinc-600 dark:text-zinc-400 ">
            &copy; 2026 Isatec Sistemas e Consultoria
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

import { Input } from "../components/Input"
import { Button } from "../components/Button"
import logo from "../assets/logo_monocrome.png"

export function Login() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-primary px-4 py-8 transition-colors duration-300">
      <div className="w-full max-w-md bg-surface-card p-6 sm:p-8 rounded-2xl shadow-login border-zinc-200 dark:border-zinc-800 transition-all relative pb-10">
        <img src={logo} alt="Logo" className="mx-auto h-20 w-20 mb-8 p-2 bg-blue-700 rounded-full dark:bg-transparent filter transition" />

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-content-main mb-2">Bem-Vindo</h1>
          <p className="text-content-muted">Faça login na sua conta</p>
        </div>

        <div className="space-y-6">
          <Input
            label="E-mail"
            id="email"
            type="email"
            placeholder="seu@email.com"
          />

          <div className="space-y-2">
            <Input
              label="Senha"
              id="password"
              type="password"
              placeholder="••••••••"
            />
            <div className="flex justify-end">
              <a href="#" className="text-xs text-accent hover:underline">Esqueceu a senha?</a>
            </div>
          </div>

          <Button>
            Entrar
          </Button>

          <p className="absolute text-xs text-gray-400 bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
            &copy; 2026 Isatec Sistemas e Consultoria
          </p>
        </div>
      </div>
    </div>
  )
}

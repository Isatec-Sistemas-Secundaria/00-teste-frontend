import { useState, FormEvent } from 'react'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  function validate() {
    const newErrors: { email?: string; password?: string } = {}
    if (!email) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'E-mail inválido'
    }
    if (!password) {
      newErrors.password = 'Senha é obrigatória'
    } else if (password.length < 6) {
      newErrors.password = 'Senha deve ter ao menos 6 caracteres'
    }
    return newErrors
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setIsLoading(true)
    // Simula chamada de API
    setTimeout(() => {
      setIsLoading(false)
      alert('Login realizado com sucesso!')
    }, 1500)
  }

  return (
    <div className="
      min-h-screen w-full
      flex items-center justify-center
      bg-gray-100 dark:bg-[#0F172A]
      transition-colors duration-300
      font-nunito
      px-4
    ">
      {/* Card */}
      <div className="
        w-full max-w-[420px]
        bg-white dark:bg-[#1E293B]
        rounded-2xl
        shadow-[0_8px_40px_rgba(0,0,0,0.10)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)]
        px-10 py-10
        flex flex-col items-center
        transition-colors duration-300
      ">

        {/* Logo */}
        <div className="
          w-16 h-16 rounded-full
          bg-[#3B7BE8] dark:bg-transparent dark:border dark:border-white/20
          flex items-center justify-center
          mb-6
          overflow-hidden
        ">
          <img
            src="/logo_monocrome.png"
            alt="Isatec Logo"
            className="w-10 h-10 object-contain brightness-0 invert"
          />
        </div>

        {/* Título */}
        <h1 className="
          text-2xl font-bold
          text-gray-900 dark:text-white
          mb-1
          tracking-tight
        ">
          Bem-vindo
        </h1>

        {/* Subtítulo */}
        <p className="
          text-sm font-medium
          text-gray-500 dark:text-slate-400
          mb-8
        ">
          Faça login na sua conta
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} noValidate className="w-full flex flex-col gap-4">

          {/* Campo E-mail */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700 dark:text-slate-300"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="seu@email.com"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
                if (errors.email) setErrors(prev => ({ ...prev, email: undefined }))
              }}
              className={`
                w-full px-4 py-3 rounded-lg
                text-sm font-medium
                bg-gray-50 dark:bg-[#273549]
                border ${errors.email
                  ? 'border-red-400 dark:border-red-500'
                  : 'border-gray-200 dark:border-[#334155]'
                }
                text-gray-900 dark:text-white
                placeholder-gray-400 dark:placeholder-slate-500
                outline-none
                focus:border-[#3B7BE8] dark:focus:border-[#3B7BE8]
                focus:ring-2 focus:ring-[#3B7BE8]/20
                transition-all duration-200
              `}
            />
            {errors.email && (
              <span className="text-xs text-red-500 font-medium">{errors.email}</span>
            )}
          </div>

          {/* Campo Senha */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-700 dark:text-slate-300"
            >
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={e => {
                  setPassword(e.target.value)
                  if (errors.password) setErrors(prev => ({ ...prev, password: undefined }))
                }}
                className={`
                  w-full px-4 py-3 pr-11 rounded-lg
                  text-sm font-medium
                  bg-gray-50 dark:bg-[#273549]
                  border ${errors.password
                    ? 'border-red-400 dark:border-red-500'
                    : 'border-gray-200 dark:border-[#334155]'
                  }
                  text-gray-900 dark:text-white
                  placeholder-gray-400 dark:placeholder-slate-500
                  outline-none
                  focus:border-[#3B7BE8] dark:focus:border-[#3B7BE8]
                  focus:ring-2 focus:ring-[#3B7BE8]/20
                  transition-all duration-200
                `}
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
                  text-gray-400 dark:text-slate-500
                  hover:text-gray-600 dark:hover:text-slate-300
                  transition-colors
                "
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-xs text-red-500 font-medium">{errors.password}</span>
            )}
          </div>

          {/* Esqueceu a senha */}
          <div className="flex justify-end -mt-1">
            <a
              href="#"
              className="
                text-sm font-semibold
                text-[#3B7BE8] hover:text-[#2563EB]
                transition-colors duration-150
                underline-offset-2 hover:underline
              "
            >
              Esqueceu a senha?
            </a>
          </div>

          {/* Botão Entrar */}
          <button
            type="submit"
            disabled={isLoading}
            className="
              w-full py-3 mt-1 rounded-lg
              bg-[#3B7BE8] hover:bg-[#2563EB]
              active:bg-[#1D4ED8]
              disabled:opacity-70 disabled:cursor-not-allowed
              text-white font-bold text-sm
              tracking-wide
              transition-all duration-200
              shadow-md shadow-[#3B7BE8]/30
              flex items-center justify-center gap-2
            "
          >
            {isLoading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Entrando...
              </>
            ) : (
              'Entrar'
            )}
          </button>

        </form>

        {/* Footer */}
        <p className="
          mt-8 text-xs
          text-gray-400 dark:text-slate-500
          font-medium
        ">
          © 2026 Isatec Sistemas e Consultoria
        </p>

      </div>
    </div>
  )
}

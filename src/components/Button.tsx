import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export function Button({ children, loading, ...rest }: ButtonProps) {
  return (
    <button
      className="w-full py-2.5 rounded-lg dark:bg-accent bg-blue-700 text-white font-semibold hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-blue-500/20"
      disabled={loading || rest.disabled}
      {...rest}
    >
      {loading ? "Entrando..." : children}
    </button>
  )
}

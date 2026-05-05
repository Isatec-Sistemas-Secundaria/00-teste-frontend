import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export function Input({ label, id, ...rest }: InputProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-content-muted">
        {label}
      </label>
      <input
        id={id}
        className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-surface-primary text-content-main focus:outline-none focus:ring-2 focus:ring-accent transition-all placeholder:text-zinc-500"
        {...rest}
      />
    </div>
  )
}

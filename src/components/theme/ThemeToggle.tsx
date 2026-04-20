type Theme = 'light' | 'dark'

type ThemeToggleProps = {
  theme: Theme
  toggleTheme: () => void
}

function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-sm font-medium shadow-sm cursor-pointer"
      style={{ background: 'var(--card-bg)', color: 'var(--text-primary)' }}
    >
      <span className="text-base">{theme === 'light' ? '🌚' : '😎'}</span>
      <span>{theme === 'light' ? 'Escuro' : 'Claro'}</span>

    </button>
  )
}

export default ThemeToggle
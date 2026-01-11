import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="font-retro text-xl px-3 py-1 border-2 border-retro-dark dark:border-retro-green bg-retro-cream dark:bg-retro-dark text-retro-dark dark:text-retro-green shadow-retro-sm hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-retro transition-all"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}

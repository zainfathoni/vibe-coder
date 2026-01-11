import { Link } from 'react-router-dom'
import { useSavedIdeas } from '../hooks/useSavedIdeas'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const { savedIds } = useSavedIdeas()
  const savedCount = savedIds.length

  return (
    <header className="border-b-4 border-retro-dark dark:border-retro-green bg-retro-purple dark:bg-retro-dark">
      <div className="container mx-auto px-4 py-4 max-w-3xl flex justify-between items-center">
        <Link to="/" className="font-pixel text-sm text-white dark:text-retro-green hover:text-retro-yellow transition-colors drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          Vibe Coder
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="/saved"
            className="flex items-center gap-2 text-white dark:text-retro-green hover:text-retro-yellow transition-colors font-retro text-xl"
          >
            <span className="text-retro-pink dark:text-retro-green">♥</span>
            <span>Saved</span>
            {savedCount > 0 && (
              <span className="bg-retro-yellow text-retro-dark text-xs px-2 py-0.5 border-2 border-retro-dark shadow-retro-sm font-pixel">
                {savedCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}

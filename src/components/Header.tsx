import { Link } from 'react-router-dom'
import { useSavedIdeas } from '../hooks/useSavedIdeas'

export function Header() {
  const { savedIds } = useSavedIdeas()
  const savedCount = savedIds.length

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 max-w-3xl flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold text-gray-900 hover:text-gray-700">
          Vibe Coder
        </Link>
        <Link
          to="/saved"
          className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900"
        >
          <span>♡</span>
          <span>Saved</span>
          {savedCount > 0 && (
            <span className="bg-gray-900 text-white text-xs px-1.5 py-0.5 rounded-full">
              {savedCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}

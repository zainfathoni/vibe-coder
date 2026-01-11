import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { IdeaCard } from '../components/IdeaCard'
import { getIdeasByLevel, shuffleIdeas } from '../data/ideas'

export function IdeasPage() {
  const [searchParams] = useSearchParams()
  const level = searchParams.get('level') || 'beginner'
  const [shuffleKey, setShuffleKey] = useState(0)

  const ideas = useMemo(() => {
    const filtered = getIdeasByLevel(level)
    return shuffleKey > 0 ? shuffleIdeas(filtered) : filtered
  }, [level, shuffleKey])

  const handleRegenerate = () => {
    setShuffleKey((k) => k + 1)
  }

  const levelLabel = level.charAt(0).toUpperCase() + level.slice(1)

  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">
          ← Back
        </Link>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold text-gray-900 mb-3">
          Ideas for {levelLabel}
        </h1>
        <button
          onClick={handleRegenerate}
          className="text-sm text-gray-600 hover:text-gray-900 border border-gray-200 px-3 py-1.5 rounded-lg hover:border-gray-300 transition-colors"
        >
          🔄 Regenerate
        </button>
      </div>

      <div className="space-y-4">
        {ideas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>

      {ideas.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          No ideas found for this level.
        </p>
      )}
    </div>
  )
}

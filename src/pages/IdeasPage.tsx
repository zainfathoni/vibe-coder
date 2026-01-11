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
        <Link to="/" className="font-retro text-xl text-retro-purple hover:text-retro-pink transition-colors">
          ← Back
        </Link>
      </div>

      <div className="text-center mb-6">
        <h1 className="font-pixel text-lg text-retro-dark mb-4 drop-shadow-[2px_2px_0px_rgba(155,93,229,0.5)]">
          Ideas for {levelLabel}
        </h1>
        <button
          onClick={handleRegenerate}
          className="font-retro text-xl text-retro-dark bg-retro-yellow border-4 border-retro-dark px-4 py-2 shadow-retro hover:translate-x-1 hover:-translate-y-1 hover:shadow-retro-lg transition-all"
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
        <div className="text-center py-12 border-4 border-retro-dark bg-white shadow-retro">
          <p className="font-retro text-2xl text-retro-navy">
            No ideas found for this level.
          </p>
        </div>
      )}
    </div>
  )
}

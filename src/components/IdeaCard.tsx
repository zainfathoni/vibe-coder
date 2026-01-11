import { Link } from 'react-router-dom'
import type { Idea } from '../types'
import { useSavedIdeas } from '../hooks/useSavedIdeas'

interface IdeaCardProps {
  idea: Idea
}

export function IdeaCard({ idea }: IdeaCardProps) {
  const { toggle, isSaved } = useSavedIdeas()
  const saved = isSaved(idea.id)

  return (
    <div className="border-4 border-retro-dark bg-white p-4 shadow-retro hover:translate-x-1 hover:-translate-y-1 hover:shadow-retro-lg transition-all">
      <div className="flex justify-between items-start gap-4">
        <Link to={`/ideas/${idea.id}`} className="flex-1 min-w-0">
          <h3 className="font-pixel text-xs text-retro-dark hover:text-retro-purple transition-colors leading-relaxed">
            {idea.title}
          </h3>
        </Link>
        <button
          onClick={() => toggle(idea.id)}
          className={`text-2xl hover:scale-125 transition-transform ${
            saved ? 'text-retro-pink' : 'text-retro-dark'
          }`}
          aria-label={saved ? 'Unsave idea' : 'Save idea'}
        >
          {saved ? '♥' : '♡'}
        </button>
      </div>
      <p className="font-retro text-xl text-retro-navy mt-2 mb-4">{idea.shortDescription}</p>
      <div className="flex flex-wrap gap-2 font-retro text-lg">
        <span className="flex items-center gap-1 bg-retro-teal text-retro-dark px-2 py-0.5 border-2 border-retro-dark">
          <span>⏱</span>
          {idea.timeEstimate}
        </span>
        <span className="flex items-center gap-1 bg-retro-yellow text-retro-dark px-2 py-0.5 border-2 border-retro-dark">
          <span>📊</span>
          {idea.difficulty}
        </span>
        <span className="bg-retro-purple text-white px-2 py-0.5 border-2 border-retro-dark">
          {idea.stack.slice(0, 3).join(', ')}
        </span>
      </div>
    </div>
  )
}

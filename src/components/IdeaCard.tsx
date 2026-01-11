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
    <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
      <div className="flex justify-between items-start gap-4">
        <Link to={`/ideas/${idea.id}`} className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 hover:text-gray-700">
            {idea.title}
          </h3>
        </Link>
        <button
          onClick={() => toggle(idea.id)}
          className="text-xl hover:scale-110 transition-transform"
          aria-label={saved ? 'Unsave idea' : 'Save idea'}
        >
          {saved ? '♥' : '♡'}
        </button>
      </div>
      <p className="text-gray-600 text-sm mt-1 mb-3">{idea.shortDescription}</p>
      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <span>⏱</span>
          {idea.timeEstimate}
        </span>
        <span className="border-l border-gray-200 pl-2 flex items-center gap-1">
          <span>📊</span>
          {idea.difficulty}
        </span>
        <span className="border-l border-gray-200 pl-2">
          {idea.stack.slice(0, 3).join(', ')}
        </span>
      </div>
    </div>
  )
}

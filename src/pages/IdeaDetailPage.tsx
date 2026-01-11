import { Link, useParams, useNavigate } from 'react-router-dom'
import { getIdeaById } from '../data/ideas'
import { useSavedIdeas } from '../hooks/useSavedIdeas'

export function IdeaDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { toggle, isSaved } = useSavedIdeas()

  const idea = id ? getIdeaById(id) : undefined

  if (!idea) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">Idea not found</p>
        <Link to="/" className="text-gray-900 underline">
          Go back home
        </Link>
      </div>
    )
  }

  const saved = isSaved(idea.id)

  return (
    <div>
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          ← Back
        </button>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{idea.title}</h1>

        <p className="text-gray-700 mb-6">{idea.fullDescription}</p>

        <div className="border-t border-gray-200 pt-4 mb-6 space-y-3">
          <div className="flex gap-2">
            <span className="text-gray-500 w-32">⏱ Time Estimate</span>
            <span className="text-gray-900">{idea.timeEstimate}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 w-32">📊 Difficulty</span>
            <span className="text-gray-900 capitalize">{idea.difficulty}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500 w-32">🛠 Stack</span>
            <span className="text-gray-900">{idea.stack.join(', ')}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-6">
          <h2 className="font-semibold text-gray-900 mb-2">Features to Build</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {idea.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-6">
          <h2 className="font-semibold text-gray-900 mb-2">Learning Goals</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {idea.learningGoals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-4 flex gap-3">
          <button
            onClick={() => toggle(idea.id)}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              saved
                ? 'bg-gray-900 text-white border-gray-900'
                : 'border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
          >
            {saved ? '♥ Saved' : '♡ Save Idea'}
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-gray-400 transition-colors"
          >
            ← Back to List
          </button>
        </div>
      </div>
    </div>
  )
}

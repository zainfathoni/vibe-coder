import { Link } from 'react-router-dom'
import { IdeaCard } from '../components/IdeaCard'
import { useSavedIdeas } from '../hooks/useSavedIdeas'
import { getIdeaById } from '../data/ideas'

export function SavedPage() {
  const { savedIds } = useSavedIdeas()

  const savedIdeas = savedIds
    .map((id) => getIdeaById(id))
    .filter((idea) => idea !== undefined)

  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">
          ← Back
        </Link>
      </div>

      <h1 className="text-xl font-semibold text-gray-900 text-center mb-6">
        Saved Ideas ({savedIdeas.length})
      </h1>

      {savedIdeas.length > 0 ? (
        <div className="space-y-4">
          {savedIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No saved ideas yet</p>
          <Link
            to="/"
            className="text-gray-900 underline hover:no-underline"
          >
            Browse ideas
          </Link>
        </div>
      )}
    </div>
  )
}

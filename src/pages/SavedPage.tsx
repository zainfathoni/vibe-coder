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
        <Link to="/" className="font-retro text-xl text-retro-purple hover:text-retro-pink transition-colors">
          ← Back
        </Link>
      </div>

      <h1 className="font-pixel text-lg text-retro-dark text-center mb-6 drop-shadow-[2px_2px_0px_rgba(155,93,229,0.5)]">
        Saved Ideas
        <span className="ml-2 bg-retro-pink text-white px-2 py-0.5 border-2 border-retro-dark text-xs">
          {savedIdeas.length}
        </span>
      </h1>

      {savedIdeas.length > 0 ? (
        <div className="space-y-4">
          {savedIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border-4 border-retro-dark bg-white shadow-retro">
          <p className="font-retro text-2xl text-retro-navy mb-4">No saved ideas yet</p>
          <Link
            to="/"
            className="font-pixel text-xs text-retro-purple hover:text-retro-pink underline"
          >
            Browse ideas
          </Link>
        </div>
      )}
    </div>
  )
}

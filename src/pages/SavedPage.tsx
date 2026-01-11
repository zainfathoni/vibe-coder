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
        <Link to="/" className="font-retro text-xl text-retro-purple dark:text-retro-green hover:text-retro-pink dark:hover:text-retro-yellow transition-colors">
          ← Back
        </Link>
      </div>

      <h1 className="font-pixel text-lg text-retro-dark dark:text-retro-green text-center mb-6 drop-shadow-[2px_2px_0px_rgba(155,93,229,0.5)] dark:drop-shadow-[2px_2px_0px_rgba(112,224,0,0.5)]">
        Saved Ideas
        <span className="ml-2 bg-retro-pink dark:bg-retro-green text-white dark:text-retro-dark px-2 py-0.5 border-2 border-retro-dark dark:border-retro-green text-xs">
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
        <div className="text-center py-12 border-4 border-retro-dark dark:border-retro-green bg-white dark:bg-retro-dark shadow-retro">
          <p className="font-retro text-2xl text-retro-navy dark:text-retro-green mb-4">No saved ideas yet</p>
          <Link
            to="/"
            className="font-pixel text-xs text-retro-purple dark:text-retro-green hover:text-retro-pink dark:hover:text-retro-yellow underline"
          >
            Browse ideas
          </Link>
        </div>
      )}
    </div>
  )
}

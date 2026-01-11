import { Link, useParams, useNavigate } from 'react-router-dom'
import { getIdeaById } from '../data/ideas'
import { useSavedIdeas } from '../hooks/useSavedIdeas'
import { ShareButton } from '../components/ShareButton'

export function IdeaDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { toggle, isSaved } = useSavedIdeas()

  const idea = id ? getIdeaById(id) : undefined

  if (!idea) {
    return (
      <div className="text-center py-12 border-4 border-retro-dark bg-white shadow-retro">
        <p className="font-retro text-2xl text-retro-navy mb-4">Idea not found</p>
        <Link to="/" className="font-pixel text-xs text-retro-purple hover:text-retro-pink underline">
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
          className="font-retro text-xl text-retro-purple hover:text-retro-pink transition-colors"
        >
          ← Back
        </button>
      </div>

      <div className="border-4 border-retro-dark bg-white p-6 shadow-retro-lg">
        <h1 className="font-pixel text-lg text-retro-dark mb-4 leading-relaxed drop-shadow-[2px_2px_0px_rgba(155,93,229,0.5)]">
          {idea.title}
        </h1>

        <p className="font-retro text-2xl text-retro-navy mb-6">{idea.fullDescription}</p>

        <div className="border-t-4 border-retro-dark pt-4 mb-6 space-y-3">
          <div className="flex gap-2 items-center">
            <span className="font-retro text-xl text-retro-navy w-36">⏱ Time Estimate</span>
            <span className="font-retro text-xl bg-retro-teal text-retro-dark px-2 py-0.5 border-2 border-retro-dark">
              {idea.timeEstimate}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-retro text-xl text-retro-navy w-36">📊 Difficulty</span>
            <span className="font-retro text-xl bg-retro-yellow text-retro-dark px-2 py-0.5 border-2 border-retro-dark capitalize">
              {idea.difficulty}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-retro text-xl text-retro-navy w-36">🛠 Stack</span>
            <span className="font-retro text-xl bg-retro-purple text-white px-2 py-0.5 border-2 border-retro-dark">
              {idea.stack.join(', ')}
            </span>
          </div>
        </div>

        <div className="border-t-4 border-retro-dark pt-4 mb-6">
          <h2 className="font-pixel text-xs text-retro-dark mb-3">Features to Build</h2>
          <ul className="font-retro text-xl text-retro-navy space-y-2">
            {idea.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-retro-green">▸</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t-4 border-retro-dark pt-4 mb-6">
          <h2 className="font-pixel text-xs text-retro-dark mb-3">Learning Goals</h2>
          <ul className="font-retro text-xl text-retro-navy space-y-2">
            {idea.learningGoals.map((goal, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-retro-orange">★</span>
                {goal}
              </li>
            ))}
          </ul>
        </div>

        {idea.wireframes && idea.wireframes.length > 0 && (
          <div className="border-t-4 border-retro-dark pt-4 mb-6">
            <h2 className="font-pixel text-xs text-retro-dark mb-4">Wireframes</h2>
            <div className="space-y-6">
              {idea.wireframes.map((wireframe, i) => (
                <div key={i} className="bg-retro-navy border-4 border-retro-dark p-4 shadow-retro">
                  <h3 className="font-pixel text-xs text-retro-yellow mb-2">
                    {wireframe.name}
                  </h3>
                  <p className="font-retro text-lg text-retro-cream mb-3">
                    {wireframe.description}
                  </p>
                  <pre className="bg-retro-dark text-retro-green p-4 border-4 border-retro-green overflow-x-auto text-xs font-mono leading-tight">
                    {wireframe.ascii}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="border-t-4 border-retro-dark pt-4 flex gap-3 flex-wrap">
          <button
            onClick={() => toggle(idea.id)}
            className={`font-retro text-xl px-4 py-2 border-4 border-retro-dark shadow-retro hover:translate-x-1 hover:-translate-y-1 hover:shadow-retro-lg transition-all ${
              saved
                ? 'bg-retro-pink text-white'
                : 'bg-white text-retro-dark hover:bg-retro-cream'
            }`}
          >
            {saved ? '♥ Saved' : '♡ Save Idea'}
          </button>
          <ShareButton ideaId={idea.id} ideaTitle={idea.title} />
          <button
            onClick={() => navigate(-1)}
            className="font-retro text-xl px-4 py-2 bg-retro-purple text-white border-4 border-retro-dark shadow-retro hover:translate-x-1 hover:-translate-y-1 hover:shadow-retro-lg transition-all"
          >
            ← Back to List
          </button>
        </div>
      </div>
    </div>
  )
}

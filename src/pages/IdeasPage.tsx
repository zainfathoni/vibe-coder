import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { IdeaCard } from '../components/IdeaCard'
import {
  getIdeasByLevel,
  shuffleIdeas,
  getAllStacks,
  getAllTimeEstimates,
  filterIdeas,
} from '../data/ideas'

export function IdeasPage() {
  const [searchParams] = useSearchParams()
  const level = searchParams.get('level') || 'beginner'
  const [shuffleKey, setShuffleKey] = useState(0)
  const [search, setSearch] = useState('')
  const [stackFilter, setStackFilter] = useState('')
  const [timeFilter, setTimeFilter] = useState('')

  const allStacks = useMemo(() => getAllStacks(), [])
  const allTimeEstimates = useMemo(() => getAllTimeEstimates(), [])

  const ideas = useMemo(() => {
    let filtered = getIdeasByLevel(level)
    filtered = filterIdeas(filtered, {
      search,
      stack: stackFilter,
      timeEstimate: timeFilter,
    })
    return shuffleKey > 0 ? shuffleIdeas(filtered) : filtered
  }, [level, shuffleKey, search, stackFilter, timeFilter])

  const handleRegenerate = () => {
    setShuffleKey((k) => k + 1)
  }

  const handleClearFilters = () => {
    setSearch('')
    setStackFilter('')
    setTimeFilter('')
  }

  const hasFilters = search || stackFilter || timeFilter
  const levelLabel = level.charAt(0).toUpperCase() + level.slice(1)

  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="font-retro text-xl text-retro-purple dark:text-retro-green hover:text-retro-pink dark:hover:text-retro-yellow transition-colors">
          ← Back
        </Link>
      </div>

      <div className="text-center mb-6">
        <h1 className="font-pixel text-lg text-retro-dark dark:text-retro-green mb-4 drop-shadow-[2px_2px_0px_rgba(155,93,229,0.5)] dark:drop-shadow-[2px_2px_0px_rgba(112,224,0,0.5)]">
          Ideas for {levelLabel}
        </h1>
        <button
          onClick={handleRegenerate}
          className="font-retro text-xl text-retro-dark bg-retro-yellow dark:bg-retro-green border-4 border-retro-dark dark:border-retro-green px-4 py-2 shadow-retro hover:translate-x-1 hover:-translate-y-1 hover:shadow-retro-lg transition-all"
        >
          🔄 Regenerate
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 p-4 border-4 border-retro-dark dark:border-retro-green bg-white dark:bg-retro-dark shadow-retro">
        <div className="mb-4">
          <input
            type="text"
            placeholder="🔍 Search ideas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full font-retro text-xl px-3 py-2 border-4 border-retro-dark dark:border-retro-green bg-retro-cream dark:bg-retro-navy dark:text-retro-green focus:outline-none focus:border-retro-purple dark:focus:border-retro-yellow"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[150px]">
            <label className="font-retro text-lg text-retro-navy dark:text-retro-green block mb-1">Tech Stack</label>
            <select
              value={stackFilter}
              onChange={(e) => setStackFilter(e.target.value)}
              className="w-full font-retro text-xl px-3 py-2 border-4 border-retro-dark dark:border-retro-green bg-retro-cream dark:bg-retro-navy dark:text-retro-green focus:outline-none focus:border-retro-purple dark:focus:border-retro-yellow"
            >
              <option value="">All Stacks</option>
              {allStacks.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="font-retro text-lg text-retro-navy dark:text-retro-green block mb-1">Time Estimate</label>
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="w-full font-retro text-xl px-3 py-2 border-4 border-retro-dark dark:border-retro-green bg-retro-cream dark:bg-retro-navy dark:text-retro-green focus:outline-none focus:border-retro-purple dark:focus:border-retro-yellow"
            >
              <option value="">Any Time</option>
              {allTimeEstimates.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
        {hasFilters && (
          <button
            onClick={handleClearFilters}
            className="mt-4 font-retro text-lg text-retro-pink dark:text-retro-green hover:text-retro-purple dark:hover:text-retro-yellow transition-colors"
          >
            ✕ Clear filters
          </button>
        )}
      </div>

      <div className="space-y-4">
        {ideas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>

      {ideas.length === 0 && (
        <div className="text-center py-12 border-4 border-retro-dark dark:border-retro-green bg-white dark:bg-retro-dark shadow-retro">
          <p className="font-retro text-2xl text-retro-navy dark:text-retro-green">
            No ideas found{hasFilters ? ' matching your filters' : ' for this level'}.
          </p>
          {hasFilters && (
            <button
              onClick={handleClearFilters}
              className="mt-4 font-retro text-xl text-retro-purple dark:text-retro-green hover:text-retro-pink dark:hover:text-retro-yellow transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  )
}

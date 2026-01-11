import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { SkillLevel } from '../types'

const skillLevels: { value: SkillLevel; label: string; color: string }[] = [
  { value: 'beginner', label: 'Beginner', color: 'bg-retro-green' },
  { value: 'intermediate', label: 'Intermediate', color: 'bg-retro-yellow' },
  { value: 'advanced', label: 'Advanced', color: 'bg-retro-orange' },
]

export function HomePage() {
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | null>(null)
  const navigate = useNavigate()

  const handleGenerate = () => {
    if (selectedLevel) {
      navigate(`/ideas?level=${selectedLevel}`)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="font-pixel text-2xl text-retro-dark dark:text-retro-green mb-4 drop-shadow-[3px_3px_0px_rgba(155,93,229,0.5)] dark:drop-shadow-[3px_3px_0px_rgba(112,224,0,0.5)]">
        Vibe Coder
      </h1>
      <p className="font-retro text-2xl text-retro-navy dark:text-retro-green mb-10">
        Generate ideas for your next vibe coding session
      </p>

      <div className="w-full max-w-xs">
        <p className="font-pixel text-xs text-retro-dark dark:text-retro-green mb-4">
          What's your skill level?
        </p>
        <div className="space-y-3 mb-6">
          {skillLevels.map(({ value, label, color }) => (
            <label
              key={value}
              className={`flex items-center gap-3 p-3 border-4 border-retro-dark dark:border-retro-green cursor-pointer transition-all font-retro text-xl ${
                selectedLevel === value
                  ? `${color} shadow-retro`
                  : 'bg-white dark:bg-retro-dark hover:translate-x-1 hover:-translate-y-1 hover:shadow-retro'
              }`}
            >
              <input
                type="radio"
                name="skillLevel"
                value={value}
                checked={selectedLevel === value}
                onChange={() => setSelectedLevel(value)}
                className="w-5 h-5 accent-retro-purple dark:accent-retro-green"
              />
              <span className="text-retro-dark dark:text-retro-green">{label}</span>
            </label>
          ))}
        </div>

        <button
          onClick={handleGenerate}
          disabled={!selectedLevel}
          className="w-full py-3 px-4 bg-retro-teal dark:bg-retro-green text-retro-dark border-4 border-retro-dark dark:border-retro-green font-pixel text-xs shadow-retro hover:translate-x-1 hover:-translate-y-1 hover:shadow-retro-lg disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0 transition-all"
        >
          Generate Ideas →
        </button>
      </div>
    </div>
  )
}

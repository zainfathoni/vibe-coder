import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { SkillLevel } from '../types'

const skillLevels: { value: SkillLevel; label: string }[] = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
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
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Vibe Coder</h1>
      <p className="text-gray-600 mb-10">
        Generate ideas for your next vibe coding session
      </p>

      <div className="w-full max-w-xs">
        <p className="text-sm font-medium text-gray-700 mb-4">
          What's your skill level?
        </p>
        <div className="space-y-2 mb-6">
          {skillLevels.map(({ value, label }) => (
            <label
              key={value}
              className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                selectedLevel === value
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="skillLevel"
                value={value}
                checked={selectedLevel === value}
                onChange={() => setSelectedLevel(value)}
                className="w-4 h-4 text-gray-900"
              />
              <span className="text-gray-900">{label}</span>
            </label>
          ))}
        </div>

        <button
          onClick={handleGenerate}
          disabled={!selectedLevel}
          className="w-full py-3 px-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Generate Ideas →
        </button>
      </div>
    </div>
  )
}

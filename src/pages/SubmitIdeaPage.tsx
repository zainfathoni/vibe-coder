import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { SkillLevel } from '../types'

const GITHUB_REPO = 'zainfathoni/vibe-coder'

const skillLevels: SkillLevel[] = ['beginner', 'intermediate', 'advanced']

const techStacks = [
  'HTML/CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Svelte',
  'Next.js',
  'Node.js',
  'Python',
  'Go',
  'Rust',
  'Other',
]

const timeEstimates = [
  '30 minutes',
  '1-2 hours',
  '2-4 hours',
  '4-8 hours',
  '1-2 days',
]

interface FormData {
  title: string
  shortDescription: string
  fullDescription: string
  difficulty: SkillLevel
  timeEstimate: string
  stack: string[]
  features: string
  learningGoals: string
}

function generateGitHubIssueUrl(data: FormData): string {
  const body = `## Project Idea Submission

### Title
${data.title}

### Short Description
${data.shortDescription}

### Full Description
${data.fullDescription}

### Details
- **Difficulty:** ${data.difficulty}
- **Time Estimate:** ${data.timeEstimate}
- **Tech Stack:** ${data.stack.join(', ')}

### Features to Build
${data.features.split('\n').map(f => `- ${f.trim()}`).filter(f => f !== '- ').join('\n')}

### Learning Goals
${data.learningGoals.split('\n').map(g => `- ${g.trim()}`).filter(g => g !== '- ').join('\n')}

---
*Submitted via Vibe Coder*`

  const params = new URLSearchParams({
    title: `[Idea] ${data.title}`,
    body,
    labels: 'community-idea',
  })

  return `https://github.com/${GITHUB_REPO}/issues/new?${params.toString()}`
}

export function SubmitIdeaPage() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    shortDescription: '',
    fullDescription: '',
    difficulty: 'beginner',
    timeEstimate: '1-2 hours',
    stack: [],
    features: '',
    learningGoals: '',
  })

  const handleStackToggle = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      stack: prev.stack.includes(tech)
        ? prev.stack.filter(t => t !== tech)
        : [...prev.stack, tech],
    }))
  }

  const isValid = formData.title.trim() && formData.shortDescription.trim() && formData.stack.length > 0

  const handleSubmit = () => {
    if (!isValid) return
    const url = generateGitHubIssueUrl(formData)
    window.open(url, '_blank')
  }

  return (
    <div>
      <div className="mb-6">
        <Link
          to="/"
          className="font-retro text-xl text-retro-purple dark:text-retro-green hover:text-retro-pink dark:hover:text-retro-yellow transition-colors"
        >
          ← Back
        </Link>
      </div>

      <div className="text-center mb-6">
        <h1 className="font-pixel text-lg text-retro-dark dark:text-retro-green mb-2 drop-shadow-[2px_2px_0px_rgba(155,93,229,0.5)] dark:drop-shadow-[2px_2px_0px_rgba(112,224,0,0.5)]">
          Submit an Idea
        </h1>
        <p className="font-retro text-xl text-retro-navy dark:text-retro-green/80">
          Share your project idea with the community
        </p>
      </div>

      <div className="border-4 border-retro-dark dark:border-retro-green bg-white dark:bg-retro-dark p-6 shadow-retro space-y-6">
        {/* Title */}
        <div>
          <label className="font-pixel text-xs text-retro-dark dark:text-retro-green block mb-2">
            Project Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="e.g., Retro Snake Game"
            className="w-full font-retro text-xl px-3 py-2 border-4 border-retro-dark dark:border-retro-green bg-retro-cream dark:bg-retro-navy dark:text-retro-green focus:outline-none focus:border-retro-purple dark:focus:border-retro-yellow"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="font-pixel text-xs text-retro-dark dark:text-retro-green block mb-2">
            Short Description *
          </label>
          <input
            type="text"
            value={formData.shortDescription}
            onChange={e => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
            placeholder="One-liner about the project"
            maxLength={100}
            className="w-full font-retro text-xl px-3 py-2 border-4 border-retro-dark dark:border-retro-green bg-retro-cream dark:bg-retro-navy dark:text-retro-green focus:outline-none focus:border-retro-purple dark:focus:border-retro-yellow"
          />
        </div>

        {/* Full Description */}
        <div>
          <label className="font-pixel text-xs text-retro-dark dark:text-retro-green block mb-2">
            Full Description
          </label>
          <textarea
            value={formData.fullDescription}
            onChange={e => setFormData(prev => ({ ...prev, fullDescription: e.target.value }))}
            placeholder="Describe the project in more detail..."
            rows={3}
            className="w-full font-retro text-xl px-3 py-2 border-4 border-retro-dark dark:border-retro-green bg-retro-cream dark:bg-retro-navy dark:text-retro-green focus:outline-none focus:border-retro-purple dark:focus:border-retro-yellow resize-none"
          />
        </div>

        {/* Difficulty */}
        <div>
          <label className="font-pixel text-xs text-retro-dark dark:text-retro-green block mb-2">
            Difficulty
          </label>
          <div className="flex gap-2 flex-wrap">
            {skillLevels.map(level => (
              <button
                key={level}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, difficulty: level }))}
                className={`font-retro text-xl px-3 py-1 border-4 border-retro-dark dark:border-retro-green capitalize transition-all ${
                  formData.difficulty === level
                    ? 'bg-retro-yellow dark:bg-retro-green text-retro-dark shadow-retro'
                    : 'bg-white dark:bg-retro-dark text-retro-dark dark:text-retro-green hover:bg-retro-cream dark:hover:bg-retro-navy'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Time Estimate */}
        <div>
          <label className="font-pixel text-xs text-retro-dark dark:text-retro-green block mb-2">
            Time Estimate
          </label>
          <select
            value={formData.timeEstimate}
            onChange={e => setFormData(prev => ({ ...prev, timeEstimate: e.target.value }))}
            className="w-full font-retro text-xl px-3 py-2 border-4 border-retro-dark dark:border-retro-green bg-retro-cream dark:bg-retro-navy dark:text-retro-green focus:outline-none focus:border-retro-purple dark:focus:border-retro-yellow"
          >
            {timeEstimates.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Tech Stack */}
        <div>
          <label className="font-pixel text-xs text-retro-dark dark:text-retro-green block mb-2">
            Tech Stack * (select at least one)
          </label>
          <div className="flex gap-2 flex-wrap">
            {techStacks.map(tech => (
              <button
                key={tech}
                type="button"
                onClick={() => handleStackToggle(tech)}
                className={`font-retro text-lg px-2 py-1 border-2 border-retro-dark dark:border-retro-green transition-all ${
                  formData.stack.includes(tech)
                    ? 'bg-retro-purple dark:bg-retro-green text-white dark:text-retro-dark'
                    : 'bg-white dark:bg-retro-dark text-retro-dark dark:text-retro-green hover:bg-retro-cream dark:hover:bg-retro-navy'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <label className="font-pixel text-xs text-retro-dark dark:text-retro-green block mb-2">
            Features to Build (one per line)
          </label>
          <textarea
            value={formData.features}
            onChange={e => setFormData(prev => ({ ...prev, features: e.target.value }))}
            placeholder="User can create an account&#10;Real-time sync between devices&#10;Dark mode support"
            rows={4}
            className="w-full font-retro text-xl px-3 py-2 border-4 border-retro-dark dark:border-retro-green bg-retro-cream dark:bg-retro-navy dark:text-retro-green focus:outline-none focus:border-retro-purple dark:focus:border-retro-yellow resize-none"
          />
        </div>

        {/* Learning Goals */}
        <div>
          <label className="font-pixel text-xs text-retro-dark dark:text-retro-green block mb-2">
            Learning Goals (one per line)
          </label>
          <textarea
            value={formData.learningGoals}
            onChange={e => setFormData(prev => ({ ...prev, learningGoals: e.target.value }))}
            placeholder="Understanding React state management&#10;Working with REST APIs&#10;Implementing authentication"
            rows={4}
            className="w-full font-retro text-xl px-3 py-2 border-4 border-retro-dark dark:border-retro-green bg-retro-cream dark:bg-retro-navy dark:text-retro-green focus:outline-none focus:border-retro-purple dark:focus:border-retro-yellow resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="border-t-4 border-retro-dark dark:border-retro-green pt-6">
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className="w-full font-pixel text-xs py-3 px-4 bg-retro-teal dark:bg-retro-green text-retro-dark border-4 border-retro-dark dark:border-retro-green shadow-retro hover:translate-x-1 hover:-translate-y-1 hover:shadow-retro-lg disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0 transition-all"
          >
            Submit via GitHub →
          </button>
          <p className="font-retro text-lg text-retro-navy dark:text-retro-green/70 mt-3 text-center">
            This will open a new GitHub issue with your idea pre-filled
          </p>
        </div>
      </div>

      {/* Community Ideas Link */}
      <div className="mt-6 text-center">
        <a
          href={`https://github.com/${GITHUB_REPO}/issues?q=is%3Aissue+label%3Acommunity-idea`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-retro text-xl text-retro-purple dark:text-retro-green hover:text-retro-pink dark:hover:text-retro-yellow transition-colors"
        >
          📂 View Community Ideas on GitHub →
        </a>
      </div>
    </div>
  )
}

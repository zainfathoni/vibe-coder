export type SkillLevel = 'beginner' | 'intermediate' | 'advanced'

export interface Idea {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  timeEstimate: string
  difficulty: SkillLevel
  stack: string[]
  features: string[]
  learningGoals: string[]
}

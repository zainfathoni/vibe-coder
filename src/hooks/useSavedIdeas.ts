import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'vibe-coder-saved-ideas'

function getSavedIds(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function useSavedIdeas() {
  const [savedIds, setSavedIds] = useState<string[]>(getSavedIds)

  useEffect(() => {
    const handleStorage = () => setSavedIds(getSavedIds())
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const save = useCallback((id: string) => {
    setSavedIds((prev) => {
      if (prev.includes(id)) return prev
      const next = [...prev, id]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const unsave = useCallback((id: string) => {
    setSavedIds((prev) => {
      const next = prev.filter((i) => i !== id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const toggle = useCallback((id: string) => {
    if (savedIds.includes(id)) {
      unsave(id)
    } else {
      save(id)
    }
  }, [savedIds, save, unsave])

  const isSaved = useCallback((id: string) => savedIds.includes(id), [savedIds])

  return { savedIds, save, unsave, toggle, isSaved }
}

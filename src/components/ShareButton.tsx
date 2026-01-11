import { useState } from 'react'

interface ShareButtonProps {
  ideaId: string
  ideaTitle: string
}

export function ShareButton({ ideaId, ideaTitle }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const shareUrl = `${window.location.origin}/ideas/${ideaId}`
  const shareText = `Check out this project idea: ${ideaTitle}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = shareUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    window.open(url, '_blank', 'width=550,height=420')
  }

  const handleLinkedInShare = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    window.open(url, '_blank', 'width=550,height=420')
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="font-retro text-xl px-4 py-2 bg-retro-teal dark:bg-retro-green text-retro-dark border-4 border-retro-dark dark:border-retro-green shadow-retro hover:translate-x-1 hover:-translate-y-1 hover:shadow-retro-lg transition-all"
      >
        📤 Share
      </button>

      {showMenu && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute left-0 top-full mt-2 z-20 bg-white dark:bg-retro-dark border-4 border-retro-dark dark:border-retro-green shadow-retro-lg p-2 min-w-[200px]">
            <button
              onClick={() => {
                handleCopy()
                setShowMenu(false)
              }}
              className="w-full text-left font-retro text-xl px-3 py-2 text-retro-dark dark:text-retro-green hover:bg-retro-cream dark:hover:bg-retro-navy transition-colors flex items-center gap-2"
            >
              {copied ? '✓ Copied!' : '📋 Copy Link'}
            </button>
            <button
              onClick={() => {
                handleTwitterShare()
                setShowMenu(false)
              }}
              className="w-full text-left font-retro text-xl px-3 py-2 text-retro-dark dark:text-retro-green hover:bg-retro-cream dark:hover:bg-retro-navy transition-colors flex items-center gap-2"
            >
              𝕏 Share on X
            </button>
            <button
              onClick={() => {
                handleLinkedInShare()
                setShowMenu(false)
              }}
              className="w-full text-left font-retro text-xl px-3 py-2 text-retro-dark dark:text-retro-green hover:bg-retro-cream dark:hover:bg-retro-navy transition-colors flex items-center gap-2"
            >
              💼 LinkedIn
            </button>
          </div>
        </>
      )}
    </div>
  )
}

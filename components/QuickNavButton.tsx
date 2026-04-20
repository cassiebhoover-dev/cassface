'use client'

export default function QuickNavButton() {
  return (
    <button
      className="caas-btn caas-btn--primary"
      onClick={() => document.dispatchEvent(new CustomEvent('caas:open-cmd'))}
      aria-label="Open command palette"
    >
      ⌘ Quick nav
    </button>
  )
}

'use client'

export default function AskMeButton() {
  return (
    <button
      className="caas-btn caas-btn--ai"
      onClick={() => document.dispatchEvent(new CustomEvent('caas:open-askme'))}
    >
      ✦ Ask me anything
    </button>
  )
}

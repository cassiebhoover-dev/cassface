'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTED_QUESTIONS = [
  'What kind of problems do you love solving?',
  "What's your experience leading a team?",
  'What are you looking for in your next role?',
  'Tell me about your work at nCino.',
]

export default function AskMe({ embedded = false }: { embedded?: boolean }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    const assistantMessage: Message = { role: 'assistant', content: '' }
    setMessages([...updatedMessages, assistantMessage])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      if (!res.ok) throw new Error(`Server error: ${res.status}`)
      if (!res.body) throw new Error('No response body')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        setMessages([
          ...updatedMessages,
          { role: 'assistant', content: accumulated },
        ])
      }
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: 'assistant',
          content: "Sorry, something went wrong. Feel free to reach out directly at cassiebhoover@gmail.com.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  const content = (
    <div className="bg-white border border-stone-200 rounded-4xl p-6 shadow-lg relative overflow-hidden">
      {/* Decorative arch */}
      <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-periwinkle/15" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-bubblegum/10" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-robbins/50 ring-offset-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Cassie-Hoover-headshot.jpeg" alt="Cassie" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-sans text-sm font-semibold text-foreground">Ask me anything</p>
            <p className="font-sans text-xs text-muted">Powered by AI · answers as Cassie</p>
          </div>
        </div>

        {/* Suggested questions */}
        {messages.length === 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => {
                  setIsOpen(true)
                  sendMessage(q)
                }}
                className="text-xs font-sans text-dusk bg-robbins/20 px-3 py-1.5 rounded-full hover:bg-robbins/40 transition-colors duration-200"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Chat window */}
        {(messages.length > 0 || isOpen) && (
          <div className="space-y-3 max-h-64 overflow-y-auto mb-4 pr-1">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-accent shrink-0 mt-0.5 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/Cassie-Hoover-headshot.jpeg" alt="Cassie" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-3xl px-4 py-2.5 text-sm font-sans leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-dusk text-white rounded-br-lg'
                    : 'bg-stone-100 text-foreground rounded-bl-lg'
                }`}>
                  {msg.content}
                  {msg.role === 'assistant' && msg.content === '' && isLoading && (
                    <span className="inline-flex gap-1 items-center h-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:300ms]" />
                    </span>
                  )}
                </div>
                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-periwinkle/40 shrink-0 mt-0.5 flex items-center justify-center">
                    <svg className="w-3 h-3 text-dusk" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
        )}

        {/* Input */}
        <div className="relative flex items-center border border-stone-200 rounded-full overflow-hidden bg-stone-50 focus-within:border-dusk/40 transition-colors duration-200">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              if (!isOpen) setIsOpen(true)
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            placeholder="Ask about my work or experience..."
            className="flex-1 px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted bg-transparent outline-none"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isLoading}
            className="mr-1.5 w-8 h-8 rounded-full bg-sunset flex items-center justify-center disabled:opacity-30 hover:bg-dusk transition-colors duration-200 shrink-0"
          >
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )

  if (embedded) return content

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        {content}
      </div>
    </section>
  )
}

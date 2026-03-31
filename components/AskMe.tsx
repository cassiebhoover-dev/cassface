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

export default function AskMe() {
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

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">

          {/* Header */}
          <p className="text-xs font-sans text-accent tracking-widest uppercase mb-4">AI Assistant</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 leading-tight">
            Ask me anything
          </h2>
          <p className="font-sans text-base text-muted mb-10 leading-relaxed">
            Curious about my work, process, or experience? Ask a question below — I'll answer as myself.
          </p>

          {/* Suggested questions */}
          {messages.length === 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setIsOpen(true)
                    sendMessage(q)
                  }}
                  className="text-sm font-sans text-muted border border-stone-300 px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-all duration-200"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Chat window */}
          {(messages.length > 0 || isOpen) && (
            <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden mb-4 text-left shadow-sm">
              <div className="p-6 space-y-5 max-h-80 overflow-y-auto">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'assistant' && (
                      <div className="w-7 h-7 rounded-full bg-accent shrink-0 mt-0.5 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/Cassie-Hoover-headshot.jpeg" alt="Cassie" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className={`max-w-xs md:max-w-sm rounded-2xl px-4 py-3 text-sm font-sans leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-foreground text-background rounded-br-sm'
                        : 'bg-stone-100 text-foreground rounded-bl-sm'
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
                      <div className="w-7 h-7 rounded-full bg-stone-200 shrink-0 mt-0.5 flex items-center justify-center">
                        <svg className="w-4 h-4 text-muted" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
            </div>
          )}

          {/* Input */}
          <div className="relative flex items-center border border-stone-300 rounded-full overflow-hidden bg-white focus-within:border-accent transition-colors duration-200 shadow-sm">
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
              placeholder="Ask me about my work, process, or experience…"
              className="flex-1 px-5 py-3.5 text-sm font-sans text-foreground placeholder:text-muted bg-transparent outline-none"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isLoading}
              className="mr-2 w-8 h-8 rounded-full bg-foreground flex items-center justify-center disabled:opacity-30 hover:bg-accent transition-colors duration-200 shrink-0"
            >
              <svg className="w-3.5 h-3.5 text-background" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="text-xs font-sans text-muted mt-3 opacity-60">
            Powered by Claude · Responses represent Cassie's actual experience
          </p>

        </div>
      </div>
    </section>
  )
}

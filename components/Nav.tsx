'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
        scrolled ? 'border-b border-stone-200' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-medium tracking-widest uppercase text-foreground hover:text-accent transition-colors duration-200"
        >
          Cassie Hoover
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#about"
            className="text-sm text-muted hover:text-foreground transition-colors duration-200 hidden sm:block"
          >
            About
          </a>
          <a
            href="#work"
            className="text-sm text-muted hover:text-foreground transition-colors duration-200 hidden sm:block"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-sm text-muted hover:text-foreground transition-colors duration-200 hidden sm:block"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="text-sm border border-foreground px-4 py-1.5 rounded-full hover:bg-foreground hover:text-background transition-all duration-200 sm:hidden"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

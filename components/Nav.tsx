'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-stone-200/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-widest uppercase text-foreground hover:text-sunset transition-colors duration-200"
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
          <Link
            href="/resume"
            className="text-sm font-medium border-2 border-dusk text-dusk px-5 py-2 rounded-full hover:bg-dusk hover:text-white transition-all duration-200"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  )
}

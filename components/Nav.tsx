'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = pathname === '/'
  const isAbout = pathname === '/about'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xs font-sans tracking-[0.25em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-200"
        >
          Cassie Hoover
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-xs font-sans tracking-[0.15em] uppercase transition-colors duration-200 ${
              isHome ? 'text-foreground underline underline-offset-4 decoration-accent' : 'text-foreground/50 hover:text-foreground'
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className={`text-xs font-sans tracking-[0.15em] uppercase transition-colors duration-200 ${
              isAbout ? 'text-foreground underline underline-offset-4 decoration-accent' : 'text-foreground/50 hover:text-foreground'
            }`}
          >
            About
          </Link>
          <Link
            href="/resume"
            className="text-xs font-sans tracking-[0.15em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-200"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  )
}

'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import AskMe from './AskMe'

interface NavResult {
  icon: string
  label: string
  href: string
  desc?: string
  download?: boolean
  section: 'pages' | 'actions'
  searchTerms: string
}

const NAV_RESULTS: NavResult[] = [
  { icon: '◈', label: 'Overview',     href: '/',        desc: 'Home',         section: 'pages',   searchTerms: 'overview home' },
  { icon: '◻', label: 'Case Studies', href: '/work',    desc: '5 projects',   section: 'pages',   searchTerms: 'case studies work projects' },
  { icon: '↻', label: 'Changelog',    href: '/resume',  desc: 'aka résumé',   section: 'pages',   searchTerms: 'changelog resume work history' },
  { icon: '◯', label: 'About',        href: '/about',   section: 'pages',     searchTerms: 'about ask me' },
  { icon: '↓', label: 'Download resume', href: '/cassie-resume.pdf', desc: '.pdf', section: 'actions', searchTerms: 'download resume pdf', download: true },
]

interface CaasShellProps {
  children: React.ReactNode
  urlText?: string
}

export default function CaasShell({ children, urlText = 'cassie.design' }: CaasShellProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [askMeOpen, setAskMeOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIdx, setSelectedIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredResults = NAV_RESULTS.filter(r => {
    if (!query.trim()) return true
    return r.searchTerms.includes(query.toLowerCase().trim()) ||
           r.label.toLowerCase().includes(query.toLowerCase().trim())
  })

  const openPalette = useCallback(() => {
    setIsOpen(true)
    setQuery('')
    setSelectedIdx(0)
  }, [])

  const closePalette = useCallback(() => {
    setIsOpen(false)
    setQuery('')
  }, [])

  // Focus input when palette opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIdx(0)
  }, [query])

  // Global ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        isOpen ? closePalette() : openPalette()
      }
      if (e.key === 'Escape' && isOpen) {
        closePalette()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, openPalette, closePalette])

  // Listen for custom event from page buttons
  useEffect(() => {
    const handler = () => openPalette()
    document.addEventListener('caas:open-cmd', handler)
    return () => document.removeEventListener('caas:open-cmd', handler)
  }, [openPalette])

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  // Listen for Ask Me panel open event
  useEffect(() => {
    const handler = () => setAskMeOpen(true)
    document.addEventListener('caas:open-askme', handler)
    return () => document.removeEventListener('caas:open-askme', handler)
  }, [])

  // Close Ask Me panel on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && askMeOpen) setAskMeOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [askMeOpen])

  const handleKeydown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIdx(i => (i + 1) % filteredResults.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIdx(i => (i - 1 + filteredResults.length) % filteredResults.length)
    } else if (e.key === 'Enter' && filteredResults[selectedIdx]) {
      const result = filteredResults[selectedIdx]
      closePalette()
      if (result.download) {
        const a = document.createElement('a')
        a.href = result.href
        a.download = ''
        a.click()
      } else {
        router.push(result.href)
      }
    } else if (e.key === 'Escape') {
      closePalette()
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleResultClick = (_result: NavResult) => {
    closePalette()
  }

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <div className="app-shell">

      {/* ── TITLEBAR ─────────────────────────────── */}
      <header className="titlebar">
        <div className="titlebar__dots">
          <div className="dot dot--red" />
          <div className="dot dot--yellow" />
          <div className="dot dot--green" />
        </div>
        <button
          className="titlebar__hamburger"
          onClick={() => setSidebarOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
        <div className="titlebar__url">{urlText}</div>
        <div className="titlebar__hint">
          <span className="kbd">⌘</span>
          <span className="kbd">K</span>
          <span style={{ fontSize: 11, marginLeft: 2 }}>to navigate</span>
        </div>
      </header>

      {/* ── APP BODY ────────────────────────────── */}
      <div className="app-body">

        {/* ── SIDEBAR BACKDROP (mobile) ─────────── */}
        {sidebarOpen && (
          <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
        )}

        {/* ── SIDEBAR ──────────────────────────── */}
        <nav className={`sidebar${sidebarOpen ? ' is-open' : ''}`}>
          <div className="sidebar__logo">
            <div className="logo-mark">CaaS</div>
            <div className="logo-sub">Cassie as a Service™</div>
          </div>

          <span className="nav-label">Product</span>
          <Link href="/" className={`nav-item${isActive('/') && pathname === '/' ? ' is-active' : ''}`}>
            <span className="nav-item__icon">◈</span> Overview
          </Link>
          <Link href="/work" className={`nav-item${isActive('/work') ? ' is-active' : ''}`}>
            <span className="nav-item__icon">◻</span> Case Studies
            <span className="nav-badge">5</span>
          </Link>

          <span className="nav-label" style={{ marginTop: 8 }}>Company</span>
          <Link href="/resume" className={`nav-item${isActive('/resume') ? ' is-active' : ''}`}>
            <span className="nav-item__icon">↻</span> Changelog
          </Link>
          <Link href="/about" className={`nav-item${isActive('/about') ? ' is-active' : ''}`}>
            <span className="nav-item__icon">◯</span> About
          </Link>

          <div className="sidebar__user">
            <div className="avatar">CH</div>
            <div className="avatar-info">
              <div className="avatar-info__name">Cassie H.</div>
              <div className="avatar-info__role">Product Design Manager</div>
            </div>
            <div className="status-dot" />
          </div>
        </nav>

        {/* ── MAIN CONTENT ─────────────────────── */}
        <main className="caas-main">
          {children}
        </main>

      </div>{/* /.app-body */}

      {/* ── ASK ME PANEL ─────────────────────────── */}
      <div
        className={`ai-panel-overlay${askMeOpen ? ' is-open' : ''}`}
        aria-hidden={!askMeOpen}
        onClick={() => setAskMeOpen(false)}
      >
        <div className="ai-panel" onClick={e => e.stopPropagation()}>
          <div className="ai-panel__header">
            <span className="ai-panel__title">✦ ASK ME ANYTHING</span>
            <button
              className="ai-panel__close"
              onClick={() => setAskMeOpen(false)}
              aria-label="Close panel"
            >
              ✕
            </button>
          </div>
          <div className="ai-panel__content">
            <AskMe embedded />
          </div>
        </div>
      </div>

      {/* ── COMMAND PALETTE ──────────────────────── */}
      <div
        className={`cmd-overlay${isOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={() => closePalette()}
      >
        <div className="cmd-palette" onClick={e => e.stopPropagation()}>
          <div className="cmd-palette__input-row">
            <span className="cmd-palette__icon">⌘</span>
            <input
              ref={inputRef}
              className="cmd-palette__input"
              type="text"
              placeholder="Search Cassie's portfolio..."
              autoComplete="off"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKeydown}
            />
          </div>

          <div className="cmd-palette__results">
            {/* Pages section */}
            {filteredResults.some(r => r.section === 'pages') && (
              <>
                <div className="cmd-section-label">Pages</div>
                {filteredResults
                  .filter(r => r.section === 'pages')
                  .map((result, i) => {
                    const globalIdx = filteredResults.indexOf(result)
                    return (
                      <Link
                        key={result.href}
                        href={result.href}
                        className={`cmd-result${globalIdx === selectedIdx ? ' is-selected' : ''}`}
                        onClick={() => handleResultClick(result)}
                      >
                        <span className="cmd-result__icon">{result.icon}</span>
                        {result.label}
                        {result.desc && (
                          <span className="cmd-result__desc">{result.desc}</span>
                        )}
                      </Link>
                    )
                  })}
              </>
            )}

            {/* Actions section */}
            {filteredResults.some(r => r.section === 'actions') && (
              <>
                <div className="cmd-section-label" style={{ marginTop: 6 }}>Actions</div>
                {filteredResults
                  .filter(r => r.section === 'actions')
                  .map(result => {
                    const globalIdx = filteredResults.indexOf(result)
                    return (
                      <a
                        key={result.href}
                        href={result.href}
                        className={`cmd-result${globalIdx === selectedIdx ? ' is-selected' : ''}`}
                        download={result.download}
                        onClick={() => handleResultClick(result)}
                      >
                        <span className="cmd-result__icon">{result.icon}</span>
                        {result.label}
                        {result.desc && (
                          <span className="cmd-result__desc">{result.desc}</span>
                        )}
                      </a>
                    )
                  })}
              </>
            )}
          </div>

          <div className="cmd-palette__footer">
            <div className="cmd-hint"><span className="kbd">↵</span> open</div>
            <div className="cmd-hint"><span className="kbd">↑↓</span> navigate</div>
            <div className="cmd-hint"><span className="kbd">esc</span> close</div>
          </div>
        </div>
      </div>

    </div>
  )
}

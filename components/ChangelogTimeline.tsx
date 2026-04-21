'use client'

import { useState } from 'react'

type FilterType = 'all' | 'feat' | 'perf' | 'sys'

interface NoteItem {
  type: 'feat' | 'fix' | 'perf' | 'sys' | 'award' | 'edu'
  text: string
}

interface Release {
  version: string
  isCurrent?: boolean
  isLegacy?: boolean
  title: string
  badge: string
  badgeClass: string
  date: string
  isLatest?: boolean
  notes: NoteItem[]
  noPaddingBottom?: boolean
}

const RELEASES: Release[] = [
  {
    version: 'v4.0.0',
    isCurrent: true,
    isLatest: true,
    title: 'Manager, Product Design',
    badge: 'Drata',
    badgeClass: 'badge-drata',
    date: 'Sep 2025 – present',
    notes: [
      { type: 'feat', text: 'Cross-functional design team leadership across multiple product pillars with full roadmap visibility' },
      { type: 'feat', text: 'Player-coach model: active IC contribution alongside people management and direct report mentorship' },
      { type: 'sys',  text: 'Architected AI-powered DesignOps workflow in Claude: automates 1:1 prep, OKR tracking, and weekly Slack coaching digests' },
      { type: 'sys',  text: 'Mapped team growth to structured design competency framework for transparent, data-informed career pathing' },
      { type: 'feat', text: 'Championing shift from static Figma deliverables to high-fidelity interactive prototypes built with AI tooling' },
    ],
  },
  {
    version: 'v3.1.0',
    title: 'Senior Product Designer II',
    badge: 'Drata',
    badgeClass: 'badge-drata',
    date: '2023 – 2025',
    notes: [
      { type: 'sys',   text: 'Led Design Operations improvements using the Double Diamond framework' },
      { type: 'feat',  text: 'Shipped company Design Principles via cross-functional stakeholder workshops' },
      { type: 'feat',  text: 'Led Monitoring & Remediation redesign informed by 20+ customer interviews' },
      { type: 'award', text: 'Peer-voted "Best UX" two consecutive years' },
    ],
  },
  {
    version: 'v3.0.0',
    title: 'Principal Product Designer',
    badge: 'nCino',
    badgeClass: 'badge-ncino',
    date: '2020 – 2023',
    notes: [
      { type: 'feat', text: 'Led design across 5 scrum teams for 30,000+ financial professionals' },
      { type: 'perf', text: '+25% feature adoption through targeted workflow improvements' },
      { type: 'sys',  text: 'Built 20+ reusable components scaled across the design system' },
      { type: 'feat', text: '50+ user interviews and usability tests driving product direction' },
    ],
  },
  {
    version: 'v2.0.0',
    title: 'Senior Product Designer',
    badge: 'Events.com',
    badgeClass: 'badge-events',
    date: '2014 – 2020',
    notes: [
      { type: 'perf', text: 'Designed product features supporting revenue growth $0 → $100M' },
      { type: 'fix',  text: 'Reduced design debt by 30% via consolidated brand standards system' },
      { type: 'feat', text: 'Led design for mobile and white-labeled app experiences' },
      { type: 'feat', text: '100+ customer usability studies driving data-informed decisions' },
    ],
  },
  {
    version: 'v1.1.0',
    title: 'UX Designer',
    badge: 'SaveOnResorts',
    badgeClass: 'badge-sor',
    date: '2013 – 2014',
    notes: [
      { type: 'perf', text: 'Designed systems serving 70,000 members within 6 months of launch' },
      { type: 'sys',  text: 'Created style guides for 6 company brands' },
      { type: 'feat', text: 'Built functional wireframes in HTML and CSS' },
    ],
  },
  {
    version: 'v1.0.0',
    title: 'Interaction Designer',
    badge: 'Treeline Interactive',
    badgeClass: 'badge-treeline',
    date: '2011 – 2013',
    notes: [
      { type: 'feat', text: 'Designed iOS and Android apps for 6 ski resort clients' },
      { type: 'feat', text: 'Managed 4 client accounts end-to-end' },
    ],
  },
  {
    version: 'v0.1.0',
    isLegacy: true,
    title: 'Initial build',
    badge: 'West Virginia University',
    badgeClass: 'badge-wvu',
    date: '2010',
    noPaddingBottom: true,
    notes: [
      { type: 'edu', text: 'BFA, Magna Cum Laude. First stable release of Cassie shipped to production.' },
    ],
  },
]

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'All releases', value: 'all' },
  { label: 'feat',         value: 'feat' },
  { label: 'perf',         value: 'perf' },
  { label: 'sys',          value: 'sys' },
]

export default function ChangelogTimeline() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const isNoteVisible = (note: NoteItem) => {
    if (activeFilter === 'all') return true
    return note.type === activeFilter
  }

  return (
    <>
      {/* Filter row */}
      <div className="filter-row">
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={`filter-btn${activeFilter === f.value ? ' is-active' : ''}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="timeline">
        {RELEASES.map((release, i) => {
          const isLast = i === RELEASES.length - 1
          const visibleNotes = release.notes.filter(isNoteVisible)

          return (
            <div key={release.version} className="release-block">
              {/* Timeline column */}
              <div className="timeline-col">
                <div className={`timeline-dot${release.isCurrent ? ' is-current' : ''}`} />
                {!isLast && <div className="timeline-line" />}
              </div>

              {/* Release content */}
              <div
                className="release-content"
                style={release.noPaddingBottom ? { paddingBottom: 0 } : undefined}
              >
                <div className="release-header">
                  <span className={`version-tag${release.isLegacy ? ' is-legacy' : ''}`}>
                    {release.version}
                  </span>
                  {release.isLatest && <span className="latest-pill">latest</span>}
                  <span className="release-title">{release.title}</span>
                  <span className={`company-badge ${release.badgeClass}`}>{release.badge}</span>
                  <span className="release-date">{release.date}</span>
                </div>

                <div className="release-notes">
                  {visibleNotes.map((note, j) => (
                    <div key={j} className="note-item">
                      <span className={`note-type type-${note.type}`}>{note.type}</span>
                      {note.text}
                    </div>
                  ))}
                  {visibleNotes.length === 0 && (
                    <div className="note-item" style={{ color: 'var(--color-text-tertiary)', fontStyle: 'italic' }}>
                      No {activeFilter} notes for this release.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

import CaasShell from '@/components/CaasShell'
import Link from 'next/link'
import AskMeButton from '@/components/AskMeButton'

export const metadata = {
  title: 'Case Studies — Cassie Hoover',
  description: 'Case studies and project write-ups from 14+ years of product design work.',
}

const PROJECTS = [
  {
    slug: 'monitoring-2-0',
    icon: '◈',
    color: 'project-icon--blue',
    name: 'Monitoring 2.0',
    meta: 'Drata · Data Observability · 2024',
    year: '2024',
  },
  {
    slug: 'custom-fields-and-formulas',
    icon: '◻',
    color: 'project-icon--green',
    name: 'Custom Fields & Formulas',
    meta: 'Drata · Risk Management · 2024',
    year: '2024',
  },
  {
    slug: 'cowork-people-management',
    icon: '◇',
    color: 'project-icon--amber',
    name: 'Automating People Management',
    meta: 'Claude Cowork · AI · 2025',
    year: '2025',
  },
  {
    slug: 'automated-reviews',
    icon: '◈',
    color: 'project-icon--blue',
    name: 'Automated Reviews',
    meta: 'nCino · FinTech SaaS',
    year: '2022',
  },
  {
    slug: 'draw-schedules',
    icon: '◻',
    color: 'project-icon--green',
    name: 'Draw Schedules',
    meta: 'nCino · FinTech SaaS',
    year: '2021',
  },
]

export default function WorkPage() {
  return (
    <CaasShell urlText="cassie.design — Case Studies">

      <div className="page-header">
        <div>
          <h1 className="page-header__title">Case Studies</h1>
          <p className="page-header__subtitle">Product Design Manager · 14+ years shipped</p>
        </div>
        <div className="header-actions">
          <AskMeButton />
        </div>
      </div>

      <div className="section-card">
        <div className="section-card__header">
          <span className="section-card__title">All deployments</span>
          <span className="section-version">5 projects</span>
        </div>
        {PROJECTS.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="project-row">
            <div className={`project-icon ${p.color}`}>{p.icon}</div>
            <div style={{ flex: 1 }}>
              <div className="project-row__name">{p.name}</div>
              <div className="project-row__meta">{p.meta}</div>
            </div>
            <div className="project-tags">
              <span className="tag tag--shipped">shipped</span>
            </div>
          </Link>
        ))}
      </div>

    </CaasShell>
  )
}

import CaasShell from '@/components/CaasShell'
import Link from 'next/link'
import Image from 'next/image'
import AskMeButton from '@/components/AskMeButton'

export const metadata = {
  title: 'Case Studies — Cassie Hoover',
  description: 'Case studies and project write-ups from 14+ years of product design work.',
}

const PROJECTS = [
  {
    slug: 'monitoring-2-0',
    name: 'Monitoring 2.0',
    meta: 'Drata · Data Observability · 2024',
    image: null,
    placeholderBg: 'linear-gradient(135deg, #EEF2FF 0%, #C7D2FE 100%)',
    placeholderIcon: '◈',
    placeholderColor: '#2A52BE',
  },
  {
    slug: 'custom-fields-and-formulas',
    name: 'Custom Fields & Formulas',
    meta: 'Drata · Risk Management · 2024',
    image: '/images/Custom fields and formulas/Customfields-figma.png',
    placeholderBg: null,
    placeholderIcon: null,
    placeholderColor: null,
  },
  {
    slug: 'cowork-people-management',
    name: 'Automating People Management',
    meta: 'Claude Cowork · AI · 2025',
    image: '/images/People-Managment.png',
    placeholderBg: null,
    placeholderIcon: null,
    placeholderColor: null,
  },
  {
    slug: 'automated-reviews',
    name: 'Automated Reviews',
    meta: 'nCino · FinTech SaaS',
    image: '/images/Image1-banner.jpg',
    placeholderBg: null,
    placeholderIcon: null,
    placeholderColor: null,
  },
  {
    slug: 'draw-schedules',
    name: 'Draw Schedules',
    meta: 'nCino · FinTech SaaS',
    image: '/images/DrawSchedules-banner.jpg',
    placeholderBg: null,
    placeholderIcon: null,
    placeholderColor: null,
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

        <div className="project-card-grid">
          {PROJECTS.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="project-card">
              <div className="project-card__thumb">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 400px"
                  />
                ) : (
                  <div
                    className="project-card__placeholder"
                    style={{ background: p.placeholderBg ?? undefined }}
                  >
                    <span style={{ fontSize: 32, color: p.placeholderColor ?? '#888', opacity: 0.5 }}>
                      {p.placeholderIcon}
                    </span>
                  </div>
                )}
              </div>
              <div className="project-card__body">
                <div className="project-card__info">
                  <div className="project-card__name">{p.name}</div>
                  <div className="project-card__meta">{p.meta}</div>
                </div>
                <span className="project-card__arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </CaasShell>
  )
}

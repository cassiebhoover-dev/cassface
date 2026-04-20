import CaasShell from '@/components/CaasShell'
import Link from 'next/link'
import AskMeButton from '@/components/AskMeButton'

export const metadata = {
  title: 'CaaS — Cassie as a Service™',
  description: 'Product Design Manager · 14+ years shipped · Wilmington, NC · Open to collaborating.',
}

export default function HomePage() {
  return (
    <CaasShell urlText="cassie.design — CaaS v2.6.0">

      {/* Page header */}
      <div className="page-header">
        <div>
          <h1 className="page-header__title">Overview</h1>
          <p className="page-header__subtitle">
            Product Design Manager · Wilmington, NC · Open to collaborating
          </p>
        </div>
        <div className="header-actions">
          <a href="/cassie-resume.pdf" className="caas-btn" download>
            ↓ Resume
          </a>
          <AskMeButton />
        </div>
      </div>

      {/* Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-card__label">Years shipped</div>
          <div className="metric-card__value">14+</div>
          <div className="metric-card__delta">↑ still counting</div>
        </div>
        <div className="metric-card">
          <div className="metric-card__label">Case studies</div>
          <div className="metric-card__value">05</div>
          <div className="metric-card__delta">↑ 2 in progress</div>
        </div>
        <div className="metric-card">
          <div className="metric-card__label">Direct reports</div>
          <div className="metric-card__value">03</div>
          <div className="metric-card__delta">↑ growing</div>
        </div>
        <div className="metric-card">
          <div className="metric-card__label">Uptime</div>
          <div className="metric-card__value">99%</div>
          <div className="metric-card__delta">↑ (ask about 2020)</div>
        </div>
      </div>

      {/* Recent Deployments */}
      <div className="section-card">
        <div className="section-card__header">
          <span className="section-card__title">Recent deployments</span>
          <Link href="/work" className="section-card__action">View all →</Link>
        </div>

        <Link href="/work/monitoring-2-0" className="project-row">
          <div className="project-icon project-icon--blue">◈</div>
          <div>
            <div className="project-row__name">Monitoring 2.0</div>
            <div className="project-row__meta">Drata · Data Observability · 2024</div>
          </div>
          <div className="project-tags">
            <span className="tag tag--shipped">shipped</span>
          </div>
        </Link>

        <Link href="/work/custom-fields-and-formulas" className="project-row">
          <div className="project-icon project-icon--green">◻</div>
          <div>
            <div className="project-row__name">Custom Fields &amp; Formulas</div>
            <div className="project-row__meta">Drata · Risk Management · 2024</div>
          </div>
          <div className="project-tags">
            <span className="tag tag--shipped">shipped</span>
          </div>
        </Link>

        <Link href="/work/cowork-people-management" className="project-row">
          <div className="project-icon project-icon--amber">◇</div>
          <div>
            <div className="project-row__name">Automating People Management</div>
            <div className="project-row__meta">Claude Cowork · AI · 2025</div>
          </div>
          <div className="project-tags">
            <span className="tag tag--shipped">shipped</span>
          </div>
        </Link>
      </div>

      {/* Skills Snapshot */}
      <div className="section-card">
        <div className="section-card__header">
          <span className="section-card__title">Skills &amp; stack</span>
          <Link href="/about" className="section-card__action">Learn more →</Link>
        </div>
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-item__name">Product Thinking</div>
            <div className="skill-item__level">Principal-level</div>
            <div className="skill-bar"><div className="skill-bar__fill" style={{ width: '95%' }} /></div>
          </div>
          <div className="skill-item">
            <div className="skill-item__name">Figma</div>
            <div className="skill-item__level">Expert · components, variables</div>
            <div className="skill-bar"><div className="skill-bar__fill" style={{ width: '92%' }} /></div>
          </div>
          <div className="skill-item">
            <div className="skill-item__name">People Leadership</div>
            <div className="skill-item__level">Manager · 3 direct reports</div>
            <div className="skill-bar"><div className="skill-bar__fill" style={{ width: '80%' }} /></div>
          </div>
          <div className="skill-item">
            <div className="skill-item__name">Prototyping / Code</div>
            <div className="skill-item__level">Claude Code · V0 · Figma Make</div>
            <div className="skill-bar"><div className="skill-bar__fill" style={{ width: '72%' }} /></div>
          </div>
        </div>
      </div>

    </CaasShell>
  )
}

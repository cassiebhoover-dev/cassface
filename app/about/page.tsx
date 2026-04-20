import Image from 'next/image'
import CaasShell from '@/components/CaasShell'
import AboutEndpoints from '@/components/AboutEndpoints'

export const metadata = {
  title: 'About — CaaS by Cassie',
  description: 'CaaS API Reference — Cassie Hoover, Product Design Manager.',
}

export default function AboutPage() {
  return (
    <CaasShell urlText="cassie.design/about">

      {/* Page header */}
      <div>
        <h1 className="page-title">About</h1>
        <p className="page-subtitle">CaaS API Reference · v4.0.0 · Base URL: cassie.design</p>
      </div>

      {/* Identity card */}
      <div className="identity-card">
        <div className="photo-placeholder">
          <Image
            src="/images/Cassie-Hoover-headshot.jpeg"
            alt="Cassie Hoover"
            width={64}
            height={64}
            style={{ objectFit: 'cover', borderRadius: 6 }}
          />
        </div>
        <div className="identity-meta">
          <div className="identity-name">Cassie Hoover</div>
          <div className="identity-title">Manager, Product Design · Drata · Wilmington, NC</div>
          <div className="identity-badges">
            <span className="badge badge--green">status: collaborative</span>
            <span className="badge badge--blue">type: player-coach</span>
            <span className="badge badge--purple">auth: portfolio-key</span>
            <span className="badge badge--amber">rate-limit: none</span>
          </div>
          <p className="identity-desc">
            A product design API with 14+ years of uptime. Specializes in turning ambiguous problems
            into shipped software — for startups scaling fast and enterprises moving slow. Accepts
            requests in Figma, Notion, and plain English.
          </p>
        </div>
      </div>

      {/* Expandable endpoint rows */}
      <AboutEndpoints />

      {/* Tech stack */}
      <div className="section-card">
        <div className="section-header">
          <span className="section-title">Tech stack &amp; influences</span>
          <span className="section-version">last updated v4.0.0</span>
        </div>
        <div className="stack-grid">

          <div className="stack-col">
            <div className="stack-col__label">Tools</div>
            <div className="stack-item is-primary"><div className="stack-dot" />Claude / AI</div>
            <div className="stack-item is-primary"><div className="stack-dot" />Figma</div>
            <div className="stack-item"><div className="stack-dot" />Dovetail</div>
          </div>

          <div className="stack-col">
            <div className="stack-col__label">Methods</div>
            <div className="stack-item is-primary"><div className="stack-dot" />Systems thinking</div>
            <div className="stack-item is-primary"><div className="stack-dot" />User research</div>
            <div className="stack-item"><div className="stack-dot" />Double Diamond</div>
            <div className="stack-item"><div className="stack-dot" />Usability testing</div>
            <div className="stack-item"><div className="stack-dot" />Design sprints</div>
          </div>

          <div className="stack-col">
            <div className="stack-col__label">Influences</div>
            <div className="stack-item is-primary"><div className="stack-dot" />Don Norman</div>
            <div className="stack-item is-primary"><div className="stack-dot" />Julie Zhuo</div>
            <div className="stack-item"><div className="stack-dot" />Malcolm Gladwell</div>
            <div className="stack-item"><div className="stack-dot" />Martha Stewart</div>
          </div>

        </div>
      </div>

    </CaasShell>
  )
}

import Link from 'next/link'
import CaasShell from '@/components/CaasShell'

export const metadata = {
  title: 'Monitoring 2.0 — Cassie Hoover',
}

export default function Monitoring20() {
  return (
    <CaasShell urlText="cassie.design — Monitoring 2.0">

      <div className="page-header">
        <div>
          <h1 className="page-header__title">Monitoring 2.0</h1>
          <p className="page-header__subtitle">Data Observability · Drata · 2024</p>
        </div>
        <div className="header-actions">
          <Link href="/work" className="caas-btn">← Case Studies</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto" style={{ paddingBottom: 40 }}>

          <div className="border-l border-foreground/15 pl-8 mb-16">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-4">Data Observability · Platform</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Monitoring 2.0
            </h1>
            <p className="font-sans text-base text-muted leading-relaxed max-w-2xl">
              Rethinking how compliance managers monitor data quality tests — making failures easier to triage, delegate, and resolve across the organization.
            </p>
          </div>

          {/* Hero placeholder */}
          <div className="relative aspect-video rounded-2xl mb-20 overflow-hidden bg-warm/50 border border-sand/30 flex items-center justify-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted">Project imagery coming soon</p>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-l border-foreground/15 pl-8">
            {[
              { label: 'Role', value: 'Lead Designer' },
              { label: 'Team', value: 'Secondary Designer, Directors, PM, Engineering' },
              { label: 'Type', value: 'Feature Design · Research' },
              { label: 'Status', value: 'In Progress' },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted mb-2">{m.label}</p>
                <p className="text-sm font-sans text-foreground">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Personas */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">01 — Personas</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                Who we designed for
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">Carl — Compliance Manager <span className="text-muted font-normal">(primary)</span></h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Carl monitors data quality tests and addresses failures — either fixing them himself or delegating to the right person. He&apos;s the day-to-day user of the monitoring surface and the one most affected by noise, false positives, and unclear ownership.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">Dean — DevOps Engineer <span className="text-muted font-normal">(secondary)</span></h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Dean typically manages infrastructure tests and gets pulled in when errors occur — often because of connection issues. He needs fast visibility into what broke and why, without wading through noise meant for compliance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team and Role */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">02 — Team & Role</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Leading a cross-functional team
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed">
                I led design on the Monitoring 2.0 initiative, partnering with a secondary designer, multiple directors, the Product Manager, and the engineering team. My role spanned research facilitation, design direction, and cross-functional alignment across the entire effort.
              </p>
            </div>
          </section>

          {/* Initial Research */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">03 — Initial Research</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Starting with the signal we already had
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                I started by reviewing all customer feedback in Productboard tagged to monitoring and tests — surfacing recurring frustrations and patterns that had been accumulating over time.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                Next, I facilitated a Rose-Bud-Thorn workshop with a cross-functional group that included directors, customer success managers, product managers, engineers, and the head of product. I intentionally invited both team members with deep product expertise and newer employees who could bring a fresh perspective. Customer success managers in particular brought valuable insights from direct user interactions.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                Combining workshop outcomes with the Productboard feedback, I identified recurring themes and developed an opportunity-solution tree from our initial problem statement — giving the team a shared map of what was worth pursuing and why. This process surfaced four core problem areas:
              </p>
              <ul className="space-y-3 ml-1">
                {[
                  'Users lacked the details needed to know their next steps when a test failed',
                  'Information was scattered across the app and difficult to act on',
                  'Limited customization made it hard for users to work efficiently',
                  'There was no clear way to understand how tests connected to a broader compliance program or what impact a failure might have downstream',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent mt-1.5 text-xs">●</span>
                    <p className="font-sans text-sm text-muted leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Customer Interviews */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">04 — Customer Interviews</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Validating with real users
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                After building wireframes informed by customer feedback and the internal workshop, we ran interviews with 12 customers and internal stakeholders across all three segments. The goal was to make sure our solution worked for every type of user while staying intuitive and easy to use.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { count: '2', label: 'Enterprise', names: 'Tenable, Hornblower' },
                  { count: '5', label: 'Commercial', names: 'Legato Security, Truveta, Prolific, Blue J, Verbio' },
                  { count: '3', label: 'Emerging', names: 'Getinvisible, Dataminded, Spiraldot' },
                  { count: '2', label: 'Internal', names: 'SE Team, Alev/Jonathan' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/50 border border-sand/30 rounded-2xl p-5">
                    <p className="font-serif text-3xl text-foreground mb-1">{s.count}</p>
                    <p className="text-xs font-sans font-semibold text-foreground mb-1">{s.label}</p>
                    <p className="text-[11px] font-sans text-muted leading-relaxed">{s.names}</p>
                  </div>
                ))}
              </div>
              <p className="font-sans text-sm text-muted leading-relaxed">
                All sessions were recorded and synthesized in Dovetail, resulting in 200+ highlighted quotes organized across 52 distinct insights — grouped by theme and then triaged into actionable buckets.
              </p>
            </div>
          </section>

          {/* Synthesis & Prioritization */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">05 — Synthesis & Prioritization</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Turning 52 insights into a roadmap
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                Not every insight could be acted on immediately. To make the research usable for the team, I organized findings into four categories:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">Already reacted to</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Quick wins addressed immediately in the design. For example, users weren&apos;t discovering that the Findings count in the account table was clickable, so we made it an explicit &ldquo;View findings&rdquo; link. We also resolved a conflicting insight around connection visibility: some users needed to know which system a test was running on, while others found unused connections created noise. The solution separated active connections from unused ones, serving both needs without compromise.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">For this version</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Insights that shaped the core redesign scope, including the move from drawers to full detail pages, a filterable table view, tabbed navigation, and a test owner model.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">For other teams</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Findings that surfaced issues outside of Monitoring, flagged and shared with the Controls, Cosmos, and Effortless teams.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">Future roadmap</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Longer-horizon opportunities like connection health surfacing, actionable notifications through a user&apos;s preferred channel (email, Slack, etc.), and aggregated findings views.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Design Decisions */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">06 — Design Decisions</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                What we built and why
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                The redesign introduced four primary changes driven directly by research findings:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">Table view with filtering and quick actions</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Users needed to quickly scan, sort, and act on tests without drilling into each one individually. The table replaced a less flexible list and gave power users the efficiency they were asking for.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">Detail pages replacing drawers</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    The drawer pattern was limiting — users would open it, lose context, and have to navigate elsewhere to take action. Full detail pages gave each test the space it needed and kept users oriented within the product.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">Tabbed navigation (Overview, Findings, Exclusions, Controls)</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Tabs gave users a clear mental model for the different jobs they needed to do within a single test, reducing the sense that information was scattered across the app.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">Test owner assignment</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Users expressed a clear need for ownership accountability. The test owner model directly addressed the delegation problem Carl faced as a compliance manager trying to route failures to the right person.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Prototype Validation */}
          <section className="mb-24">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">07 — Prototype Validation</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Testing the direction with customers
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                We walked the prototype back through customers across all segments. The response validated the direction — users described the changes as streamlining their workflow and making the experience significantly clearer. The tab structure, detail pages, and table view were called out positively across multiple sessions.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                One particularly strong signal came from a conflicting insight that emerged mid-research: two users had genuinely opposing needs around connection visibility. Navigating that tension — and landing on a solution that satisfied both without compromising either — became one of the most useful design challenges of the project.
              </p>
            </div>
          </section>

          <div className="border-t border-foreground/10 pt-8 flex justify-between items-center">
            <Link href="/work/event-assistant-app" className="text-xs font-sans tracking-[0.15em] uppercase text-muted hover:text-foreground transition-colors duration-200">← Event Assistant App</Link>
            <Link href="/work" className="text-xs font-sans tracking-[0.15em] uppercase text-muted hover:text-foreground transition-colors duration-200">All work</Link>
          </div>

      </div>
    </CaasShell>
  )
}

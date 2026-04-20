import Link from 'next/link'
import Image from 'next/image'
import CaasShell from '@/components/CaasShell'

export const metadata = {
  title: 'Draw Schedules — Cassie Hoover',
}

export default function DrawSchedules() {
  return (
    <CaasShell urlText="cassie.design — Draw Schedules">

      <div className="page-header">
        <div>
          <h1 className="page-header__title">Draw Schedules</h1>
          <p className="page-header__subtitle">FinTech SaaS · nCino</p>
        </div>
        <div className="header-actions">
          <Link href="/work" className="caas-btn">← Case Studies</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto" style={{ paddingBottom: 40 }}>

          <p className="text-xs font-sans text-accent tracking-widest uppercase mb-4">FinTech SaaS · nCino</p>
          <h1 className="font-sans text-4xl md:text-6xl text-foreground leading-tight mb-6">
            Draw Schedules
          </h1>
          <p className="text-lg font-sans text-muted leading-relaxed mb-16 max-w-2xl">
            Bringing construction loan draw schedule management inside nCino — eliminating reliance on external software and enabling accurate price optimization for relationship managers.
          </p>

          <div className="border-t border-stone-200 mb-16" />

          {/* Impact */}
          <section className="mb-16">
            <p className="text-xs font-sans text-accent tracking-widest uppercase mb-6">Impact</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stat: 'Launched', label: 'Feature shipped and adopted across nCino\'s financial institution customer base' },
                { stat: 'A/B Tested', label: 'Two competing interaction patterns tested with real users before committing to a direction' },
                { stat: 'Unified', label: 'Closed a key gap in nCino\'s all-in-one positioning by eliminating external software dependency' },
              ].map((item) => (
                <div key={item.stat} className="bg-stone-50 rounded-2xl p-6">
                  <p className="font-sans text-4xl text-foreground mb-2">{item.stat}</p>
                  <p className="text-sm font-sans text-muted leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="relative aspect-video rounded-2xl mb-16 overflow-hidden bg-stone-100">
            <Image src="/images/DrawSchedules-banner.jpg" alt="Draw Schedules — construction loan draw management" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: 'Role', value: 'Lead Designer' },
              { label: 'Team', value: 'Designer, PMs, Engineers' },
              { label: 'Company', value: 'nCino' },
              { label: 'Type', value: 'Feature Design' },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">{m.label}</p>
                <p className="text-sm font-sans text-foreground">{m.value}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-200 mb-16" />

          <section className="mb-16">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">Business Context</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              nCino's core value proposition is consolidating lending operations into a single platform. But for construction-to-permanent loans, relationship managers were forced out of nCino to handle draw schedules in external software — a gap that undermined the "all-in-one" pitch and introduced reconciliation risk.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              This wasn't a nice-to-have. For banks with significant construction loan portfolios, it was a blocker.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">The Problem</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              When a relationship manager calculated loan price or profitability in nCino, the result was a single percentage applied to the entire amortization schedule. That's not how construction loans work — funds are disbursed in draws over time, making that calculation inaccurate for a core loan type.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              The design challenge: integrate draw schedule editing into an already complex pricing workflow without adding cognitive load or disrupting existing patterns.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">Research</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              I conducted four 30-minute remote interviews with relationship managers, observing how they currently managed draw schedules outside of nCino. Sessions revealed the frequency of use, the complexity of typical draw structures, and the friction of context-switching between tools mid-workflow.
            </p>

            <div className="relative aspect-[16/10] rounded-2xl mt-10 overflow-hidden bg-stone-100">
              <Image src="/images/Drawschedules-research.jpg" alt="Research synthesis — interview insights and workflow mapping" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
            </div>
            <p className="text-xs font-sans text-muted mt-3 opacity-60 text-center">Research synthesis from relationship manager interviews</p>

            <div className="relative aspect-[16/9] rounded-2xl mt-6 overflow-hidden bg-stone-100">
              <Image src="/images/DrawSchedules-userjourney.jpg" alt="User journey map — draw schedule workflow across touchpoints" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
            </div>
            <p className="text-xs font-sans text-muted mt-3 opacity-60 text-center">User journey mapping for the draw schedule workflow</p>
          </section>

          <section className="mb-16">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">Screen Map</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              A comprehensive screen map documenting the full draw schedule experience — from entry points through editing flows.
            </p>
            <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
              <Image src="/images/Drawschedule-ScreenMap.jpg" alt="Screen map — complete draw schedule feature flow" width={1200} height={2000} className="w-full h-auto" sizes="(max-width: 768px) 100vw, 768px" />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">Design Decision: Modal vs. Slide-out</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              I explored two competing interaction patterns and ran A/B testing with users before committing to a direction:
            </p>
            <div className="space-y-6 mb-6">
              <div className="border-l-2 border-stone-200 pl-6">
                <h3 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-2">Option A — Modal</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">Consistent with existing Rate and Payment patterns. Familiar, but blocked the loan view during editing — creating friction for users who needed to reference other loan data mid-task.</p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-2">Option B — Slide-out Panel (Selected)</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">Kept the loan view visible while editing the draw schedule. Users strongly preferred this — they needed to make quick back-and-forth adjustments while referencing other loan data. The right answer required departing from an existing pattern.</p>
              </div>
            </div>
            <p className="font-sans text-sm font-sans text-muted italic leading-relaxed">
              This was a deliberate choice to break consistency in favor of task fit — a trade-off I documented explicitly for the engineering team.
            </p>

            <div className="relative aspect-[16/10] rounded-2xl mt-10 overflow-hidden bg-stone-100">
              <Image src="/images/Drawschedules-three-styles-to-edit.jpg" alt="Three interaction patterns explored for draw schedule editing" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
            </div>
            <p className="text-xs font-sans text-muted mt-3 opacity-60 text-center">Exploring three interaction styles for editing draw schedules</p>
          </section>

          {/* Wireframes */}
          <section className="mb-16">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">Wireframes</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              Wireframe explorations for the slide-out panel, iterating on layout, data hierarchy, and editing controls.
            </p>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-100">
              <Image src="/images/Drawschedules-wireframes.jpg" alt="Wireframe iterations for the draw schedule slide-out panel" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
            </div>
          </section>

          <section className="mb-20">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">Outcomes & Impact</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              The Draw Schedule feature shipped successfully — giving relationship managers the ability to add single and recurring draws, edit schedule tables, and remove schedules entirely without leaving nCino.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              Next phase: Draw Templates for frequently-used schedule structures, reducing setup time for common loan types.
            </p>
          </section>

          <div className="border-t border-stone-200 pt-12 flex justify-between items-center">
            <Link href="/work/automated-reviews" className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200">← Automated Reviews</Link>
            <Link href="/work/brand-customization" className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200">Brand Customization →</Link>
          </div>

      </div>
    </CaasShell>
  )
}

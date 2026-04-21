import Link from 'next/link'
import CaasShell from '@/components/CaasShell'

export const metadata = {
  title: 'Custom Fields & Formulas — Cassie Hoover',
}

export default function CustomFieldsAndFormulas() {
  return (
    <CaasShell urlText="cassie.design — Custom Fields & Formulas">

      <div className="page-header">
        <div>
          <h1 className="page-header__title">Custom Fields &amp; Formulas</h1>
          <p className="page-header__subtitle">Risk Management · Drata · 2024</p>
        </div>
        <div className="header-actions">
          <Link href="/work" className="caas-btn">← Case Studies</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto" style={{ paddingBottom: 40 }}>

          <div className="border-l border-foreground/15 pl-8 mb-16">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-4">Risk Management &middot; Platform</p>
            <h1 className="font-sans text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Custom Fields &amp; Formulas
            </h1>
            <p className="font-sans text-base text-muted leading-relaxed max-w-2xl">
              Giving compliance and GRC teams the flexibility to capture, calculate, and act on risk data the way their organization actually works, without leaving Drata.
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
              { label: 'Team', value: 'Directors, PM, Engineering' },
              { label: 'Type', value: 'Feature Design · Research' },
              { label: 'Status', value: 'Complete' },
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
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">01 · Personas</p>
              <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                Who we designed for
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">Carl, Compliance Manager <span className="text-muted font-normal">(primary)</span></h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Carl manages risk across the organization and needs to capture data points that Drata&apos;s default fields don&apos;t cover, things like financial exposure, custom scoring models, or org-specific risk categories. He&apos;s maintaining spreadsheets and external tools just to get the flexibility the platform doesn&apos;t give him.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">Dean, GRC Director <span className="text-muted font-normal">(secondary)</span></h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Dean needs to measure risk using formulas his organization has defined: residual risk, risk appetite, inherent risk scores. Without the ability to build those calculations inside Drata, he exports data and does the math elsewhere, breaking the integrity of his workflow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team and Role */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">02 · Team &amp; Role</p>
              <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Sole designer on a two-phase initiative
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed">
                I was the only designer on this project end-to-end, partnering directly with directors, the PM, and engineering across both phases. My role covered everything from research facilitation and design direction to cross-functional alignment, from initial problem framing through prototype validation on Custom Fields and Custom Formulas.
              </p>
            </div>
          </section>

          {/* Problem Framing */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">03 · Problem Framing</p>
              <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Starting with the gap
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                GRC and compliance teams were working around Drata in order to work within it. Users were managing risk metadata in spreadsheets, Airtable, and other external tools, not because Drata lacked good risk management, but because it lacked flexibility. There was no way to capture the data fields their organizations had defined, and no way to run calculations on top of them.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                The problem, stated plainly: Drata didn&apos;t let users create formulas, so they couldn&apos;t correctly measure risk using their own models inside the product.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                This surfaced two connected opportunities, giving users the ability to define their own data fields, then layering the ability to build formulas on top of those fields and Drata&apos;s native data.
              </p>
            </div>
          </section>

          {/* Customer Interviews */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">04 · Customer Interviews</p>
              <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Validating the problem across segments
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                Before moving into design, I put together a structured interview guide to dig into current workflows, pain points, and ideal states around custom data and risk measurement. We ran sessions across enterprise, commercial, and emerging customers, including Wiz, Zapier, ContentSquare, and DistillerSR, as well as internal stakeholders.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Questions focused on three areas: how users were currently capturing and managing custom risk data outside Drata, what types of fields and calculations mattered most to their workflows, and where in the platform they&apos;d expect this functionality to live.
              </p>
            </div>
          </section>

          {/* Synthesis & Prioritization */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">05 · Synthesis &amp; Prioritization</p>
              <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Turning research into a phased roadmap
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                Research confirmed that custom data needs varied by organization, but the underlying workflow problem was consistent: users needed to bring their own structure to risk management, not conform to Drata&apos;s. Findings split into two clear phases:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">Phase 1, Custom Fields</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Users needed the ability to create text, number, currency, and option fields and assign them to specific locations within Risk Management (Details, Assessment, Treatment Plan). Ownership and placement flexibility were table-stakes across every segment.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground mb-2">Phase 2, Custom Formulas</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Users with more mature risk programs needed to go further, combining custom fields with Drata&apos;s native fields (Impact, Likelihood, Risk Score) to build formulas that output calculated values like residual risk or financial exposure. This was the forcing function driving them to external tools.
                  </p>
                </div>
              </div>
              <p className="font-sans text-sm text-muted leading-relaxed mt-6">
                We also flagged future opportunities, formula-based reporting, heat map integration, and expanding both features beyond Risk Management to Controls, Assets, Policies, and Vendors, and added those to the roadmap.
              </p>
            </div>
          </section>

          {/* Formula Builder Research */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">06 · Formula Builder Research</p>
              <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Watching how people actually type
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                One of the most valuable research moments on this project came from six internal interviews focused specifically on the formula builder interaction. Rather than testing a prototype, we gave participants real scenarios and watched them work through the builder as if it were a live product. Seeing people actually use it in front of us told us things we never would have caught otherwise.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                What we assumed about keyboard behavior was pretty much wrong. We expected users to reach for certain keys at certain moments, but the way people actually used Enter and Tab to move through the formula was different from how we&apos;d designed for it. Some were trying to confirm a selection with Enter, others were using Tab to advance to the next term, and the builder wasn&apos;t responding in the way they expected either way. Small moments of friction that, in testing, became really obvious.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-8">
                Giving participants scenarios to work through, rather than asking them to describe how they&apos;d use it, was what made this research so useful. You can&apos;t get that from a conversation. Watching someone pause, try a keystroke, look confused, and try another one told us exactly where the interaction model needed to change.
              </p>
              <video
                src="/images/custom fields and formulas/Custom-formula-builder.mov"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-2xl border border-sand/30"
              />
            </div>
          </section>

          {/* Design Decisions */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">07 · Design Decisions</p>
              <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                What we built and why
              </h2>

              <h3 className="font-sans text-base font-semibold text-foreground mb-6 mt-2">Phase 1: Custom Fields</h3>

              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="font-sans text-sm font-semibold text-foreground mb-2">Wizard-based creation flow</h4>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    After working through options with engineering and the Cosmos team, we landed on the Wizard component for the add and edit forms. The workflow has conditional progress across three steps, Details, Placement, and Equation, and the Wizard&apos;s linear structure made the dependency between steps clear without requiring users to hold that logic in their heads.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-foreground mb-2">Placement model (Location and Section)</h4>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Rather than making custom fields globally visible, users define exactly where each field appears, which object (Risks, and later Controls, Assets, Policies) and which section within it. This gave users precision without adding complexity, and was designed to scale as the feature expanded beyond Risk Management.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-foreground mb-2">Fields tab within Custom Fields and Formulas settings</h4>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Custom Fields lives as a tab within a shared settings page, alongside the Formulas tab introduced in Phase 2. This established a clear home for user-defined data in the platform and set up the architecture for future expansion.
                  </p>
                </div>
              </div>

              <h3 className="font-sans text-base font-semibold text-foreground mb-6">Phase 2: Custom Formulas</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-sm font-semibold text-foreground mb-2">Formula builder with real-time validation</h4>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                    The formula builder lets users construct expressions using custom numeric fields, Drata fields, and mathematical operators. We designed it to give continuous feedback, invalid terms highlight in red, expressions show an &ldquo;Incomplete expression&rdquo; state until three terms are present, and the badge updates to &ldquo;Valid expression&rdquo; once the formula resolves correctly. That removed a lot of guesswork and caught errors before saving.
                  </p>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    One of the more interesting calls was whether the dropdown should restrict invalid operator combinations automatically, or surface all options and use color to signal errors. We landed on the latter, keeping all options available while highlighting invalid terms in red, which felt more honest to how users actually wanted to work. They wanted control, not the interface making decisions for them.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-foreground mb-2">Inline formula results in the Risk drawer</h4>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Formula outputs appear directly in the Risk drawer in the section matching the formula&apos;s placement, and update in real time as users edit fields. When a result can&apos;t be calculated, a single dash renders in place of the value, clear without needing an explanation.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-foreground mb-2">Preventing destructive actions</h4>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Custom fields referenced by a formula can&apos;t be deleted or hidden without removing the dependency first. This kept formula integrity intact without asking users to track those relationships on their own.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Scalability Decisions */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">08 · Scalability Decisions</p>
              <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Built to grow beyond Risk Management
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed">
                One of the most consequential decisions on this project wasn&apos;t visible in the UI. It was the commitment to build Custom Fields and Formulas as a platform-level capability, not a Risk-specific feature. The placement model, expression schema, and formula evaluation architecture were all designed to extend to Controls, Assets, Policies, and Vendors with minimal rework. We co-developed the Controls expansion in parallel with the Dravatars team to make sure the foundation held before Risk Management shipped.
              </p>
            </div>
          </section>

          {/* Prototype Validation */}
          <section className="mb-24">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">09 · Prototype Validation</p>
              <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Testing the direction with customers
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed">
                We walked prototypes back through customers across segments. The wizard structure, formula builder interaction, and inline drawer results all validated as intuitive and aligned with how users expected the feature to work. The real-time formula update behavior in the Risk drawer, a decision made together with engineering, was specifically called out as matching how users expected connected data to behave.
              </p>
            </div>
          </section>

          <div className="border-t border-foreground/10 pt-8 flex justify-between items-center">
            <Link href="/work/monitoring-2-0" className="text-xs font-sans tracking-[0.15em] uppercase text-muted hover:text-foreground transition-colors duration-200">← Monitoring 2.0</Link>
            <Link href="/work" className="text-xs font-sans tracking-[0.15em] uppercase text-muted hover:text-foreground transition-colors duration-200">All work</Link>
          </div>

      </div>
    </CaasShell>
  )
}

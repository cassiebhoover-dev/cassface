import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Automated Reviews — Cassie Hoover',
}

export default function AutomatedReviews() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          <Link href="/#work" className="inline-flex items-center text-sm font-sans text-muted hover:text-foreground transition-colors duration-200 mb-12">
            ← Back to work
          </Link>

          <p className="text-xs font-sans text-accent tracking-widest uppercase mb-4">FinTech SaaS · nCino</p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-6">
            Automated Reviews
          </h1>
          <p className="text-lg font-sans text-muted leading-relaxed mb-16 max-w-2xl">
            Redesigning the annual client review workflow for financial institutions — reducing manual effort and enabling continuous relationship monitoring at scale.
          </p>

          <div className="border-t border-stone-200 mb-16" />

          {/* Outcome summary — leads with impact */}
          <section className="mb-16">
            <p className="text-xs font-sans text-accent tracking-widest uppercase mb-6">Impact</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stat: '30,000+', label: 'Financial professionals supported across the nCino platform' },
                { stat: '50+', label: 'User interviews and usability tests conducted to validate direction' },
                { stat: '25%', label: 'Increase in feature adoption through workflow improvements' },
              ].map((item) => (
                <div key={item.stat} className="bg-stone-50 rounded-2xl p-6">
                  <p className="font-serif text-4xl text-foreground mb-2">{item.stat}</p>
                  <p className="text-sm font-sans text-muted leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="relative aspect-video rounded-2xl mb-16 overflow-hidden bg-stone-100">
            <Image src="/images/automated-reviews.jpg" alt="Automated Reviews" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: 'Role', value: 'Lead Designer' },
              { label: 'Team', value: 'Designer, UX Researcher, PM, Customer Success' },
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

          {/* Business context */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Business Context</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              nCino's platform serves financial institutions managing complex client portfolios. Annual and quarterly relationship reviews — a core compliance and profitability activity — were being handled partly inside nCino and partly through external tools, creating fragmented workflows and lost time for relationship managers.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              The business case was clear: automate the review process to accelerate completion, reduce reliance on external software, and enable continuous monitoring that drives more profitable client relationships.
            </p>
          </section>

          {/* Problem */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">The Problem</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              Relationship managers were spending significant time on reviews that should have been streamlined. The core tension: automating recommendations fast enough to save time while maintaining the trust of users who were deeply skeptical of anything "automated" in a compliance-adjacent workflow.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              This wasn't just a UX problem — it was a change management challenge embedded in a product design brief.
            </p>
          </section>

          {/* Research */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Research</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              I led a multi-phase research effort across internal stakeholders and external customers, combining interviews with formative usability testing on clickable prototypes.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Internal Research', body: 'Five 1-hour sessions with former nCino Relationship Managers using contextual inquiry to map current review workflows and identify pain points.' },
                { title: 'Customer Research', body: 'Four remote interviews with financial institutions across Enterprise, Regional, and Community segments — observing real workflows and testing prototypes.' },
                { title: 'Synthesis', body: 'Tagged and categorized 50+ insights in Dovetail with criticality ratings. Key finding: information needs were similar across institutions, but review processes varied significantly — requiring flexible, customizable workflows.' },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-accent pl-6">
                  <h3 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Strategic reframe */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Strategic Reframe</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              Early briefs framed this as "automate the review." Research reframed it as "earn trust for automation." Skeptical users needed to understand <em>why</em> a recommendation was made before they'd act on it — which shifted the design from a workflow tool to a transparency and explanation system.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              This reframe changed the information architecture, the hierarchy of what data was surfaced, and how the system communicated confidence levels to reviewers.
            </p>
          </section>

          {/* Artifacts */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Artifacts</h2>
            <ul className="space-y-2">
              {[
                'Information grouping charts mapping content hierarchy across user segments',
                'Individual FI user journey maps highlighting workflow variation across institution types',
                'Comprehensive feature journey integrating UI, nCino logic, integrations, and external data',
                'Formative usability test results with clickable prototypes across two rounds',
              ].map((item) => (
                <li key={item} className="flex gap-3 font-sans text-sm text-muted leading-relaxed">
                  <span className="text-accent shrink-0">—</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Outcomes */}
          <section className="mb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Outcomes & Impact</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              Research findings were compiled into a prioritized roadmap for the product team. I presented findings to Customer Success and Sales leadership — directly supporting the sales cycle and feature education for prospects.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              The reframed approach to trust and transparency became a foundational design principle applied across subsequent nCino automation features.
            </p>
          </section>

          <div className="border-t border-stone-200 pt-12 flex justify-between items-center">
            <span className="text-sm font-sans text-muted">Next project</span>
            <Link href="/work/draw-schedules" className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200">
              Draw Schedules →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

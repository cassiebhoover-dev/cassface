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

          {/* Back */}
          <Link
            href="/#work"
            className="inline-flex items-center text-sm font-sans text-muted hover:text-foreground transition-colors duration-200 mb-12"
          >
            ← Back to work
          </Link>

          {/* Header */}
          <p className="text-xs font-sans text-accent tracking-widest uppercase mb-4">
            FinTech SaaS · nCino
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-6">
            Automated Reviews
          </h1>
          <p className="text-lg font-sans text-muted leading-relaxed mb-16 max-w-2xl">
            Streamlining the annual client review process for financial institutions through workflow automation and continuous relationship monitoring.
          </p>

          {/* Divider */}
          <div className="border-t border-stone-200 mb-16" />

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Role</p>
              <p className="text-sm font-sans text-foreground">Lead Designer</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Team</p>
              <p className="text-sm font-sans text-foreground">Designer, UX Researcher, PM, Customer Success</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Company</p>
              <p className="text-sm font-sans text-foreground">nCino</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Type</p>
              <p className="text-sm font-sans text-foreground">Feature Design</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative aspect-video rounded-2xl mb-20 overflow-hidden bg-stone-100">
            <Image src="/images/automated-reviews.jpg" alt="Automated Reviews" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
          </div>

          {/* Problem */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">The Problem</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              Relationship managers at financial institutions were spending significant time on annual and quarterly client reviews — a process conducted both within nCino and through external tools. The fragmented workflow made it difficult to maintain continuous oversight of client relationships and affected overall profitability.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              The goal was to accelerate the review process through automation while enabling continuous monitoring — and to do it in a way users would actually trust.
            </p>
          </section>

          {/* Research */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Research</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              I led a multi-phase research effort combining internal interviews with customer sessions across market segments.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-2">Internal Research</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Five 1-hour sessions with former nCino Relationship Managers, combining interviews with contextual inquiry into current review workflows.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-2">Customer Research</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Four remote interviews with financial institutions across Enterprise, Regional, and Community segments. Sessions included contextual observation and formative usability testing with clickable prototypes.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-2">Synthesis</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Used Dovetail to tag and categorize insights by research question, assigning criticality ratings from Major to Minor. Findings revealed that while information needs were similar across institutions, review processes varied significantly — requiring customizable workflows.
                </p>
              </div>
            </div>
          </section>

          {/* Key Questions */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Key Research Questions</h2>
            <ul className="space-y-3">
              {[
                'What information do reviewers need to feel confident completing reviews — and what is essential vs. nice-to-have?',
                'How should information be organized across user groups, and which groups might distrust automation?',
                'What would build trust among skeptical users?',
                'Do users need renewal or modification capabilities within the flow?',
              ].map((q) => (
                <li key={q} className="flex gap-3 font-sans text-base text-muted leading-relaxed">
                  <span className="text-accent mt-1 shrink-0">—</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Artifacts */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Artifacts</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              I created a range of deliverables to align the team and communicate findings:
            </p>
            <ul className="space-y-2">
              {[
                'Information grouping charts to map content hierarchy',
                'Individual FI user journey maps highlighting workflow variation',
                'A comprehensive feature journey integrating UI, nCino logic, integrations, and external data',
              ].map((item) => (
                <li key={item} className="flex gap-3 font-sans text-sm text-muted leading-relaxed">
                  <span className="text-accent shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Outcomes */}
          <section className="mb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Outcomes</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              Research findings were compiled into a prioritized "Next Steps" list for the product team. I presented the findings to Customer Success and Sales leadership to support their sales cycles and help educate prospects on the feature.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              Future work involved validating updated prototypes against research discoveries to refine the automated recommendation experience.
            </p>
          </section>

          {/* Nav between projects */}
          <div className="border-t border-stone-200 pt-12 flex justify-between items-center">
            <span className="text-sm font-sans text-muted">Next project</span>
            <Link
              href="/work/draw-schedules"
              className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200"
            >
              Draw Schedules →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

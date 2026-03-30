import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Draw Schedules — Cassie Hoover',
}

export default function DrawSchedules() {
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
            Draw Schedules
          </h1>
          <p className="text-lg font-sans text-muted leading-relaxed mb-16 max-w-2xl">
            Enabling relationship managers to factor loan draw schedules into price optimization and profitability calculations for construction-to-permanent loans.
          </p>

          <div className="border-t border-stone-200 mb-16" />

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Role</p>
              <p className="text-sm font-sans text-foreground">Lead Designer</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Team</p>
              <p className="text-sm font-sans text-foreground">Designer, PMs, Engineers</p>
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
            <Image src="/images/draw-schedules.jpg" alt="Draw Schedules" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
          </div>

          {/* Problem */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">The Problem</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              When a Relationship Manager calculates the price or profitability of a loan, the result is a singular percentage value that affects the entire amortization schedule. But that's not how construction loans work in the real world — funds are disbursed in draws over time, not as a lump sum.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              Many banks were handling draw schedules in external software, which created a gap in nCino's "all-in-one" product positioning. Bringing this capability in-house meant keeping relationship managers in one tool and improving calculation accuracy.
            </p>
          </section>

          {/* Research */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Research</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              I conducted four 30-minute remote user interviews with relationship managers across different financial institutions. Sessions combined structured questions with contextual inquiry — observing how users currently handled draw schedules outside of nCino.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              Findings were synthesized into feature journey maps that showed how the new capability would integrate with the existing loan pricing workflow.
            </p>
          </section>

          {/* Design Process */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Design Process</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              I explored two wireframe concepts and ran A/B testing to determine the right interaction pattern:
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-stone-200 pl-6">
                <h3 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-2">Concept A — Modal</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Integrated draw schedule editing within a modal, consistent with existing Rate and Payment patterns in nCino.
                </p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-2">Concept B — Slide-out Panel (Selected)</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  A persistent slide-out panel allowing users to edit draw schedules while keeping the main loan view visible. Users strongly preferred this for the ability to make quick back-and-forth edits without losing context.
                </p>
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className="mb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Outcomes</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              The Draw Schedule feature shipped successfully, giving relationship managers the ability to add single and recurring draws, edit schedule tables, and remove schedules entirely — all within nCino.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              The next phase of work involves building Draw Templates for frequently-used schedules, reducing setup time for relationship managers who work with common loan structures.
            </p>
          </section>

          {/* Nav between projects */}
          <div className="border-t border-stone-200 pt-12 flex justify-between items-center">
            <Link
              href="/work/automated-reviews"
              className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200"
            >
              ← Automated Reviews
            </Link>
            <Link
              href="/work/brand-customization"
              className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200"
            >
              Brand Customization →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import CaasShell from '@/components/CaasShell'

export const metadata = {
  title: 'Event Home Page — Cassie Hoover',
}

export default function EventHomePage() {
  return (
    <CaasShell urlText="cassie.design — Event Home Page">

      <div className="page-header">
        <div>
          <h1 className="page-header__title">Event Home Page</h1>
          <p className="page-header__subtitle">Web Platform · Events.com</p>
        </div>
        <div className="header-actions">
          <Link href="/work" className="caas-btn">← Case Studies</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto" style={{ paddingBottom: 40 }}>

          <p className="text-xs font-sans text-accent tracking-widest uppercase mb-4">Web Platform · Events.com</p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-6">
            Event Home Page
          </h1>
          <p className="text-lg font-sans text-muted leading-relaxed mb-16 max-w-2xl">
            Replacing a confusing post-creation redirect with a guided onboarding hub — improving new user setup completion and giving experienced organizers a live event dashboard.
          </p>

          <div className="border-t border-stone-200 mb-16" />

          {/* Impact */}
          <section className="mb-16">
            <p className="text-xs font-sans text-accent tracking-widest uppercase mb-6">Impact</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stat: '100M+', label: 'Revenue supported through product features designed at Events.com' },
                { stat: '2× More', label: 'User engagement with widget-based layout vs. previous side navigation in testing' },
                { stat: '10 Users', label: 'Tested across two rounds — new and experienced organizers both validated the redesign' },
              ].map((item) => (
                <div key={item.stat} className="bg-stone-50 rounded-2xl p-6">
                  <p className="font-serif text-4xl text-foreground mb-2">{item.stat}</p>
                  <p className="text-sm font-sans text-muted leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="relative aspect-video rounded-2xl mb-16 overflow-hidden bg-stone-100">
            <Image src="/images/event-home-page.jpg" alt="Event Home Page" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: 'Role', value: 'Primary Designer' },
              { label: 'Deliverables', value: 'User Testing, Wireframes, User Flows, Visual Design' },
              { label: 'Company', value: 'Events.com' },
              { label: 'Type', value: 'Web Platform' },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">{m.label}</p>
                <p className="text-sm font-sans text-foreground">{m.value}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-200 mb-16" />

          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Business Context</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              Events.com scaled from $0 to $100M in revenue during my tenure, and self-service user growth was a core part of that trajectory. But new self-service organizers were dropping off during setup — creating support burden and leaving revenue on the table from events that never launched.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              Improving the first-hour experience for new organizers was directly tied to activation rate and downstream revenue.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">The Problem</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              After creating an event, users were automatically sent to the event edit page — a dense interface with no guidance on what to do next. New users had no way to distinguish required setup from optional configuration, and no sense of progress or completion.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              The result: drop-off during setup, a spike in support tickets, and organizers launching incomplete events that performed poorly.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Research</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              I conducted user testing with 10 new organizers, observing where they got stuck and what decisions they couldn't make without guidance. Key insight: users didn't need more information — they needed a clear sequence and a sense of what "done" looked like.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Design Solution</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-6">
              The Event Home Page replaced the edit-first experience with a checklist-based hub. Each task appeared as an interactive widget with three states — keeping the mental model simple and progress visible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { state: 'Incomplete', desc: 'Surfaces required actions clearly at a glance', color: 'bg-stone-100' },
                { state: 'Completed', desc: 'Provides positive reinforcement, reduces cognitive load', color: 'bg-stone-200' },
                { state: 'Dismissed', desc: 'Lets organizers remove tasks irrelevant to their event type', color: 'bg-stone-100' },
              ].map((item) => (
                <div key={item.state} className={`${item.color} rounded-xl p-5`}>
                  <p className="font-sans text-xs font-semibold text-accent tracking-widest uppercase mb-2">{item.state}</p>
                  <p className="font-sans text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-base text-muted leading-relaxed">
              A live dashboard panel alongside the checklist showed days until the event, ticketing launch date, and tickets sold — giving experienced organizers the at-a-glance snapshot they needed without overwhelming new users.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Outcomes & Impact</h2>
            <ul className="space-y-3">
              {[
                'Second-round testing showed significantly higher engagement with the widget layout than the previous side navigation',
                'New users successfully completed full event setup without support intervention',
                'Experienced organizers adopted the dashboard as a go-to monitoring view',
                'Reduced support ticket volume related to new user setup confusion',
              ].map((item) => (
                <li key={item} className="flex gap-3 font-sans text-base text-muted leading-relaxed">
                  <span className="text-accent mt-1 shrink-0">—</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="border-t border-stone-200 pt-12 flex justify-between items-center">
            <Link href="/work/brand-customization" className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200">← Brand Customization</Link>
            <Link href="/work/event-assistant-app" className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200">Event Assistant App →</Link>
          </div>

      </div>
    </CaasShell>
  )
}

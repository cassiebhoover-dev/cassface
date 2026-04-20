import Link from 'next/link'
import Image from 'next/image'
import CaasShell from '@/components/CaasShell'

export const metadata = {
  title: 'Event Assistant App — Cassie Hoover',
}

export default function EventAssistantApp() {
  return (
    <CaasShell urlText="cassie.design — Event Assistant App">

      <div className="page-header">
        <div>
          <h1 className="page-header__title">Event Assistant App</h1>
          <p className="page-header__subtitle">Mobile App · Events.com</p>
        </div>
        <div className="header-actions">
          <Link href="/work" className="caas-btn">← Case Studies</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto" style={{ paddingBottom: 40 }}>

          <p className="text-xs font-sans text-accent tracking-widest uppercase mb-4">Mobile App · Events.com</p>
          <h1 className="font-sans text-4xl md:text-6xl text-foreground leading-tight mb-6">
            Event Assistant App
          </h1>
          <p className="text-lg font-sans text-muted leading-relaxed mb-16 max-w-2xl">
            A mobile check-in app built for speed, minimal training, and the reality of event day — launched on Google Play and featured in TechCrunch.
          </p>

          <div className="border-t border-stone-200 mb-16" />

          {/* Impact */}
          <section className="mb-16">
            <p className="text-xs font-sans text-accent tracking-widest uppercase mb-6">Impact</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stat: 'Launched', label: 'Successfully shipped on the Google Play Store' },
                { stat: 'TechCrunch', label: 'Featured in TechCrunch as a notable event technology product' },
                { stat: '5 Orgs', label: 'Interviewed across event categories from marathons to corporate conferences' },
              ].map((item) => (
                <div key={item.stat} className="bg-stone-50 rounded-2xl p-6">
                  <p className="font-sans text-4xl text-foreground mb-2">{item.stat}</p>
                  <p className="text-sm font-sans text-muted leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="relative aspect-video rounded-2xl mb-16 overflow-hidden bg-stone-100">
            <Image src="/images/event-assistant-app.jpg" alt="Event Assistant App" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: 'Role', value: 'Lead Designer' },
              { label: 'Deliverables', value: 'IA, User Flows, UX, Prototyping, Style Guide, Visual Design' },
              { label: 'Company', value: 'Events.com' },
              { label: 'Platform', value: 'Android (Google Play)' },
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
              Events.com's platform handled ticketing and registration, but check-in — the moment attendees actually arrive — was still painful. Long lines, stressed staff, and day-of volunteers with minimal training created a poor first impression for every event the platform powered.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              A first-party check-in app extended Events.com's value from pre-event to day-of, and created a new competitive moat against point-solution check-in tools.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">The Problem</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              Existing tools required too much setup and had too steep a learning curve for temporary event-day volunteers. At 8am on event morning, there's no time for onboarding. The app needed to be immediately usable by someone who'd never seen it before — under pressure.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">Research</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              I interviewed staff at 5 event organizations across categories — music festivals, marathons, corporate conferences. I also conducted on-site trials at live events and led QA/UAT to test the app in real conditions, not just usability labs.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              Key insight: volunteers didn't want features — they wanted confidence. The app needed to make the right action obvious at every step.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">Key Design Decision: Cut the Attendee Flow</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              The initial prototype was designed for two user types: organizers/volunteers and attendees. Testing revealed the attendee-facing functionality was redundant — attendees wanted to be checked in quickly, not interact with an app themselves.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              I cut the screen count in half by removing the attendee flow entirely. This is a case where the right answer was doing less — and research made that clear rather than gut instinct.
            </p>
            <p className="font-sans text-sm text-muted italic leading-relaxed">
              I ran a second round of validation testing after the cut to confirm the simplified experience was faster and less error-prone under simulated event conditions.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="font-sans text-2xl md:text-3xl text-foreground mb-5">Outcomes & Impact</h2>
            <ul className="space-y-3">
              {[
                'Launched on the Google Play Store and adopted across Events.com\'s customer base',
                'Featured in TechCrunch as a noteworthy event technology product',
                'Post-launch iterations added in-app statistics so organizers could track check-in performance in real time',
                'Volunteer onboarding guides added to the app, reducing the training burden before event day',
              ].map((item) => (
                <li key={item} className="flex gap-3 font-sans text-base text-muted leading-relaxed">
                  <span className="text-accent mt-1 shrink-0">—</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="border-t border-stone-200 pt-12 flex justify-between items-center">
            <Link href="/work/event-home-page" className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200">← Event Home Page</Link>
            <Link href="/work" className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200">All work</Link>
          </div>

      </div>
    </CaasShell>
  )
}

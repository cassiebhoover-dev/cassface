import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Event Home Page — Cassie Hoover',
}

export default function EventHomePage() {
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
            Web Platform · Events.com
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-6">
            Event Home Page
          </h1>
          <p className="text-lg font-sans text-muted leading-relaxed mb-16 max-w-2xl">
            A guided onboarding hub that helped self-service event organizers navigate setup with confidence — reducing confusion and increasing task completion.
          </p>

          <div className="border-t border-stone-200 mb-16" />

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Role</p>
              <p className="text-sm font-sans text-foreground">Primary Designer</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Deliverables</p>
              <p className="text-sm font-sans text-foreground">User Testing, Wireframes, User Flows, Visual Design</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Company</p>
              <p className="text-sm font-sans text-foreground">Events.com</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Type</p>
              <p className="text-sm font-sans text-foreground">Web Platform</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative aspect-video rounded-2xl mb-20 overflow-hidden bg-stone-100">
            <Image src="/images/event-home-page.jpg" alt="Event Home Page" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
          </div>

          {/* Problem */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">The Problem</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              After creating an event on Events.com, self-service users were automatically redirected to the event edit page — a dense interface with no clear guidance on what to do next. New users frequently became lost, unsure which tasks were required and which were optional.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              The result was drop-off during setup, support tickets, and organizers launching incomplete events.
            </p>
          </section>

          {/* Research */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Research</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              I conducted user testing with 10 new users to identify specific pain points in the event creation flow. Sessions revealed that users needed a central hub that distinguished required setup tasks from optional enhancements, and provided real-time feedback on progress.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              Findings informed a new information architecture and user flow focused on progressive disclosure — surfacing the most important tasks first and celebrating completion.
            </p>
          </section>

          {/* Design Solution */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Design Solution</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              The Event Home Page replaced the edit-first experience with a guided checklist-based hub. Each task appeared as an interactive widget with three states:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { state: 'Incomplete', desc: 'Clearly surfaces what still needs attention', color: 'bg-stone-100' },
                { state: 'Completed', desc: 'Provides positive reinforcement and reduces cognitive load', color: 'bg-stone-200' },
                { state: 'Deleted', desc: 'Allows users to dismiss tasks not relevant to their event type', color: 'bg-stone-100' },
              ].map((item) => (
                <div key={item.state} className={`${item.color} rounded-xl p-5`}>
                  <p className="font-sans text-xs font-semibold text-accent tracking-widest uppercase mb-2">{item.state}</p>
                  <p className="font-sans text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="font-sans text-base text-muted leading-relaxed">
              Alongside the checklist, a dashboard panel displayed real-time event metrics: days until the event, ticketing launch date, and tickets sold — giving both new and experienced organizers a quick snapshot of their event status.
            </p>
          </section>

          {/* Outcomes */}
          <section className="mb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Outcomes</h2>
            <ul className="space-y-3 mb-6">
              {[
                'Second-round testing showed users engaged significantly more with the widget-based layout than the previous side navigation',
                'New users successfully completed full event setup without support intervention',
                'Existing users appreciated the quick-snapshot dashboard as an at-a-glance event management tool',
              ].map((item) => (
                <li key={item} className="flex gap-3 font-sans text-base text-muted leading-relaxed">
                  <span className="text-accent mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Nav between projects */}
          <div className="border-t border-stone-200 pt-12 flex justify-between items-center">
            <Link
              href="/work/brand-customization"
              className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200"
            >
              ← Brand Customization
            </Link>
            <Link
              href="/work/event-assistant-app"
              className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200"
            >
              Event Assistant App →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

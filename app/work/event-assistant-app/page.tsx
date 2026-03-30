import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Event Assistant App — Cassie Hoover',
}

export default function EventAssistantApp() {
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
            Mobile App · Events.com
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-6">
            Event Assistant App
          </h1>
          <p className="text-lg font-sans text-muted leading-relaxed mb-16 max-w-2xl">
            A mobile app that helped event organizers efficiently check in attendees — designed for speed, minimal training, and stressed day-of volunteers. Launched on Google Play and featured in TechCrunch.
          </p>

          <div className="border-t border-stone-200 mb-16" />

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Role</p>
              <p className="text-sm font-sans text-foreground">Lead Designer</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Deliverables</p>
              <p className="text-sm font-sans text-foreground">IA, User Flows, UX, Prototyping, Style Guides, Visual Design</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Company</p>
              <p className="text-sm font-sans text-foreground">Events.com</p>
            </div>
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-2">Platform</p>
              <p className="text-sm font-sans text-foreground">Android (Google Play)</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative aspect-video rounded-2xl mb-20 overflow-hidden bg-stone-100">
            <Image src="/images/event-assistant-app.jpg" alt="Event Assistant App" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
          </div>

          {/* Problem */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">The Problem</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              Event check-in is notoriously chaotic. Long queues, stressed organizers, and day-of volunteers with minimal training created a poor experience for both staff and attendees. Existing tools required too much setup time and too steep a learning curve for temporary helpers.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              The solution needed to be fast to learn, resilient under pressure, and require minimal onboarding — because at 8am on event day, there's no time for a tutorial.
            </p>
          </section>

          {/* Research */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Research</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              I interviewed staff at 5 different event organizations across a variety of event categories — from music festivals to corporate conferences. Sessions focused on the check-in workflow, pain points with existing tools, and what volunteers actually needed to do their jobs.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              Research findings shaped the information architecture and user flows. I also conducted on-site trials at live events and led QA/UAT activities to ensure the app held up in real conditions.
            </p>
          </section>

          {/* Design Process */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Design Process</h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              The initial prototype was designed for two user types: organizers and attendees. But testing revealed that the attendee-facing functionality was redundant — attendees just wanted to be checked in quickly, not use an app themselves.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-4">
              I cut the prototype's screen count in half by eliminating the attendee flow entirely, then conducted additional validation testing to confirm the simplified experience was faster and easier for volunteers.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed">
              This is a case where the right answer was to do less — and the research made that clear.
            </p>
          </section>

          {/* Outcomes */}
          <section className="mb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">Outcomes</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Successfully launched on the Google Play Store',
                'Featured in a TechCrunch article covering event technology',
                'Post-launch iterations added in-app statistics for organizers to track check-in performance in real time',
                'Volunteer onboarding guides were added to the app, reducing the training burden before event day',
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
              href="/work/event-home-page"
              className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200"
            >
              ← Event Home Page
            </Link>
            <Link
              href="/#work"
              className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200"
            >
              All work ↑
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

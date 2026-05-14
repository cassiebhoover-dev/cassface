import Link from 'next/link'
import Image from 'next/image'
import CaasShell from '@/components/CaasShell'

export const metadata = {
  title: 'When AI Made Me Slow Down — Cassie Hoover',
}

export default function DesignProcessPrototyping() {
  return (
    <CaasShell urlText="cassie.design — When AI Made Me Slow Down">

      <div className="page-header">
        <div>
          <h1 className="page-header__title">When AI Made Me Slow Down</h1>
          <p className="page-header__subtitle">AI · Internal Tool · Design Team</p>
        </div>
        <div className="header-actions">
          <Link href="/work" className="caas-btn">← Case Studies</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto" style={{ paddingBottom: 40 }}>

        {/* Hero */}
        <div className="border-l border-foreground/15 pl-8 mb-16">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-4">AI &middot; Internal Tool &middot; Design Team</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
            When AI Made Me Slow Down
          </h1>
          <p className="font-sans text-base text-muted leading-relaxed max-w-2xl">
            How building a tool to speed up my design process ended up forcing me to do the work I was skipping. And why that changed everything.
          </p>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20 border-l border-foreground/15 pl-8">
          {[
            { label: 'Role', value: 'Senior Product Designer' },
            { label: 'Project Type', value: 'Internal Tool · Design Team' },
            { label: 'Tools', value: 'Claude AI, Figma, custom workflow' },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted mb-2">{m.label}</p>
              <p className="text-sm font-sans text-foreground">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Hero image */}
        <div className="relative aspect-video rounded-2xl mb-20 overflow-hidden border border-sand/30">
          <Image
            src="/images/design-process-hero.svg"
            alt="Design Process and Prototyping workflow tool"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* The Problem */}
        <section className="mb-20">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">The Problem</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
            AI made it too easy to skip the work that actually matters.
          </h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            When AI tools became part of my workflow, my process quietly fell apart. Not all at once. Just the beginning parts. Instead of starting with research or writing a proper problem statement, I&apos;d open a prompt and start describing what I wanted to build. Claude would give me something back in seconds. It felt productive.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            Why spend time mapping a user flow when you can just describe the interaction and get a response? Why document pain points when you can jump straight to exploring solutions? The AI made those early steps feel optional, because the output kept coming regardless.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-8">
            The work looked fine on the surface. Layouts, copy, wireframe directions, all generated fast. But none of it was grounded in anything. I hadn&apos;t defined the real problem. I didn&apos;t have a clear picture of the user. I was producing output without doing the thinking that should come before it.
          </p>

          {/* Pull quote with label */}
          <div className="border-l-4 border-accent pl-6 py-4 bg-warm/30 rounded-r-xl mb-8">
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-accent mb-3">The Honest Diagnosis</p>
            <p className="font-serif text-lg text-foreground italic leading-relaxed">
              &ldquo;I was designing fast. I wasn&apos;t designing well. There&apos;s a difference.&rdquo;
            </p>
          </div>

          <p className="font-sans text-base text-muted leading-relaxed">
            The speed wasn&apos;t the problem. The problem was that the speed gave me permission to skip steps I should have been taking. The user had disappeared from the process entirely, and I hadn&apos;t noticed.
          </p>
        </section>

        {/* The Insight */}
        <section className="mb-20">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">The Insight</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
            What if the tool itself refused to let me cut corners?
          </h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            The issue wasn&apos;t that I lacked knowledge. I knew exactly what good process looked like. The issue was friction: doing the upfront work felt slow, especially when I was confident I already knew the answer.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed">
            So I built something designed to create friction in the right places. The Design Process &amp; Prototyping project is an AI-powered workflow tool that walks through every phase of a design project, but it won&apos;t let you advance until you&apos;ve actually done the thinking. It&apos;s structured around gates.
          </p>
        </section>

        {/* How It Works — card grid */}
        <section className="mb-20">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">How It Works</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
            A gated process that earns its way forward.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {[
              { type: 'phase', label: 'Phase 01', name: 'Problem framing', desc: 'Define the real problem, not just the symptom. Who is affected and why does it matter?' },
              { type: 'gate', label: 'Gate ↓', name: 'User research', desc: 'Document actual user needs and pain points before any solution thinking begins.' },
              { type: 'phase', label: 'Phase 02', name: 'User flows', desc: 'Map the journey your user takes: every decision point, every moment of friction.' },
              { type: 'gate', label: 'Gate ↓', name: 'Review & challenge', desc: 'Claude pushes back. Gaps get surfaced. Assumptions get named.' },
              { type: 'phase', label: 'Phase 03', name: 'Wireframe exploration', desc: 'Multiple directions, not just the first idea. Structure before style.' },
              { type: 'gate', label: 'Gate ↓', name: 'Final output', desc: 'Only when all gates are cleared does the real design work begin.' },
            ].map((card) => (
              <div
                key={card.label + card.name}
                className="rounded-2xl p-5"
                style={card.type === 'gate'
                  ? { background: '#EEF3FF', border: '1.5px solid #C7D4F8' }
                  : { background: '#F0EBE5', border: '1.5px solid #DDD5CA' }
                }
              >
                <p className="text-[10px] font-sans tracking-[0.15em] uppercase mb-3"
                  style={{ color: card.type === 'gate' ? '#5B7BE8' : '#8A8A8A' }}>
                  {card.label}
                </p>
                <h3 className="font-sans text-sm font-semibold mb-2"
                  style={{ color: card.type === 'gate' ? '#3B5BD5' : '#2C2C2C' }}>
                  {card.name}
                </h3>
                <p className="font-sans text-xs text-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-sans text-base text-muted leading-relaxed">
            The gates aren&apos;t arbitrary checkboxes. They&apos;re built around the questions a good design critic would ask: the kind of questions a senior peer or a product manager would raise in a review. If your answer is thin, the tool won&apos;t let you move on. You have to actually think it through.
          </p>
        </section>

        {/* The Claude Factor — chat UI */}
        <section className="mb-20">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">The Claude Factor</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            An AI that argues back.
          </h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-8">
            The most important design decision in this project wasn&apos;t visual, it was behavioral. Claude doesn&apos;t just receive your answers and nod along. It actively looks for holes. Here&apos;s what that looks like in practice:
          </p>

          {/* Chat container */}
          <div className="rounded-2xl border border-sand/40 overflow-hidden mb-6">
            <div className="bg-warm/50 px-5 py-3 border-b border-sand/30">
              <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted">Example: Problem Framing Gate</p>
            </div>
            <div className="p-6 space-y-4 bg-white/60">

              {/* User message */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-3"
                  style={{ background: '#DBEAFE', color: '#1E40AF' }}>
                  <p className="font-sans text-sm leading-relaxed">
                    Users are frustrated with the onboarding flow. I want to redesign it to be simpler and faster.
                  </p>
                </div>
              </div>

              {/* Claude response */}
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-3 bg-warm/40 border border-sand/30">
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    That&apos;s a direction, not a problem statement. A few things I&apos;d want to understand before we move forward: What specific part of onboarding causes frustration: is it the length, the information being asked for, or something else? How do you know it&apos;s frustration and not confusion? And who exactly is &ldquo;users&rdquo; here: new signups, returning users who got logged out, or someone else? The solution looks very different depending on those answers.
                  </p>
                </div>
              </div>

              {/* Gate not cleared pill */}
              <div className="flex justify-center">
                <span className="inline-block rounded-full px-4 py-1.5 text-xs font-sans font-medium"
                  style={{ background: '#FEE2E2', color: '#B91C1C' }}>
                  Gate not cleared. Please address the open questions to continue.
                </span>
              </div>

              {/* User reply */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-3"
                  style={{ background: '#DBEAFE', color: '#1E40AF' }}>
                  <p className="font-sans text-sm leading-relaxed">
                    Fair. The frustration is primarily from new users who drop off during account setup, specifically the step where we ask for company size and role. Research shows they don&apos;t understand why we&apos;re asking.
                  </p>
                </div>
              </div>

              {/* Claude cleared */}
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-3 bg-warm/40 border border-sand/30">
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    That&apos;s much more specific. Now we have a real problem: users are abandoning a required field because the value exchange isn&apos;t clear. They don&apos;t know why you need it or what they get in return. That&apos;s a communication problem as much as a design one. You can move to the next phase.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <p className="font-sans text-base text-muted leading-relaxed">
            This kind of friction is exactly what&apos;s missing when I design alone. When I&apos;m in flow, I skip past the questions I can&apos;t immediately answer. This forces me to stop, sit with the discomfort, and actually resolve it.
          </p>
        </section>

        {/* Before & After */}
        <section className="mb-20">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">Before &amp; After</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
            What changed about how I work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/60 border border-sand/40 rounded-2xl p-6">
              <p className="text-[10px] font-sans tracking-[0.2em] uppercase font-semibold mb-5"
                style={{ color: '#B91C1C' }}>Before</p>
              <ul className="space-y-3">
                {[
                  'Jumped straight to high-fidelity',
                  'One concept, refined quickly',
                  'Research happened after decisions',
                  'User needs assumed, not documented',
                  'Fast output, shallow foundation',
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-baseline">
                    <span className="shrink-0 font-sans text-sm font-bold" style={{ color: '#B91C1C' }}>×</span>
                    <p className="font-sans text-sm text-muted leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/60 border border-sand/40 rounded-2xl p-6">
              <p className="text-[10px] font-sans tracking-[0.2em] uppercase font-semibold mb-5"
                style={{ color: '#166534' }}>After</p>
              <ul className="space-y-3">
                {[
                  'Research and framing happen first',
                  'Multiple directions explored',
                  'User flows documented before wireframes',
                  'Assumptions surfaced and challenged',
                  'Slower start, stronger finish',
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-baseline">
                    <span className="shrink-0 font-sans text-sm font-bold" style={{ color: '#166534' }}>+</span>
                    <p className="font-sans text-sm text-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-20">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">What I Learned</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
            The tool taught me something about myself.
          </h2>
          <p className="font-sans text-base text-muted leading-relaxed mb-4">
            I built this project to work faster. What it actually did was make me realize how often &ldquo;fast&rdquo; was just me avoiding the uncomfortable parts of design, the parts where I didn&apos;t know the answer yet.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-8">
            The gates aren&apos;t punitive. They&apos;re mirrors. Every time I couldn&apos;t pass one, it was because I was trying to skip something I genuinely hadn&apos;t figured out. The tool just made that visible instead of letting me bury it in a Figma file.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed mb-8">
            There&apos;s a version of AI-assisted design that makes you lazier. It handles the thinking so you don&apos;t have to. This project is a deliberate reaction to that. It uses AI not to replace the thinking, but to hold you accountable for doing it.
          </p>

          {/* Pull quote with label */}
          <div className="border-l-4 border-accent pl-6 py-4 bg-warm/30 rounded-r-xl">
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-accent mb-3">The Takeaway</p>
            <p className="font-serif text-lg text-foreground italic leading-relaxed">
              &ldquo;Good design process isn&apos;t about slowing down. It&apos;s about knowing exactly what you&apos;re skipping, and having the honesty to go back and do it.&rdquo;
            </p>
          </div>
        </section>

        {/* Outcomes — icon card grid */}
        <section className="mb-24">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">Outcomes</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
            What this project produces.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: 'User-first thinking, enforced',
                desc: 'Pain points and user needs are documented before a single screen is designed.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                title: 'Multiple concepts, not one',
                desc: 'The wireframe phase requires exploring different directions before committing.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                title: 'Assumptions surfaced early',
                desc: "Claude's pushback exposes gaps in thinking before they become design decisions.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                ),
                title: 'A documented process artifact',
                desc: 'Every project leaves behind a clear record of the thinking, not just the output.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/60 border border-sand/40 rounded-2xl p-6">
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="font-sans text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-foreground/10 pt-8 flex justify-between items-center">
          <Link href="/work/cowork-people-management" className="text-xs font-sans tracking-[0.15em] uppercase text-muted hover:text-foreground transition-colors duration-200">← Automating People Management</Link>
          <Link href="/work" className="text-xs font-sans tracking-[0.15em] uppercase text-muted hover:text-foreground transition-colors duration-200">All work</Link>
        </div>

      </div>
    </CaasShell>
  )
}

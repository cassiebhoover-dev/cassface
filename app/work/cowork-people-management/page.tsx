import Link from 'next/link'
import Image from 'next/image'
import CaasShell from '@/components/CaasShell'

export const metadata = {
  title: 'Automating People Management — Cassie Hoover',
}

export default function CoworkPeopleManagement() {
  return (
    <CaasShell urlText="cassie.design — Automating People Management">

      <div className="page-header">
        <div>
          <h1 className="page-header__title">Automating People Management</h1>
          <p className="page-header__subtitle">AI · Claude Cowork · 2025</p>
        </div>
        <div className="header-actions">
          <Link href="/work" className="caas-btn">← Case Studies</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto" style={{ paddingBottom: 40 }}>

          <div className="border-l border-foreground/15 pl-8 mb-16">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-4">AI &middot; People Management &middot; Case Study</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Using Claude Cowork to Automate People Management
            </h1>
            <p className="font-sans text-base text-muted leading-relaxed max-w-2xl">
              How a Design Manager at Drata built a repeatable, AI-powered workflow for 1:1 prep, career tracking, and promotion readiness — then shared it with her team.
            </p>
          </div>

          {/* Hero image */}
          <div className="relative aspect-video rounded-2xl mb-20 overflow-hidden border border-sand/30">
            <Image
              src="/images/People-Managment.png"
              alt="Automating People Management"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-l border-foreground/15 pl-8">
            {[
              { label: 'Role', value: 'Design Manager, AppDev' },
              { label: 'Company', value: 'Drata' },
              { label: 'Type', value: 'Workflow Automation' },
              { label: 'Timeline', value: 'March–April 2026' },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted mb-2">{m.label}</p>
                <p className="text-sm font-sans text-foreground">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">Overview</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                The problem with managing well
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                Managing a team well takes time that managers rarely have. Keeping track of each direct report&apos;s goals, accomplishments, and growth trajectory — while also showing up prepared to every 1:1 — is an ongoing coordination challenge on top of an already full job.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                What started as an experiment with a single direct report&apos;s career page grew into a fully automated people management system. Today, every Monday morning, Claude reads my direct reports&apos; Notion pages, updates their career documents, and posts ready-to-read 1:1 prep briefs to a private Slack channel before the week begins. I also extended the same pattern to my own career growth, using Claude to read my weekly work notes and maintain a living promotion case mapped against Drata&apos;s management competency framework.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                This case study documents how that system was built — step by step, tool by tool — and how I then packaged it into a guide for other managers to adopt.
              </p>
            </div>
          </section>

          {/* The Starting Point */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">The Starting Point</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Three designers, three growth paths
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                I manage three Product Designers at Drata, each with their own level and target:
              </p>
              <div className="overflow-hidden rounded-2xl border border-sand/30 mb-6">
                <table className="w-full text-sm font-sans">
                  <thead>
                    <tr className="bg-warm/40">
                      <th className="text-left p-4 text-[10px] tracking-[0.2em] uppercase text-muted font-normal">Direct Report</th>
                      <th className="text-left p-4 text-[10px] tracking-[0.2em] uppercase text-muted font-normal">Current &rarr; Target Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Felicia Hou', level: 'P5 (Senior Product Designer) → P6' },
                      { name: 'Marce Espinosa', level: 'P6 (Senior Product Designer) → P7' },
                      { name: 'Nicole Tenny', level: 'P7 → P8' },
                    ].map((r, i) => (
                      <tr key={r.name} className={i < 2 ? 'border-b border-sand/20' : ''}>
                        <td className="p-4 text-foreground font-medium">{r.name}</td>
                        <td className="p-4 text-muted">{r.level}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Each person had a Notion page with their role, goals, and 1:1 notes. But turning those raw notes into structured career tracking — mapping work to Drata&apos;s competency framework, assessing promotion readiness, logging accomplishments — required significant manual effort after every meeting. My question: could Claude do that work automatically, so I could spend my time on the conversations themselves rather than the documentation?
              </p>
            </div>
          </section>

          {/* Phase 1 */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">Phase 1</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Building the template
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                I started by working with Claude to co-design a consistent Notion page structure for each direct report. Rather than building it top-down, I described what information I wanted to track and let Claude suggest how to organize it. The result was a template with two kinds of sections: ones I own and write to, and ones Claude maintains automatically.
              </p>

              <div className="overflow-hidden rounded-2xl border border-sand/30 mb-6">
                <table className="w-full text-sm font-sans">
                  <thead>
                    <tr className="bg-warm/40">
                      <th className="text-left p-4 text-[10px] tracking-[0.2em] uppercase text-muted font-normal">Section</th>
                      <th className="text-left p-4 text-[10px] tracking-[0.2em] uppercase text-muted font-normal">Who Manages It</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { section: 'Header (role, level, target level, manager, start date)', owner: 'Cassie' },
                      { section: 'Goals (current quarter + longer-term)', owner: 'Cassie' },
                      { section: '1:1 Notes (running log of meeting dates and topics)', owner: 'Cassie' },
                      { section: 'Manager Notes (private context, coaching observations)', owner: 'Cassie only — Claude never reads or writes here' },
                      { section: 'Accomplishments Log (chronological wins by month)', owner: 'Claude — updated weekly from 1:1 notes' },
                      { section: 'Competency Snapshot (table: current evidence vs. gap)', owner: 'Claude — maps work to Drata\'s competency framework' },
                      { section: 'Promotion Readiness (rating, strengths, gaps, 30-day focus)', owner: 'Claude — synthesized from all other sections' },
                    ].map((r, i) => (
                      <tr key={r.section} className={i < 6 ? 'border-b border-sand/20' : ''}>
                        <td className="p-4 text-foreground">{r.section}</td>
                        <td className="p-4 text-muted">{r.owner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                The three Claude-maintained sections are what make the system valuable. Rather than manually updating a career tracker after every 1:1, Claude reads the notes section each week and writes evidence-based analysis. The Competency Snapshot maps each person&apos;s recent work directly to Drata&apos;s five competency areas — Product Strategy &amp; Craft, Execution &amp; Grit, Data &amp; AI, Communication &amp; Collaboration, and Leadership — at both their current and target levels. The Promotion Readiness section translates that into a plain-language readiness rating, specific strengths, development gaps, and a concrete 30-day focus.
              </p>

              <div className="bg-white/50 border border-sand/30 rounded-2xl p-6 mt-6">
                <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted mb-3">Example — Felicia&apos;s Competency Snapshot (Data &amp; AI)</p>
                <p className="font-sans text-sm text-muted leading-relaxed mb-2">
                  <span className="text-foreground font-medium">Current evidence:</span> Synthesizes research from Gong calls, ProductBoard, stakeholder workshops, and usability tests. No documented AI tool usage to date.
                </p>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  <span className="text-foreground font-medium">Gap / next step:</span> Biggest gap. July 2026 goal requires 2 AI training sessions and a documented workflow improvement. April check-in approaching with no progress evidenced. Needs immediate focus.
                </p>
              </div>
            </div>
          </section>

          {/* Phase 2 */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">Phase 2</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Automating the weekly 1:1 brief
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                With the template in place, I set up a recurring scheduled task for each direct report. Every Monday morning at 8am, Claude automatically:
              </p>
              <ul className="space-y-3 ml-1 mb-6">
                {[
                  'Reads the direct report\'s Notion Career & Growth page',
                  'Updates the three maintained sections (Accomplishments Log, Competency Snapshot, Promotion Readiness) based on any new 1:1 notes',
                  'Posts a concise prep brief to a private Slack channel with the person\'s current standing, key talking points, and any areas that need attention',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent mt-1.5 text-xs">&bull;</span>
                    <p className="font-sans text-sm text-muted leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm text-muted leading-relaxed">
                The result is that I start every week with three structured prep briefs already waiting in Slack — one for each direct report — before I&apos;ve had my first coffee. The briefs aren&apos;t just reminders: they&apos;re specific, evidence-grounded summaries that surface what&apos;s changed, what&apos;s progressing, and what warrants attention in that week&apos;s conversation.
              </p>
            </div>
          </section>

          {/* Phase 3 */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">Phase 3</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Giving direct reports a voice
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                After setting up the automation for all three direct reports, one of them — Felicia — mentioned in a 1:1 that she&apos;d love to be able to add to the pages that feed into her career review. She wanted a place to log her own accomplishments between meetings, note blockers, and share what she was working on without waiting for me to document it.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                This was a good piece of feedback: a system that only I could write to was missing the person most invested in the outcome.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                The solution was to create shared Notion pages — one for each direct report — that both people could write to freely. Each shared page has two sections: an Accomplishments section for logging wins in their own words, and an Ongoing Notes space for anything worth capturing between meetings.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed">
                These shared pages now feed into each person&apos;s career review documentation. When Claude reads the Career &amp; Growth page each Monday, it also picks up anything added to the shared page that week, incorporating it into the Accomplishments Log and Promotion Readiness analysis. The direct reports have real agency in shaping how their work is represented, and the automated workflow becomes a collaboration rather than something done to them.
              </p>
            </div>
          </section>

          {/* Phase 4 */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">Phase 4</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Turning the pattern on myself
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                Once the system was running for my direct reports, I realized the same logic applied to my own career growth. I had been keeping a detailed weekly digest in Notion for months — a running log of everything I&apos;d done each week as a manager and designer, going back to October 2025. The document was rich with evidence, but turning it into a structured case for my own promotion required hours of work I hadn&apos;t found time for.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                I asked Claude to read my Weekly Digest and use it to create a living promotion case document, mapped against Drata&apos;s M7 Group Manager competency framework. The result was a detailed, evidence-backed document covering all five competency areas: Product Strategy &amp; Craft, Execution &amp; Grit, Data &amp; AI, Communication &amp; Collaboration, and Leadership.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                For each criterion, Claude pulled specific evidence directly from the weekly notes — named projects, dated actions, manager decisions, and team moments. The document includes a Competency Scorecard showing all 20 criteria met, a detailed evidence section for each competency, an Areas to Develop section identifying the remaining gaps, and a summary that makes the case for promotion in my own voice.
              </p>

              <div className="bg-white/50 border border-sand/30 rounded-2xl p-6">
                <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted mb-3">From the promotion case — Data &amp; AI</p>
                <p className="font-sans text-sm text-muted leading-relaxed italic">
                  &ldquo;The single strongest M7 signal in this document. Won the company Hackathon with an AI project. Led the full team AI mini-sprint. Delivered AI sizzle projects for Events and Action Panel. Built agentic AI provocations for Connections and Azure. Designed AI CoPilot vision for Monitoring. This is sustained, cross-surface AI product leadership over 6 months.&rdquo;
                </p>
              </div>

              <p className="font-sans text-sm text-muted leading-relaxed mt-6">
                The document is now a living artifact. As I add to my Weekly Digest each week, Claude can re-read it and update the promotion case with new evidence. I no longer have to choose between doing the work and documenting the work.
              </p>
            </div>
          </section>

          {/* Phase 5 */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">Phase 5</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5 leading-tight">
                Building a guide for other managers
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                By the time the full system was running, I had built something replicable. Other managers on my team — particularly in the AppDev Engineering Managers group — asked how I&apos;d set it up and whether they could adopt the same workflow.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                Rather than explaining it from scratch in each conversation, I worked with Claude to build a how-to guide documenting the entire process. The guide covers:
              </p>
              <ul className="space-y-3 ml-1">
                {[
                  'How to create a private Slack channel and add the Claude integration so prep briefs post there automatically',
                  'The full Notion page template with every section, noting which ones Claude manages and which ones the manager owns',
                  'Copy-paste prompts for the first-time setup, scheduling the weekly automation, running it on demand, and logging wins',
                  'Tips for getting the best output (the richer the 1:1 notes, the better Claude\'s analysis)',
                  'Troubleshooting steps for common issues (missing permissions, pages Claude can\'t find, paused scheduled tasks)',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent mt-1.5 text-xs">&bull;</span>
                    <p className="font-sans text-sm text-muted leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm text-muted leading-relaxed mt-6">
                The guide is written so that any manager can follow it cold — no prior experience with Cowork or automation required.
              </p>
            </div>
          </section>

          {/* What Changed */}
          <section className="mb-20">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">What Changed</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                The impact
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: '1:1 meetings are more substantive',
                    description: 'Walking in with a structured prep brief that includes specific competency evidence and a suggested 30-day focus means conversations are less about "what are you working on" and more about the things that actually matter for someone\'s growth.',
                  },
                  {
                    title: 'Career tracking is no longer a catch-up exercise',
                    description: 'The Accomplishments Log and Competency Snapshot update continuously, so there\'s never a moment where I have to reconstruct what someone did over the past six months before a review cycle.',
                  },
                  {
                    title: 'Direct reports have more ownership over their own growth narrative',
                    description: 'The shared Notion pages give them a place to contribute to the documentation of their work, rather than having it entirely mediated through their manager.',
                  },
                  {
                    title: 'My own promotion case writes itself over time',
                    description: 'The Weekly Digest feeds into the living promotion document, so building the case for M7 is something that happens incrementally rather than in a stressful pre-review sprint.',
                  },
                  {
                    title: 'The workflow is spreading',
                    description: 'Other managers now have a guide they can follow to build the same system for their own teams.',
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-sans text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="font-sans text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Appendix */}
          <section className="mb-24">
            <div className="border-l border-foreground/15 pl-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">Appendix</p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 leading-tight">
                Key prompts that power the workflow
              </h2>
              <div className="space-y-6">
                {[
                  {
                    label: 'First-time template setup',
                    prompt: 'I\'d like you to look at [Name]\'s Notion Career & Growth page and update it. Their current level is [e.g. P5] and their target level is [e.g. P6]. Please update or create these three sections:\n• Competency Snapshot — a table mapping their work to the Drata competency framework\n• Promotion Readiness — an overall readiness rating, summary, key strengths, areas to develop, and a suggested 30-day focus\n• Accomplishments Log — chronological entries pulled from their 1:1 notes, organized by month\nAfter updating Notion, post a message to [#channel-name] in Slack with a summary and 3–5 key talking points for our upcoming 1:1.',
                  },
                  {
                    label: 'Scheduling the weekly automation',
                    prompt: 'Every Monday morning at [time], can you look at [Name]\'s Notion Career & Growth page, update it, and post their 1:1 prep notes to [#channel-name] in Slack?',
                  },
                  {
                    label: 'Building the self-promotion case',
                    prompt: 'Can you read my Weekly Digest in Notion and use it to build a promotion case document mapped against the M7 Group Manager competency framework? For each criterion, pull specific evidence from my notes. Include a scorecard, a section for each competency with evidence, and a summary. Also identify any areas where the evidence is thin and suggest how I could close those gaps.',
                  },
                  {
                    label: 'On-demand run before a specific 1:1',
                    prompt: 'I have a 1:1 with [Name] tomorrow. Can you pull their Notion page, update it, and post a prep brief to [#channel-name] in Slack?',
                  },
                ].map((item) => (
                  <div key={item.label} className="bg-white/50 border border-sand/30 rounded-2xl p-6">
                    <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted mb-3">{item.label}</p>
                    <p className="font-sans text-sm text-muted leading-relaxed whitespace-pre-line">{item.prompt}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="border-t border-foreground/10 pt-8 flex justify-between items-center">
            <Link href="/work/custom-fields-and-formulas" className="text-xs font-sans tracking-[0.15em] uppercase text-muted hover:text-foreground transition-colors duration-200">← Custom Fields &amp; Formulas</Link>
            <Link href="/work" className="text-xs font-sans tracking-[0.15em] uppercase text-muted hover:text-foreground transition-colors duration-200">All work</Link>
          </div>

      </div>
    </CaasShell>
  )
}

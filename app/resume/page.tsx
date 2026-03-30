import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Resume — Cassie Hoover',
}

const experience = [
  {
    company: 'Drata',
    title: 'Senior Product Designer 2',
    dates: '2023 – Present',
    bullets: [
      'Led Design Operations improvements using the Double Diamond framework',
      'Created company Design Principles through cross-functional stakeholder workshops',
      'Led Monitoring & Remediation redesign informed by 20+ customer interviews',
      'Peer-voted "Best UX" award recipient two consecutive years',
    ],
  },
  {
    company: 'nCino',
    title: 'Principal Product Designer',
    dates: '2020 – 2023',
    bullets: [
      'Led design across 5 scrum teams supporting 30,000+ financial professionals',
      'Conducted 50+ user interviews and usability tests to inform product direction',
      'Increased feature adoption by 25% through targeted workflow improvements',
      'Built 20+ reusable components that scaled across the design system',
    ],
  },
  {
    company: 'Events.com',
    title: 'Senior Product Designer',
    dates: '2014 – 2020',
    bullets: [
      'Designed product features supporting revenue growth from $0 to $100M',
      'Conducted usability studies with 100+ customers to drive data-informed decisions',
      'Reduced design debt by 30% through a consolidated brand standards system',
      'Led design for mobile and white-labeled app experiences',
    ],
  },
  {
    company: 'SaveOnResorts.com LLC',
    title: 'UX Designer',
    dates: '2013 – 2014',
    bullets: [
      'Designed systems serving 70,000 members within 6 months of launch',
      'Created style guides for 6 company brands',
      'Built functional wireframes using HTML and CSS',
    ],
  },
  {
    company: 'Treeline Interactive',
    title: 'Interaction Designer',
    dates: '2011 – 2013',
    bullets: [
      'Designed iOS and Android apps for 6 ski resort clients',
      'Managed 4 client accounts end-to-end',
    ],
  },
]

const skills = [
  'Information Architecture',
  'Interaction Design',
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'Journey Mapping',
  'Accessibility (WCAG)',
  'Usability Testing',
  'User Research',
  'UX Strategy',
  'Stakeholder Workshops',
  'Agile / Scrum',
  'SaaS Product Design',
  'Human-Centered Design',
]

const tools = [
  'Figma',
  'Dovetail',
  'Sketch',
  'Axure',
  'Miro',
  'Photoshop',
  'Illustrator',
  'HTML / CSS',
]

export default function Resume() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center text-sm font-sans text-muted hover:text-foreground transition-colors duration-200 mb-12"
          >
            ← Back to portfolio
          </Link>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
            <div>
              <p className="text-xs font-sans text-accent tracking-widest uppercase mb-3">Resume</p>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
                Cassie Hoover
              </h1>
              <p className="font-sans text-base text-muted mt-2">Senior Product Designer & Design Lead</p>
            </div>
            <div className="text-sm font-sans text-muted space-y-1 sm:text-right">
              <p>Wilmington, NC</p>
              <a href="mailto:cassiebhoover@gmail.com" className="block hover:text-foreground transition-colors duration-200">cassiebhoover@gmail.com</a>
              <a href="https://linkedin.com/in/cassie-hoover-3310141a/" target="_blank" rel="noopener noreferrer" className="block hover:text-foreground transition-colors duration-200">LinkedIn ↗</a>
            </div>
          </div>

          <div className="border-t border-stone-200 mb-12 mt-8" />

          {/* Summary */}
          <section className="mb-14">
            <p className="font-sans text-base text-muted leading-relaxed">
              Principal Product Designer with 10+ years of experience designing and scaling SaaS applications for enterprise and consumer markets. Equally comfortable leading teams and shipping pixel-perfect work as an individual contributor.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl text-foreground mb-8">Experience</h2>
            <div className="space-y-10">
              {experience.map((role) => (
                <div key={role.company}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-sans font-semibold text-foreground">{role.company}</h3>
                      <p className="text-sm font-sans text-muted">{role.title}</p>
                    </div>
                    <span className="text-xs font-sans text-accent tracking-wide shrink-0">{role.dates}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm font-sans text-muted leading-relaxed">
                        <span className="text-accent shrink-0 mt-0.5">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-stone-200 mb-14" />

          {/* Skills & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
            <section>
              <h2 className="font-serif text-2xl text-foreground mb-6">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="text-sm font-sans border border-stone-300 text-foreground px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-foreground mb-6">Tools</h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="text-sm font-sans border border-stone-300 text-foreground px-3 py-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="border-t border-stone-200 mb-14" />

          {/* Education */}
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-6">Education</h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="font-sans font-semibold text-foreground">West Virginia University</h3>
                <p className="text-sm font-sans text-muted">Bachelor of Fine Arts · Magna Cum Laude</p>
              </div>
              <span className="text-xs font-sans text-accent tracking-wide shrink-0">2010</span>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}

interface CaseStudy {
  tag: string
  title: string
  description: string
  bgColor: string
}

const caseStudies: CaseStudy[] = [
  {
    tag: 'Mobile App',
    title: 'Redesigning Onboarding for 40% Better Activation',
    description: "Led end-to-end UX for a fintech startup's mobile onboarding flow.",
    bgColor: 'bg-stone-100',
  },
  {
    tag: 'Design System',
    title: 'Building a Component Library at Scale',
    description: 'Created a unified design system adopted across 6 product teams.',
    bgColor: 'bg-stone-200',
  },
  {
    tag: 'Web Platform',
    title: 'From Research to Launch in 10 Weeks',
    description: 'Rapid product design for a B2B SaaS dashboard from 0 to 1.',
    bgColor: 'bg-stone-100',
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-sans text-accent tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group flex flex-col"
            >
              {/* Image placeholder */}
              <div
                className={`${study.bgColor} aspect-video rounded-xl mb-5 overflow-hidden`}
              />

              {/* Card content */}
              <div className="flex flex-col flex-1">
                <span className="text-xs font-sans font-medium text-accent tracking-widest uppercase mb-2">
                  {study.tag}
                </span>
                <h3 className="font-serif text-xl text-foreground leading-snug mb-2">
                  {study.title}
                </h3>
                <p className="text-sm font-sans text-muted leading-relaxed mb-4 flex-1">
                  {study.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200 self-start"
                >
                  View case study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

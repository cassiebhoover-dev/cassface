import Link from 'next/link'
import Image from 'next/image'

interface CaseStudy {
  slug: string
  tag: string
  title: string
  description: string
  image: string
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'automated-reviews',
    tag: 'FinTech SaaS · nCino',
    title: 'Automated Reviews',
    description: 'Streamlining annual client review workflows for financial institutions through automation and continuous monitoring.',
    image: '/images/automated-reviews.jpg',
  },
  {
    slug: 'draw-schedules',
    tag: 'FinTech SaaS · nCino',
    title: 'Draw Schedules',
    description: 'Enabling relationship managers to factor loan draw schedules into price optimization for construction loans.',
    image: '/images/draw-schedules.jpg',
  },
  {
    slug: 'brand-customization',
    tag: 'Design Systems · nCino',
    title: 'Brand Customization',
    description: 'Giving financial institutions the tools to customize their nCino experience to reflect their own brand identity.',
    image: '/images/brand-customization.jpg',
  },
  {
    slug: 'event-home-page',
    tag: 'Web Platform · Events.com',
    title: 'Event Home Page',
    description: 'A guided onboarding hub that helped self-service event organizers navigate setup with confidence.',
    image: '/images/event-home-page.jpg',
  },
  {
    slug: 'event-assistant-app',
    tag: 'Mobile App · Events.com',
    title: 'Event Assistant App',
    description: 'A mobile check-in app for event organizers — launched on Google Play and featured in TechCrunch.',
    image: '/images/event-assistant-app.jpg',
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="border-l border-foreground/15 pl-8 mb-16">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">
            Selected Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
            Case Studies
          </h2>
        </div>

        {/* Top row — 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {caseStudies.slice(0, 2).map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group block bg-white/50 border border-sand/30 rounded-2xl overflow-hidden hover:bg-white/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-warm/30">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted">
                  {study.tag}
                </span>
                <h3 className="font-serif text-xl text-foreground leading-snug mt-2 mb-2">
                  {study.title}
                </h3>
                <p className="text-sm font-sans text-muted leading-relaxed">
                  {study.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.slice(2).map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group block bg-white/50 border border-sand/30 rounded-2xl overflow-hidden hover:bg-white/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-warm/30">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted">
                  {study.tag}
                </span>
                <h3 className="font-serif text-lg text-foreground leading-snug mt-2 mb-1.5">
                  {study.title}
                </h3>
                <p className="text-sm font-sans text-muted leading-relaxed">
                  {study.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

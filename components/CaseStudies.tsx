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
            <div key={study.slug} className="group flex flex-col">
              <div className="relative aspect-video rounded-xl mb-5 overflow-hidden bg-stone-100">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
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
                <Link
                  href={`/work/${study.slug}`}
                  className="text-sm font-sans text-foreground border-b border-transparent hover:border-foreground transition-all duration-200 self-start"
                >
                  View case study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

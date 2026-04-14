import Link from 'next/link'
import Image from 'next/image'

interface CaseStudy {
  slug: string
  tag: string
  title: string
  description: string
  image: string
  color: string
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'automated-reviews',
    tag: 'FinTech SaaS · nCino',
    title: 'Automated Reviews',
    description: 'Streamlining annual client review workflows for financial institutions through automation and continuous monitoring.',
    image: '/images/automated-reviews.jpg',
    color: 'bg-dusk',
  },
  {
    slug: 'draw-schedules',
    tag: 'FinTech SaaS · nCino',
    title: 'Draw Schedules',
    description: 'Enabling relationship managers to factor loan draw schedules into price optimization for construction loans.',
    image: '/images/draw-schedules.jpg',
    color: 'bg-sunset',
  },
  {
    slug: 'brand-customization',
    tag: 'Design Systems · nCino',
    title: 'Brand Customization',
    description: 'Giving financial institutions the tools to customize their nCino experience to reflect their own brand identity.',
    image: '/images/brand-customization.jpg',
    color: 'bg-goldenrod',
  },
  {
    slug: 'event-home-page',
    tag: 'Web Platform · Events.com',
    title: 'Event Home Page',
    description: 'A guided onboarding hub that helped self-service event organizers navigate setup with confidence.',
    image: '/images/event-home-page.jpg',
    color: 'bg-bubblegum',
  },
  {
    slug: 'event-assistant-app',
    tag: 'Mobile App · Events.com',
    title: 'Event Assistant App',
    description: 'A mobile check-in app for event organizers — launched on Google Play and featured in TechCrunch.',
    image: '/images/event-assistant-app.jpg',
    color: 'bg-periwinkle',
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-12 right-0 w-48 h-48 rounded-full bg-goldenrod/10" />
      <div className="absolute bottom-24 -left-12 w-36 h-36 rounded-full bg-periwinkle/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14">
          <p className="text-sm font-sans text-sunset tracking-widest uppercase mb-4 font-medium">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Selected Work
          </h2>
        </div>

        {/* Top row — 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {caseStudies.slice(0, 2).map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group block rounded-4xl overflow-hidden bg-white border border-stone-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`relative aspect-[4/3] overflow-hidden ${study.color}/10`}>
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-sans font-medium text-sunset tracking-widest uppercase">
                  {study.tag}
                </span>
                <h3 className="font-serif text-2xl text-foreground leading-snug mt-2 mb-2">
                  {study.title}
                </h3>
                <p className="text-sm font-sans text-muted leading-relaxed">
                  {study.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm font-sans font-medium text-dusk group-hover:text-sunset transition-colors duration-200">
                  View case study
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
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
              className="group block rounded-4xl overflow-hidden bg-white border border-stone-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`relative aspect-video overflow-hidden ${study.color}/10`}>
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-sans font-medium text-sunset tracking-widest uppercase">
                  {study.tag}
                </span>
                <h3 className="font-serif text-xl text-foreground leading-snug mt-2 mb-2">
                  {study.title}
                </h3>
                <p className="text-sm font-sans text-muted leading-relaxed">
                  {study.description}
                </p>
                <div className="flex items-center gap-2 mt-3 text-sm font-sans font-medium text-dusk group-hover:text-sunset transition-colors duration-200">
                  View case study
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

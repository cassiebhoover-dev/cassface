import Image from 'next/image'

const skills = [
  'Figma',
  'Prototyping',
  'Design Systems',
  'User Research',
  'Cross-functional Leadership',
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Headshot */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-warm/50">
            <Image
              src="/images/Cassie-Hoover-headshot.jpeg"
              alt="Cassie Hoover"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <div className="border-l border-foreground/15 pl-8 mb-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">About</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                A little about me
              </h2>

              <div className="space-y-4 font-sans text-sm text-muted leading-relaxed">
                <p>
                  I&apos;m a Senior Product Designer & Design Lead focused on the intersection of user research, systems thinking, and shipping products that actually make a difference. I believe great design is invisible. It just works.
                </p>
                <p>
                  Over the past 8+ years, I&apos;ve partnered with product managers, engineers, and executives to take ideas from whiteboard sketches to polished, scalable products. Whether I&apos;m running discovery research or sweating the details of a component library, I care deeply about the craft.
                </p>
              </div>
            </div>

            <div className="pl-8">
              <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted mb-3">
                Skills &amp; Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-sans text-foreground/60 border border-sand/50 px-3 py-1.5 rounded-full hover:text-foreground hover:border-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

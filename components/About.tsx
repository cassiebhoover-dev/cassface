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
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Headshot */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-200">
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
            <div className="inline-flex items-center gap-2 bg-stone-100 text-accent border border-stone-200 rounded-full px-4 py-1.5 text-xs font-sans font-medium tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
              Currently open to new opportunities
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              About me
            </h2>

            <div className="space-y-4 font-sans text-muted leading-relaxed mb-8">
              <p>
                I&apos;m a Senior Product Designer & Design Lead focused on the intersection of user research, systems thinking, and shipping products that actually make a difference. I believe great design is invisible — it just works.
              </p>
              <p>
                Over the past 8+ years, I&apos;ve partnered with product managers, engineers, and executives to take ideas from whiteboard sketches to polished, scalable products. Whether I&apos;m running discovery research or sweating the details of a component library, I care deeply about the craft.
              </p>
            </div>

            <div>
              <p className="text-xs font-sans text-muted tracking-widest uppercase mb-4">
                Skills &amp; Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-sans border border-stone-300 text-foreground px-3 py-1 rounded-full hover:border-accent hover:text-accent transition-colors duration-200"
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

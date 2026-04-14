import Image from 'next/image'

const skills = [
  'Figma',
  'Prototyping',
  'Design Systems',
  'User Research',
  'Cross-functional Leadership',
]

const skillColors = [
  'bg-sunset/15 text-sunset border-sunset/20',
  'bg-bubblegum/20 text-dusk border-bubblegum/30',
  'bg-goldenrod/15 text-dusk border-goldenrod/25',
  'bg-robbins/25 text-dusk border-robbins/40',
  'bg-periwinkle/20 text-dusk border-periwinkle/30',
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative arch */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-b-full bg-robbins/8" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Headshot with decorative frame */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-4xl bg-bubblegum/20 rotate-3" />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-4xl bg-periwinkle/15 -rotate-2" />
            <div className="relative aspect-square rounded-4xl overflow-hidden bg-stone-200">
              <Image
                src="/images/Cassie-Hoover-headshot.jpeg"
                alt="Cassie Hoover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-robbins/25 text-dusk border border-robbins/40 rounded-full px-4 py-1.5 text-xs font-sans font-medium tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-sunset inline-block animate-pulse" />
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
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    className={`text-sm font-sans font-medium border px-4 py-1.5 rounded-full transition-transform duration-200 hover:scale-105 ${skillColors[i % skillColors.length]}`}
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

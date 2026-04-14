import AskMe from './AskMe'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — name & description with left border */}
        <div className="opacity-0 animate-fade-in-up">
          <div className="border-l border-foreground/20 pl-8">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Cassie Hoover
            </h1>
            <p className="font-sans text-sm md:text-base text-muted leading-relaxed max-w-md">
              Senior Product Designer & Design Lead with 8+ years crafting digital experiences for startups and Fortune 500s, with a focus on user research, systems thinking, and shipping products that make a difference.
            </p>
          </div>

          <div className="mt-12 pl-8 flex items-center gap-6">
            <a
              href="#work"
              className="text-xs font-sans tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-200 border-b border-foreground/20 hover:border-foreground pb-1"
            >
              View work
            </a>
            <a
              href="#contact"
              className="text-xs font-sans tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-200 border-b border-foreground/20 hover:border-foreground pb-1"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right — Ask Me Anything */}
        <div className="opacity-0 animate-fade-in animate-delay-300">
          <AskMe embedded />
        </div>
      </div>
    </section>
  )
}

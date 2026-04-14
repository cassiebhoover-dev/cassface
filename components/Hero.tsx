import AskMe from './AskMe'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20 pb-16 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-8 w-32 h-32 rounded-full bg-bubblegum/20 animate-float" />
      <div className="absolute bottom-32 left-16 w-20 h-20 rounded-full bg-goldenrod/25 animate-float-delayed" />
      <div className="absolute top-40 right-12 w-24 h-24 rounded-full bg-robbins/30 animate-float-delayed" />
      <div className="absolute bottom-20 right-32 w-16 h-16 rounded-full bg-periwinkle/25 animate-float" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — intro */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-robbins/30 text-dusk border border-robbins/50 rounded-full px-4 py-1.5 text-xs font-sans font-medium tracking-wide uppercase mb-8 opacity-0 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-sunset inline-block" />
            Open to new opportunities
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6 opacity-0 animate-fade-in-up animate-delay-100">
            Designing products people{' '}
            <span className="relative inline-block">
              <span className="relative z-10">actually</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-goldenrod/30 -rotate-1 rounded-full" />
            </span>{' '}
            want to use.
          </h1>

          <p className="font-sans text-lg text-muted max-w-lg mb-10 leading-relaxed opacity-0 animate-fade-in-up animate-delay-200">
            Senior Product Designer & Design Lead with 8+ years crafting digital experiences and leading design teams at startups and Fortune 500s.
          </p>

          <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up animate-delay-300">
            <a
              href="#work"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-dusk text-white font-sans font-medium text-sm hover:bg-sunset transition-colors duration-300"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-dusk text-dusk font-sans font-medium text-sm hover:bg-dusk hover:text-white transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right — Ask Me Anything */}
        <div className="relative z-10 opacity-0 animate-fade-in-up animate-delay-200">
          <AskMe embedded />
        </div>
      </div>
    </section>
  )
}

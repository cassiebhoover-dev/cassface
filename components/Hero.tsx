export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-sans text-accent tracking-widest uppercase mb-8 opacity-0 animate-fade-in-up">
          Senior Product Designer
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-tight mb-8 opacity-0 animate-fade-in-up animate-delay-100">
          Designing products people actually want to use.
        </h1>
        <p className="font-sans text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up animate-delay-200">
          Senior Product Designer with 8+ years crafting digital experiences for startups and Fortune 500s.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-300">
          <a
            href="#work"
            className="text-base font-sans text-foreground border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors duration-200"
          >
            See my work ↓
          </a>
          <span className="hidden sm:block text-muted">·</span>
          <a
            href="#contact"
            className="text-base font-sans text-foreground border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors duration-200"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  )
}

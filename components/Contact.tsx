export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-sans text-accent tracking-widest uppercase mb-4">
            Get in touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Let&apos;s work together
          </h2>
          <p className="font-sans text-lg text-muted leading-relaxed mb-12">
            I&apos;m currently available for freelance projects and full-time roles.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="mailto:cassie@example.com"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-foreground text-foreground font-sans font-medium text-sm hover:bg-foreground hover:text-background transition-all duration-200 min-w-[160px]"
            >
              Email me
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-accent text-accent font-sans font-medium text-sm hover:bg-accent hover:text-background transition-all duration-200 min-w-[160px]"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Secondary links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              className="text-sm font-sans text-muted hover:text-foreground transition-colors duration-200 border-b border-transparent hover:border-muted pb-0.5"
            >
              Dribbble
            </a>
            <span className="text-stone-300">·</span>
            <a
              href="#"
              className="text-sm font-sans text-muted hover:text-foreground transition-colors duration-200 border-b border-transparent hover:border-muted pb-0.5"
            >
              Read.cv
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

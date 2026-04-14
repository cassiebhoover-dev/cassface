export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-8 left-1/4 w-20 h-20 rounded-full bg-goldenrod/10" />
      <div className="absolute bottom-16 right-1/3 w-14 h-14 rounded-full bg-bubblegum/10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-sans text-sunset tracking-widest uppercase mb-4 font-medium">
            Get in touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Let&apos;s work together
          </h2>
          <p className="font-sans text-lg text-muted leading-relaxed mb-12">
            I&apos;m currently available for freelance projects and full-time roles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="mailto:cassiebhoover@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-dusk text-white font-sans font-medium text-sm hover:bg-sunset transition-colors duration-300 min-w-[160px]"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/cassie-hoover-3310141a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-dusk text-dusk font-sans font-medium text-sm hover:bg-dusk hover:text-white transition-all duration-300 min-w-[160px]"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              className="text-sm font-sans text-muted hover:text-sunset transition-colors duration-200 border-b border-transparent hover:border-sunset pb-0.5"
            >
              Dribbble
            </a>
            <span className="text-stone-300">·</span>
            <a
              href="#"
              className="text-sm font-sans text-muted hover:text-sunset transition-colors duration-200 border-b border-transparent hover:border-sunset pb-0.5"
            >
              Read.cv
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

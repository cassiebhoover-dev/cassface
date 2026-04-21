export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-md mx-auto">
          <div className="border-l border-foreground/15 pl-8">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">Contact</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-4">
              Let&apos;s connect
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed mb-8">
              I&apos;m always open to collaborating. Reach out and let&apos;s talk.
            </p>
          </div>

          <div className="pl-8 flex items-center gap-6">
            <a
              href="mailto:cassiebhoover@gmail.com"
              className="flex items-center gap-2 text-xs font-sans tracking-[0.1em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/cassie-hoover-3310141a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-sans tracking-[0.1em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

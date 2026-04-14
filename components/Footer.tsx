export default function Footer() {
  return (
    <footer className="py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-foreground/10 pt-8">
        <p className="text-xs font-sans text-muted tracking-wide">
          © 2025 Cassie Hoover
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:cassiebhoover@gmail.com"
            className="text-xs font-sans text-muted hover:text-foreground transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/cassie-hoover-3310141a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans text-muted hover:text-foreground transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

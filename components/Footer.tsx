export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-sans text-muted">
          © 2024 Cassie Hoover
        </p>
        <nav className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-sans text-muted hover:text-foreground transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#work"
            className="text-sm font-sans text-muted hover:text-foreground transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-sm font-sans text-muted hover:text-foreground transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}

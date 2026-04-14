export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 py-8 px-6 bg-dusk/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-sans text-muted">
          © 2025 Cassie Hoover
        </p>
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-sm font-sans text-muted hover:text-sunset transition-colors duration-200">About</a>
          <a href="#work" className="text-sm font-sans text-muted hover:text-sunset transition-colors duration-200">Work</a>
          <a href="#contact" className="text-sm font-sans text-muted hover:text-sunset transition-colors duration-200">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

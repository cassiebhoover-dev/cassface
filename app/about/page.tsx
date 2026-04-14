import Nav from '@/components/Nav'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About — Cassie Hoover',
}

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  )
}

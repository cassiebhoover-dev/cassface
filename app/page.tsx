import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import CaseStudies from '@/components/CaseStudies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  )
}

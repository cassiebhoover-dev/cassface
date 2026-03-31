import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import AskMe from '@/components/AskMe'
import CaseStudies from '@/components/CaseStudies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <AskMe />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  )
}

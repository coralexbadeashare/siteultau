import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import CarsShowcase from './components/CarsShowcase'
import NewsSection from './components/NewsSection'
import Partners from './components/Partners'

export default function HMotorsportHome() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <CarsShowcase />
      <NewsSection />
      <Partners />
    </main>
  )
}
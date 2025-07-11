import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Schedule from './components/Schedule'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CTA from './components/CTA'

export default function SkaiUrbanCragHome() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Schedule />
      <Gallery />
      <Testimonials />
      <CTA />
    </main>
  )
}
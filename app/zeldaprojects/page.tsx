import Hero from './components/Hero'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import AboutSection from './components/AboutSection'
import ContactCTA from './components/ContactCTA'

export default function ZeldaProjectsHome() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ProductShowcase />
      <AboutSection />
      <ContactCTA />
    </main>
  )
}
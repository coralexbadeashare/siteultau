import type { Metadata } from 'next'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'SKAI Urban Crag - Centru de Escaladă Cluj',
  description: 'Spațiu dedicat escaladei, bouldering și yoga în Cluj-Napoca. Cursuri pentru copii și adulți, antrenamente personalizate.',
}

export default function SkaiUrbanCragLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  )
}
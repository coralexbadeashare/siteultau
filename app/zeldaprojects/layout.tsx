import type { Metadata } from 'next'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Zelda Projects - Ambalaje Ecologice și Tuburi de Carton',
  description: 'Producător român de tuburi de carton industrial și distribuitor de ambalaje ecologice. Certificat ISO 14001:2015.',
}

export default function ZeldaProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  )
}
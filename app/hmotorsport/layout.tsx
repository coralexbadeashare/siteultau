import type { Metadata } from 'next'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'H Motorsport - We Service, You Race',
  description: 'Servicii profesionale de motorsport în Cluj-Napoca. Închiriere mașini de curse, asistență tehnică și service auto.',
}

export default function HMotorsportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navigation />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  )
}
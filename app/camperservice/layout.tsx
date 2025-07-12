import "../globals.css"
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CamperService - Service și Accesorii pentru Autorulote și Rulote',
  description: 'Service profesional, piese și accesorii pentru autorulote și rulote în Cluj-Napoca. Reparații, întreținere și modernizări.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.className} bg-gray-50 text-gray-900 min-h-screen`}>
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}
import type { Metadata } from 'next'
import "../globals.css"
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Psiholog Cristina Popa - Cabinet de Psihologie Cluj',
  description: 'Cabinet de psihologie clinică și psihoterapie cognitiv-comportamentală în Cluj. Consiliere psihologică, dezvoltare personală și evaluare psihologică.',
  keywords: 'psiholog Cluj, psihoterapie Cluj, terapie cognitiv comportamentala, consiliere psihologica, Cristina Popa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
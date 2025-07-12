import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Service Adam - Service Auto Profesional Cluj',
  description: 'Service auto profesional în Cluj-Napoca. Reparații, întreținere și diagnosticare pentru toate mărcile auto. Experiență de peste 15 ani.',
}

export default function ServiceAdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.className} min-h-screen flex flex-col`}>
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
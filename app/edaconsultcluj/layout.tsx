import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EDA Consult Cluj - Tâmplărie din Lemn Masiv',
  description: 'Producție și servicii de tâmplărie din lemn masiv. Uși, ferestre, scări, mobilier personalizat și reparații.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Navigation />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
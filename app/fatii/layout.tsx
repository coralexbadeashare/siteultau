import "../globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

export const metadata = {
  title: 'FATII - Academia de Transport Profesional',
  description: 'Cursuri și certificări profesionale pentru transport rutier în România. Pregătire pentru manageri de transport, șoferi profesioniști, instructori auto și consilieri ADR.',
}

export default function FatiiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
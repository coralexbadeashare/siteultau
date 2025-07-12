import "../globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

export const metadata = {
  title: 'Agressione Group - Soluții de Ambalare și Distribuție',
  description: 'Agressione Group - Lider în producția de hârtie și produse forestiere, comerț cu ridicata specializat din 1997',
}

export default function AgressioneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
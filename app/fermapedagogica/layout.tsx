import "../globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

export const metadata = {
  title: 'Ferma Pedagogică - Educație prin Natură',
  description: 'Ferma Pedagogică - Un loc magic unde copiii învață despre animale, natură și agricultură prin experiențe interactive și educative',
}

export default function FermaPedagogicaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
import "../globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

export const metadata = {
  title: 'Bishojo Beauty - Makeup Artist',
  description: 'Makeup artist profesionist în București. Machiaj pentru evenimente speciale, nunți, ședințe foto și cursuri de makeup.',
}

export default function BishojoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-pink-50 text-gray-800 min-h-screen">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
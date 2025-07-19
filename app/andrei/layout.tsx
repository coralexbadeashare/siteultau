import "../globals.css"
import { Navigation } from './components/navigation'
import { Footer } from './components/footer'

export const metadata = {
  title: 'Student Marketplace - Buy & Sell Campus Items',
  description: 'A marketplace for students to buy and sell used items, connect with peers, and share deals',
}

export default function AndreiLayout({
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
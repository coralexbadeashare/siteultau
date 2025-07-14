import "../globals.css"
import { Heart, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Happy Pets Cluj - Servicii Premium pentru Animalele Tale',
  description: 'Servicii profesionale de îngrijire pentru animale de companie în Cluj-Napoca. Grooming, pet sitting, plimbări și consultanță.',
}

function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-pink-500 mr-2" />
            <span className="text-xl font-bold text-gray-800">Happy Pets Cluj</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/happypetscluj" className="text-gray-700 hover:text-pink-500 transition-colors">Acasă</Link>
            <Link href="/happypetscluj#servicii" className="text-gray-700 hover:text-pink-500 transition-colors">Servicii</Link>
            <Link href="/happypetscluj#despre" className="text-gray-700 hover:text-pink-500 transition-colors">Despre Noi</Link>
            <Link href="/happypetscluj#testimoniale" className="text-gray-700 hover:text-pink-500 transition-colors">Testimoniale</Link>
            <Link href="/happypetscluj#contact" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <a href="tel:+40744123456" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              0744 123 456
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-pink-500 mr-2" />
              <span className="text-xl font-bold">Happy Pets Cluj</span>
            </div>
            <p className="text-gray-400">
              Partenerul de încredere pentru îngrijirea animalelor tale de companie din Cluj-Napoca.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/happypetscluj#grooming" className="hover:text-pink-500 transition-colors">Grooming</Link></li>
              <li><Link href="/happypetscluj#petsitting" className="hover:text-pink-500 transition-colors">Pet Sitting</Link></li>
              <li><Link href="/happypetscluj#plimbari" className="hover:text-pink-500 transition-colors">Plimbări</Link></li>
              <li><Link href="/happypetscluj#consultanta" className="hover:text-pink-500 transition-colors">Consultanță</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+40744123456" className="hover:text-pink-500 transition-colors">0744 123 456</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:contact@happypetscluj.ro" className="hover:text-pink-500 transition-colors">contact@happypetscluj.ro</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>Str. Florilor 12, Cluj-Napoca</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Urmărește-ne</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Happy Pets Cluj. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
import "../globals.css"
import Link from 'next/link'
import { Battery, Phone, Mail, MapPin, Menu, ChevronDown } from 'lucide-react'

export default function RTXSolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/rtxsolutions" className="flex items-center space-x-3">
            <Battery className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">RTX Solutions</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/rtxsolutions" className="text-gray-700 hover:text-blue-600 transition-colors">
              Acasă
            </Link>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Produse
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/rtxsolutions#industrial" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Baterii Industriale
                </Link>
                <Link href="/rtxsolutions#automotive" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Baterii Auto
                </Link>
                <Link href="/rtxsolutions#solar" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Baterii Solare
                </Link>
                <Link href="/rtxsolutions#ups" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Sisteme UPS
                </Link>
              </div>
            </div>
            
            <Link href="/rtxsolutions#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Servicii
            </Link>
            <Link href="/rtxsolutions#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              Despre Noi
            </Link>
            <Link href="/rtxsolutions#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            
            <Link href="/rtxsolutions#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Solicită Ofertă
            </Link>
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Battery className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">RTX Solutions</span>
            </div>
            <p className="text-gray-400">
              Partenerul dumneavoastră de încredere pentru soluții complete de baterii industriale și sisteme de alimentare.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Produse</h3>
            <ul className="space-y-2">
              <li><Link href="/rtxsolutions#industrial" className="hover:text-blue-400 transition-colors">Baterii Industriale</Link></li>
              <li><Link href="/rtxsolutions#automotive" className="hover:text-blue-400 transition-colors">Baterii Auto</Link></li>
              <li><Link href="/rtxsolutions#solar" className="hover:text-blue-400 transition-colors">Baterii Solare</Link></li>
              <li><Link href="/rtxsolutions#ups" className="hover:text-blue-400 transition-colors">Sisteme UPS</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2">
              <li><Link href="/rtxsolutions#services" className="hover:text-blue-400 transition-colors">Consultanță</Link></li>
              <li><Link href="/rtxsolutions#services" className="hover:text-blue-400 transition-colors">Instalare</Link></li>
              <li><Link href="/rtxsolutions#services" className="hover:text-blue-400 transition-colors">Mentenanță</Link></li>
              <li><Link href="/rtxsolutions#services" className="hover:text-blue-400 transition-colors">Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5" />
                <span>Strada Industriei 23<br />București, România</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <a href="tel:+40712345678" className="hover:text-blue-400 transition-colors">+40 712 345 678</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <a href="mailto:contact@rtxsolutions.ro" className="hover:text-blue-400 transition-colors">contact@rtxsolutions.ro</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RTX Solutions. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
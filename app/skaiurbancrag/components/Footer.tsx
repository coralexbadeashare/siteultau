import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Mountain, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">SKAI</span>
                <p className="text-xs text-gray-400">Urban Crag</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Spațiu dedicat tuturor doritorilor de sport, indiferent de vârstă și condiție fizică. 
              Escaladă, bouldering și yoga în Cluj-Napoca.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://facebook.com/skaiurbancrag" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/skaiurbancrag" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/skaiurbancrag/tarife" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Tarife & Abonamente
                </Link>
              </li>
              <li>
                <Link href="/skaiurbancrag/program" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/skaiurbancrag/cursuri" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Cursuri
                </Link>
              </li>
              <li>
                <Link href="/skaiurbancrag/evenimente" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Evenimente
                </Link>
              </li>
              <li>
                <Link href="/skaiurbancrag/echipa" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Echipa Noastră
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <span className="text-orange-500">🧗</span>
                <span>Escaladă & Bouldering</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <span className="text-orange-500">🧘</span>
                <span>Clase de Yoga</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <span className="text-orange-500">👥</span>
                <span>Antrenament Personal</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <span className="text-orange-500">🎉</span>
                <span>Evenimente Private</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <span className="text-orange-500">🏕️</span>
                <span>Tabere pentru Copii</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Calea Baciului 1-3<br />
                  Cluj-Napoca
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+40742325429" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  +40 742 325 429
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@skaiurbancrag.ro" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  info@skaiurbancrag.ro
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  L-V: 16:00-22:00<br />
                  S-D: 15:00-19:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              © 2024 SKAI Urban Crag. Made with 
              <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
              in Cluj
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/skaiurbancrag/termeni" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Termeni și Condiții
              </Link>
              <Link href="/skaiurbancrag/gdpr" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                GDPR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
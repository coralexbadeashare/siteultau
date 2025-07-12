import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">AGRESSIONE</h3>
            <p className="text-gray-400 mb-4">
              Lider în producția de hârtie și produse forestiere, oferind soluții complete de ambalare și distribuție din 1997.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/agressione/despre" className="text-gray-400 hover:text-red-500 transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/agressione/produse" className="text-gray-400 hover:text-red-500 transition-colors">
                  Produse
                </Link>
              </li>
              <li>
                <Link href="/agressione/servicii" className="text-gray-400 hover:text-red-500 transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/agressione/cariere" className="text-gray-400 hover:text-red-500 transition-colors">
                  Cariere
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Produse</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/agressione/produse/ambalaje" className="text-gray-400 hover:text-red-500 transition-colors">
                  Ambalaje din Hârtie
                </Link>
              </li>
              <li>
                <Link href="/agressione/produse/forestiere" className="text-gray-400 hover:text-red-500 transition-colors">
                  Produse Forestiere
                </Link>
              </li>
              <li>
                <Link href="/agressione/produse/distributie" className="text-gray-400 hover:text-red-500 transition-colors">
                  Distribuție en-gros
                </Link>
              </li>
              <li>
                <Link href="/agressione/produse/personalizate" className="text-gray-400 hover:text-red-500 transition-colors">
                  Soluții Personalizate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Strada Nikola Tesla Nr. 13,<br />
                  Cluj-Napoca, Cluj, 400221
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:+40264123456" className="text-gray-400 hover:text-red-500 transition-colors">
                  +40 264 123 456
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="mailto:contact@agressione.ro" className="text-gray-400 hover:text-red-500 transition-colors">
                  contact@agressione.ro
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">
                  Luni - Vineri: 8:00 - 17:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Agressione Group S.A. Toate drepturile rezervate. | 
            <Link href="/agressione/politica-confidentialitate" className="text-gray-400 hover:text-red-500 transition-colors ml-2">
              Politica de Confidențialitate
            </Link> | 
            <Link href="/agressione/termeni" className="text-gray-400 hover:text-red-500 transition-colors ml-2">
              Termeni și Condiții
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
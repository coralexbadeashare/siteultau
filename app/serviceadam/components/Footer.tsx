import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SA</span>
              </div>
              <span className="text-2xl font-bold">Service Adam</span>
            </div>
            <p className="text-gray-400 mb-4">
              Service auto profesional cu experiență de peste 15 ani. Calitate garantată pentru toate mărcile auto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/serviceadam/servicii#diagnosticare" className="text-gray-400 hover:text-red-500 transition-colors">
                  Diagnosticare computerizată
                </Link>
              </li>
              <li>
                <Link href="/serviceadam/servicii#mecanica" className="text-gray-400 hover:text-red-500 transition-colors">
                  Reparații mecanice
                </Link>
              </li>
              <li>
                <Link href="/serviceadam/servicii#electrica" className="text-gray-400 hover:text-red-500 transition-colors">
                  Reparații electrice
                </Link>
              </li>
              <li>
                <Link href="/serviceadam/servicii#tinichigerie" className="text-gray-400 hover:text-red-500 transition-colors">
                  Tinichigerie și vopsitorie
                </Link>
              </li>
              <li>
                <Link href="/serviceadam/servicii" className="text-gray-400 hover:text-red-500 transition-colors">
                  Schimb ulei și filtre
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Link-uri Utile</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/serviceadam" className="text-gray-400 hover:text-red-500 transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/serviceadam/despre" className="text-gray-400 hover:text-red-500 transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/serviceadam/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/serviceadam/contact#programare" className="text-gray-400 hover:text-red-500 transition-colors">
                  Programare Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Str. Calea Florești Nr. 123<br />
                  Cluj-Napoca, Cluj 400000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:0740123456" className="text-gray-400 hover:text-red-500 transition-colors">
                  0740 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="mailto:contact@serviceadam.ro" className="text-gray-400 hover:text-red-500 transition-colors">
                  contact@serviceadam.ro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <p>Luni - Vineri: 8:00 - 18:00</p>
                  <p>Sâmbătă: 9:00 - 14:00</p>
                  <p>Duminică: Închis</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Service Adam. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/serviceadam/termeni" className="text-gray-400 hover:text-red-500 transition-colors">
                Termeni și Condiții
              </Link>
              <Link href="/serviceadam/confidentialitate" className="text-gray-400 hover:text-red-500 transition-colors">
                Politica de Confidențialitate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
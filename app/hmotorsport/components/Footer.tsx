import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Wrench, Car, Users } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <span className="text-xl font-bold">MOTORSPORT</span>
                <p className="text-xs text-gray-400">We service, you race</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Servicii profesionale de motorsport în Cluj-Napoca. 
              Asistență tehnică completă pentru competiții naționale și internaționale.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hmotorsport" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Prima Pagină
                </Link>
              </li>
              <li>
                <Link href="/hmotorsport/echipa" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Echipa Noastră
                </Link>
              </li>
              <li>
                <Link href="/hmotorsport/servicii" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/hmotorsport/masini" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Flota Auto
                </Link>
              </li>
              <li>
                <Link href="/hmotorsport/contact" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Car className="w-4 h-4 text-red-500" />
                <span>Închiriere Mașini Curse</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Wrench className="w-4 h-4 text-red-500" />
                <span>Asistență Tehnică</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Users className="w-4 h-4 text-red-500" />
                <span>Service Auto</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Strada Sfânta Vineri 19<br />
                  Cluj-Napoca 400230
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:0740372618" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  0740 372 618
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="mailto:vlad.cosma@hmotorsport.ro" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  vlad.cosma@hmotorsport.ro
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Luni - Vineri: 8:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 H Motorsport. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/hmotorsport/termeni" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                Termeni și Condiții
              </Link>
              <Link href="/hmotorsport/confidentialitate" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                Politica de Confidențialitate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
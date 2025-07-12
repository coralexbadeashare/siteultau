import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Zap, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold">PROMACOM PROD</h3>
                <p className="text-xs text-gray-400">Cluj Napoca</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Specialist în reparații motoare electrice cu peste 20 de ani experiență. 
              Autorizați ISCIR pentru întreținere macarale și poduri rulante.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/promacomprod" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/promacomprod/servicii" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/promacomprod/galerie" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Galerie Foto
                </Link>
              </li>
              <li>
                <Link href="/promacomprod/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Servicii Principale</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Reparații motoare electrice</li>
              <li>• Rebobinări transformatoare</li>
              <li>• Reparații generatoare</li>
              <li>• Întreținere macarale</li>
              <li>• Echilibrare rotori</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Atelier: Str. Lombului, fn</p>
                  <p>Sediu: Str. Calea Turzii, nr. 162-168A</p>
                  <p>Cluj Napoca</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <a href="tel:0264481744" className="hover:text-white transition-colors">0264-481744</a>
                  <span className="text-gray-600 mx-1">|</span>
                  <a href="tel:0744525355" className="hover:text-white transition-colors">0744-525355</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:promacomprod@yahoo.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  promacomprod@yahoo.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Luni - Vineri: 08:00 - 17:00</p>
                  <p>Sâmbătă: 08:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 Promacom Prod SRL. Toate drepturile rezervate.
            </p>
            <p className="text-gray-500 text-sm">
              Website creat cu pasiune pentru excelență tehnică
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
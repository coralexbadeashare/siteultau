import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center transform rotate-45">
                <span className="text-white font-bold transform -rotate-45">JPX</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">JPX Paint Car</h3>
                <p className="text-xs text-gray-400">Excelență în Vopsitorie Auto</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Redăm strălucirea mașinii tale cu servicii profesionale de vopsitorie auto și detailing.
            </p>
            <div className="flex space-x-4 mt-4">
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

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jpxpaintcar/servicii#vopsire-completa" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Vopsire Completă
                </Link>
              </li>
              <li>
                <Link href="/jpxpaintcar/servicii#retusuri" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Retușuri și Reparații
                </Link>
              </li>
              <li>
                <Link href="/jpxpaintcar/servicii#protectie-ceramica" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Protecție Ceramică
                </Link>
              </li>
              <li>
                <Link href="/jpxpaintcar/servicii#folie-protectie" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Folie de Protecție
                </Link>
              </li>
              <li>
                <Link href="/jpxpaintcar/servicii#polish" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Polish și Detailing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Link-uri Utile</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jpxpaintcar" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/jpxpaintcar/despre" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/jpxpaintcar/galerie" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Galerie Lucrări
                </Link>
              </li>
              <li>
                <Link href="/jpxpaintcar/contact" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Str. Industriei Nr. 25<br />
                  București, Sector 3
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:+40721234567" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  0721 234 567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="mailto:contact@jpxpaintcar.ro" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  contact@jpxpaintcar.ro
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Luni - Vineri: 08:00 - 18:00</p>
                  <p>Sâmbătă: 09:00 - 14:00</p>
                  <p>Duminică: Închis</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 JPX Paint Car. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}
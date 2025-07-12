import React from 'react'
import Link from 'next/link'
import { Phone, Mail, Clock, Truck, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">WELMIUS</h3>
                <p className="text-orange-400">Transport & Închirieri</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Partenerul tău de încredere pentru închirieri de remorci și platforme auto, 
              tractări auto și transport marfă. Servicii profesionale la prețuri competitive.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/welmius" className="text-gray-400 hover:text-white transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/welmius/remorci-de-inchiriat" className="text-gray-400 hover:text-white transition-colors">
                  Remorci de închiriat
                </Link>
              </li>
              <li>
                <Link href="/welmius/tractare-auto-transport-marfa" className="text-gray-400 hover:text-white transition-colors">
                  Tractare & Transport
                </Link>
              </li>
              <li>
                <Link href="/welmius/despre-noi" className="text-gray-400 hover:text-white transition-colors">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link href="/welmius/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:0742020254" className="text-gray-400 hover:text-white transition-colors">
                  0742 020 254
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:contact@welmius.ro" className="text-gray-400 hover:text-white transition-colors">
                  contact@welmius.ro
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>Luni - Vineri: 08:00 - 18:00</p>
                  <p>Sâmbătă: 08:00 - 14:00</p>
                  <p>Duminică: Închis</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Welmius. Toate drepturile rezervate.
            </p>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>Dezvoltat cu ❤️ pentru transport de calitate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated truck at bottom */}
      <div className="truck-animation h-12 flex items-center">
        <div className="flex items-center">
          <div className="w-20 h-10 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg relative">
            <div className="absolute -top-3 left-3 right-3 h-5 bg-orange-700 rounded-t-lg"></div>
            <div className="absolute bottom-0 left-2 w-4 h-4 bg-gray-800 rounded-full"></div>
            <div className="absolute bottom-0 right-2 w-4 h-4 bg-gray-800 rounded-full"></div>
          </div>
          <div className="w-24 h-8 bg-gray-700 -ml-1 rounded-r-lg flex items-center justify-center">
            <div className="w-16 h-4 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
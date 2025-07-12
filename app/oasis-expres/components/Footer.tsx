import React from 'react'
import Link from 'next/link'
import { Phone, Mail, Clock, Droplet, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Droplet className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">OASIS EXPRES</h3>
                <p className="text-cyan-400">Spălătorie Auto Premium</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Cea mai modernă spălătorie auto touchless din oraș. 
              Tehnologie avansată pentru o curățare perfectă, fără contact direct.
              Deschis NON-STOP pentru confortul dumneavoastră.
            </p>
            <div className="flex items-center space-x-2 text-yellow-400 mb-4">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Happy Hour: 22:00 - 08:00</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/oasis-expres" className="text-gray-400 hover:text-white transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/oasis-expres#cum-functioneaza" className="text-gray-400 hover:text-white transition-colors">
                  Cum Funcționează
                </Link>
              </li>
              <li>
                <Link href="/oasis-expres#preturi" className="text-gray-400 hover:text-white transition-colors">
                  Programe & Prețuri
                </Link>
              </li>
              <li>
                <Link href="/oasis-expres#galerie" className="text-gray-400 hover:text-white transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/oasis-expres/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/oasis-expres/politica-confidentialitate" className="text-gray-400 hover:text-white transition-colors">
                  Politica de Confidențialitate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <a href="tel:0772006156" className="text-gray-400 hover:text-white transition-colors">
                  0772 006 156
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <a href="mailto:info@oasis-expres.ro" className="text-gray-400 hover:text-white transition-colors">
                  info@oasis-expres.ro
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-gray-400">NON-STOP</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-cyan-400 font-semibold mb-3">Urmărește-ne:</p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/OasisExpresCarwash" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/oasis.expres.carwash/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@oasis.expres.carwash" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 Oasis Expres. Toate drepturile rezervate.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Droplet className="w-4 h-4 text-cyan-500" />
              <span>Curățare perfectă, de fiecare dată</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated car at bottom */}
      <div className="car-animation h-12 flex items-center">
        <div className="flex items-center">
          <div className="w-16 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg relative">
            <div className="absolute -top-2 left-2 right-2 h-4 bg-blue-700 rounded-t-lg"></div>
            <div className="absolute bottom-0 left-1 w-3 h-3 bg-gray-800 rounded-full"></div>
            <div className="absolute bottom-0 right-1 w-3 h-3 bg-gray-800 rounded-full"></div>
          </div>
          <div className="ml-2 space-x-1 flex">
            <div className="water-drop" style={{animationDelay: '0s'}}></div>
            <div className="water-drop" style={{animationDelay: '0.5s'}}></div>
            <div className="water-drop" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
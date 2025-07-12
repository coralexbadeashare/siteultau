import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Dumbbell } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bebas tracking-wider">OLD GYM</h3>
                <p className="text-xs text-gray-400">FORGE YOUR LEGACY</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Transformă-ți corpul și mintea în templul nostru de fitness. Alătură-te comunității Old Gym și descoperă cea mai bună versiune a ta.
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

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/oldgym/despre" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/oldgym/clase" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Clase și Programe
                </Link>
              </li>
              <li>
                <Link href="/oldgym/antrenori" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Echipa Noastră
                </Link>
              </li>
              <li>
                <Link href="/oldgym/preturi" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Abonamente
                </Link>
              </li>
              <li>
                <Link href="/oldgym/contact" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Clase Populare</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/oldgym/clase#bodybuilding" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Bodybuilding
                </Link>
              </li>
              <li>
                <Link href="/oldgym/clase#crossfit" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  CrossFit
                </Link>
              </li>
              <li>
                <Link href="/oldgym/clase#fitness" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Fitness & Cardio
                </Link>
              </li>
              <li>
                <Link href="/oldgym/clase#yoga" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Yoga & Pilates
                </Link>
              </li>
              <li>
                <Link href="/oldgym/clase#box" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Box & MMA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Str. Victoriei Nr. 45<br />
                  Cluj-Napoca, Cluj
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:+40745123456" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  0745 123 456
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="mailto:contact@oldgym.ro" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  contact@oldgym.ro
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Luni - Vineri: 06:00 - 22:00</p>
                  <p>Sâmbătă: 08:00 - 20:00</p>
                  <p>Duminică: 09:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 Old Gym. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-amber-500 text-sm">
                Termeni și Condiții
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500 text-sm">
                Politica de Confidențialitate
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500 text-sm">
                GDPR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
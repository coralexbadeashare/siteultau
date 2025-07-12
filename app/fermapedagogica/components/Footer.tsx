import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Leaf, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Farm Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold">Ferma Pedagogică</h3>
            </div>
            <p className="text-green-100 mb-4 text-sm">
              Un loc magic unde copiii descoperă frumusețea naturii și învață despre animale, plante și viața la fermă prin experiențe interactive.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-yellow-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Descoperă</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/fermapedagogica/despre" className="text-green-100 hover:text-yellow-400 transition-colors">
                  Povestea Noastră
                </Link>
              </li>
              <li>
                <Link href="/fermapedagogica/activitati" className="text-green-100 hover:text-yellow-400 transition-colors">
                  Activități Educative
                </Link>
              </li>
              <li>
                <Link href="/fermapedagogica/animale" className="text-green-100 hover:text-yellow-400 transition-colors">
                  Animalele Fermei
                </Link>
              </li>
              <li>
                <Link href="/fermapedagogica/galerie" className="text-green-100 hover:text-yellow-400 transition-colors">
                  Galerie Foto
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Programe</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/fermapedagogica/vizite-scolare" className="text-green-100 hover:text-yellow-400 transition-colors">
                  Vizite Școlare
                </Link>
              </li>
              <li>
                <Link href="/fermapedagogica/ateliere" className="text-green-100 hover:text-yellow-400 transition-colors">
                  Ateliere Creative
                </Link>
              </li>
              <li>
                <Link href="/fermapedagogica/tabere" className="text-green-100 hover:text-yellow-400 transition-colors">
                  Tabere de Vară
                </Link>
              </li>
              <li>
                <Link href="/fermapedagogica/aniversari" className="text-green-100 hover:text-yellow-400 transition-colors">
                  Petreceri Aniversare
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Vizitează-ne</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-green-100 text-sm">
                  Strada Fermei Nr. 25,<br />
                  Comuna Florești, Cluj
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="tel:+40745123456" className="text-green-100 hover:text-yellow-400 transition-colors text-sm">
                  +40 745 123 456
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="mailto:contact@fermapedagogica.ro" className="text-green-100 hover:text-yellow-400 transition-colors text-sm">
                  contact@fermapedagogica.ro
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-green-100 text-sm">
                  Mar - Dum: 9:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-100 text-sm mb-4 md:mb-0">
              © 2024 Ferma Pedagogică. Toate drepturile rezervate.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/fermapedagogica/regulament" className="text-green-100 hover:text-yellow-400 transition-colors">
                Regulament
              </Link>
              <Link href="/fermapedagogica/confidentialitate" className="text-green-100 hover:text-yellow-400 transition-colors">
                Confidențialitate
              </Link>
              <Link href="/fermapedagogica/termeni" className="text-green-100 hover:text-yellow-400 transition-colors">
                Termeni
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-green-200 text-xs flex items-center justify-center">
              Făcut cu <Heart className="w-3 h-3 mx-1 text-red-400" /> pentru copiii României
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
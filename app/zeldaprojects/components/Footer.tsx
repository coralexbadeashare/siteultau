import Link from 'next/link'
import { Package, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Zelda Projects</span>
            </div>
            <p className="text-gray-400 text-sm">
              Producător român de tuburi de carton industrial și distribuitor de ambalaje ecologice. 
              Certificat ISO 14001:2015.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/zeldaprojects" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/zeldaprojects/produse" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Produse
                </Link>
              </li>
              <li>
                <Link href="/zeldaprojects/despre-noi" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/zeldaprojects/contact" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/zeldaprojects/gdpr" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produse</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/zeldaprojects/produse/tuburi-standard" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Tuburi de Carton Standard
                </Link>
              </li>
              <li>
                <Link href="/zeldaprojects/produse/tuburi-rezistenta" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Tuburi cu Rezistență Sporită
                </Link>
              </li>
              <li>
                <Link href="/zeldaprojects/produse/tacamuri" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Ambalaje Ecologice
                </Link>
              </li>
              <li>
                <Link href="/zeldaprojects/produse/caserole-pp" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Ambalaje Catering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Str. Cheile Baciului, nr. 4<br />
                  Cluj-Napoca, România
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="tel:+40733076994" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  +40 733 076 994
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="mailto:office@zeldaprojects.ro" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  office@zeldaprojects.ro
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Luni - Vineri: 7:30 - 15:30
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zelda Projects SRL. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/zeldaprojects/gdpr" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Politica de Confidențialitate
              </Link>
              <Link href="/zeldaprojects/termeni" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
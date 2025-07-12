import Link from 'next/link'
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">CamperService</h3>
            <p className="text-sm mb-4">
              Service profesional și accesorii de calitate pentru autorulote și rulote. 
              Experiență de peste 10 ani în domeniu.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/camperservicecluj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/camperservicecluj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/camperservice/servicii" className="hover:text-blue-400 transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/camperservice/magazin" className="hover:text-blue-400 transition-colors">
                  Magazin Online
                </Link>
              </li>
              <li>
                <Link href="/camperservice/despre" className="hover:text-blue-400 transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/camperservice/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/camperservice/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Servicii Principale</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors">
                Reparații și Întreținere
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Montaj Accesorii
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Verificări Tehnice
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Pregătire Sezonieră
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Consultanță Tehnică
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p>
                  Cluj-Napoca, Strada Lombului<br />
                  Ferma 23, Hala 4
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+40745913161" className="hover:text-blue-400 transition-colors">
                  0745 913 161
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:office@camperservice.ro" className="hover:text-blue-400 transition-colors">
                  office@camperservice.ro
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Luni - Vineri: 9:00 - 18:00</p>
                  <p>Sâmbătă: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © 2025 CamperService. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/camperservice/termeni" className="hover:text-blue-400 transition-colors">
                Termeni și Condiții
              </Link>
              <Link href="/camperservice/confidentialitate" className="hover:text-blue-400 transition-colors">
                Politica de Confidențialitate
              </Link>
              <Link href="/camperservice/cookies" className="hover:text-blue-400 transition-colors">
                Politica Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
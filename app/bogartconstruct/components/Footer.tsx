import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">BOGART CONSTRUCT</h3>
                <p className="text-sm text-gray-400">Din 1999</p>
              </div>
            </div>
            <p className="text-gray-300">
              Transformăm ideile în opere de artă. Peste 1000 de proiecte de succes realizate cu pasiune și profesionalism.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/bogartconstruct/arhitectura" className="text-gray-300 hover:text-blue-400 transition">
                  Arhitectură
                </Link>
              </li>
              <li>
                <Link href="/bogartconstruct/urbanism" className="text-gray-300 hover:text-blue-400 transition">
                  Urbanism
                </Link>
              </li>
              <li>
                <Link href="/bogartconstruct/proiectare-structurala" className="text-gray-300 hover:text-blue-400 transition">
                  Proiectare Structurală
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+4 0264 582 782</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:office@bogartconstruct.ro" className="text-gray-300 hover:text-blue-400 transition">
                  office@bogartconstruct.ro
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Bd. 1 Decembrie 1918, nr: 38<br />
                  Cluj-Napoca, România
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Luni - Vineri: 9:00 - 17:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Parteneri</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Primera Interiors', 'Alumil', 'AKS', 'Geoplast', 'Schuco', 'City'].map((partner) => (
                <div key={partner} className="bg-gray-800 px-3 py-2 rounded text-center text-sm text-gray-300">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Bogart Construct. Toate drepturile rezervate. | Fondat de Mircea și Bogdan Petrina
          </p>
        </div>
      </div>
    </footer>
  )
}
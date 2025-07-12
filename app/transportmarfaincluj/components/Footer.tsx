import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Truck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Transport Marfă Cluj</h3>
                <p className="text-sm text-gray-400">Mereu aproape de client!</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Servicii profesionale de transport marfă, mutări mobilă și relocări firme în Cluj-Napoca și împrejurimi.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/transportmarfaincluj/transport-marfa" 
                  className="text-gray-300 hover:text-blue-400 transition-colors">
                  Transport Marfă
                </Link>
              </li>
              <li>
                <Link href="/transportmarfaincluj/transport-mobila" 
                  className="text-gray-300 hover:text-blue-400 transition-colors">
                  Transport Mobilă
                </Link>
              </li>
              <li>
                <Link href="/transportmarfaincluj/mutari-firme" 
                  className="text-gray-300 hover:text-blue-400 transition-colors">
                  Mutări Firme
                </Link>
              </li>
              <li>
                <Link href="/transportmarfaincluj/mutari-mobila" 
                  className="text-gray-300 hover:text-blue-400 transition-colors">
                  Mutări Mobilă
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <a href="tel:0752816138" className="text-gray-300 hover:text-blue-400">0752-816-138</a><br />
                  <a href="tel:0742980519" className="text-gray-300 hover:text-blue-400">0742-980-519</a><br />
                  <a href="tel:0725969796" className="text-gray-300 hover:text-blue-400">0725-969-796</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <a href="mailto:office@transportmarfaincluj.ro" 
                  className="text-gray-300 hover:text-blue-400">
                  office@transportmarfaincluj.ro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  Str. Aurel Vlaicu nr. 2<br />
                  Cluj-Napoca, România
                </span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Program de Lucru</h4>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-blue-400 mt-0.5" />
              <div className="text-gray-300">
                <p className="font-semibold text-green-400">NON-STOP</p>
                <p>Suntem disponibili 24/7</p>
                <p className="text-sm mt-2">
                  Pentru urgențe și comenzi rapide sunați oricând!
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-600/20 rounded-lg border border-blue-600/50">
              <p className="text-sm font-semibold text-blue-400">Prețuri de la</p>
              <p className="text-2xl font-bold">80 RON</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Transport Marfă Cluj. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
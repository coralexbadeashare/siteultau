import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-50 to-purple-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cabinet de Psihologie</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Oferim servicii profesionale de psihologie clinică și psihoterapie 
              cognitiv-comportamentală pentru adulți și adolescenți.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/psihologcristinapopa" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigare Rapidă</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/psihologcristinapopa/despre" 
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Despre Mine
                </Link>
              </li>
              <li>
                <Link href="/psihologcristinapopa/servicii" 
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/psihologcristinapopa/studii" 
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Studii și Formare
                </Link>
              </li>
              <li>
                <Link href="/psihologcristinapopa/competente" 
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Competențe
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Servicii Principale</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Psihoterapie Individuală</li>
              <li className="text-gray-600 text-sm">Consiliere Psihologică</li>
              <li className="text-gray-600 text-sm">Evaluare Psihologică</li>
              <li className="text-gray-600 text-sm">Dezvoltare Personală</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <a href="tel:0740968628" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  0740 968 628
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <a href="mailto:psihologcristinapopa@gmail.com" 
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm break-all">
                  psihologcristinapopa@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">Cluj-Napoca, România</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Psiholog Cristina Popa. Toate drepturile rezervate.
            </p>
            <div className="flex items-center space-x-1 text-gray-500 text-sm mt-4 md:mt-0">
              <span>Realizat cu</span>
              <Heart className="h-4 w-4 text-pink-500" />
              <span>pentru sănătatea ta mentală</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
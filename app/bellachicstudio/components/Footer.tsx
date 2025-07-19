import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Heart } from "lucide-react";

const services = [
  { label: "Coafor", href: "/bellachicstudio/servicii/coafor" },
  { label: "Manichiură & Pedichiură", href: "/bellachicstudio/servicii/manichiura-pedichiura" },
  { label: "Tratamente Faciale", href: "/bellachicstudio/servicii/tratamente-faciale" },
  { label: "Makeup", href: "/bellachicstudio/servicii/makeup" },
  { label: "Cosmetică", href: "/bellachicstudio/servicii/cosmetica" },
  { label: "Epilare", href: "/bellachicstudio/servicii/epilare" },
];

const quickLinks = [
  { label: "Despre Noi", href: "/bellachicstudio/despre" },
  { label: "Galerie", href: "/bellachicstudio/galerie" },
  { label: "Blog", href: "/bellachicstudio/blog" },
  { label: "Promoții", href: "/bellachicstudio/promotii" },
  { label: "Programare", href: "/bellachicstudio/programare" },
  { label: "Contact", href: "/bellachicstudio/contact" },
];

const businessHours = [
  { day: "Luni - Vineri", hours: "9:00 - 21:00" },
  { day: "Sâmbătă", hours: "9:00 - 19:00" },
  { day: "Duminică", hours: "Doar cu programare" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-600/20">
                <span className="text-white font-bold text-xl">BC</span>
              </div>
              <div>
                <div className="font-playfair font-bold text-xl">Bella Chic</div>
                <div className="text-xs text-gray-400 tracking-wider">STUDIO</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Salonul tău de înfrumusețare în Militari. Transformăm frumusețea într-o artă.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com/bellachicstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/bellachicstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/bellachicstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Servicii</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-pink-400 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Link-uri Rapide</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-pink-600/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-pink-600/20 transition-colors">
                  <MapPin className="h-5 w-5 text-pink-400" />
                </div>
                <p className="text-gray-400">
                  Str. Cupolei nr. 5B, Sector 6,<br />
                  Zona Lujerului, București
                </p>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-pink-600/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-pink-600/20 transition-colors">
                  <Phone className="h-5 w-5 text-pink-400" />
                </div>
                <div className="text-gray-400">
                  <a href="tel:0314251011" className="hover:text-pink-400 transition-colors block">
                    031 425 10 11
                  </a>
                  <a href="tel:0773842417" className="hover:text-pink-400 transition-colors block font-semibold">
                    0773 842 417
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-pink-600/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-pink-600/20 transition-colors">
                  <Mail className="h-5 w-5 text-pink-400" />
                </div>
                <a
                  href="mailto:bellachicstudio@gmail.com"
                  className="text-gray-400 hover:text-pink-400 transition-colors break-all"
                >
                  bellachicstudio@gmail.com
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h4 className="font-semibold mb-3 flex items-center text-white">
                  <Clock className="h-4 w-4 text-pink-400 mr-2" />
                  Program
                </h4>
                <div className="space-y-2 text-sm">
                  {businessHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <span className="text-gray-400">{schedule.day}</span>
                      <span className="text-gray-300 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bella Chic Studio. Toate drepturile rezervate.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0 text-sm">
              <Link href="/bellachicstudio/termeni" className="text-gray-400 hover:text-pink-400 transition-colors">
                Termeni și Condiții
              </Link>
              <Link href="/bellachicstudio/confidentialitate" className="text-gray-400 hover:text-pink-400 transition-colors">
                Politica de Confidențialitate
              </Link>
              <Link href="/bellachicstudio/cookies" className="text-gray-400 hover:text-pink-400 transition-colors">
                Politica Cookies
              </Link>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1.5 text-pink-400 animate-pulse" />
            <span>in București</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
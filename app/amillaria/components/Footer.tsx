import Link from 'next/link';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const products = [
    { name: 'Sucuri Naturale', href: '/amillaria/produse/sucuri' },
    { name: 'Dulcețuri', href: '/amillaria/produse/dulceata' },
    { name: 'Preparate', href: '/amillaria/produse/preparate' },
    { name: 'Toate Produsele', href: '/amillaria/produse' },
  ];

  const company = [
    { name: 'Povestea Noastră', href: '/amillaria/povestea-noastra' },
    { name: 'Cum Producem', href: '/amillaria/cum-producem' },
    { name: 'Servicii B2B', href: '/amillaria/servicii' },
    { name: 'Contact', href: '/amillaria/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-white">Amillaria</span>
            </div>
            <p className="mb-4 text-gray-400">
              Natural înseamnă viață. Din 2004, aducem natura mai aproape de tine 
              prin produse artizanale autentice din Transilvania.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/amillaria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/amillaria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Produse</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-green-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Companie</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-green-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+40744555666" className="hover:text-green-400 transition-colors">
                    0744 555 666
                  </a>
                  <div className="text-sm text-gray-500">Dorina Pop</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+40744777888" className="hover:text-green-400 transition-colors">
                    0744 777 888
                  </a>
                  <div className="text-sm text-gray-500">Sorin Pop</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@amillaria.ro" className="hover:text-green-400 transition-colors">
                  contact@amillaria.ro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Sediu: Cluj-Napoca</div>
                  <div className="text-sm text-gray-500">Producție: Berindu, Cluj</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Abonează-te la Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Primește rețete, sfaturi și noutăți despre produsele noastre naturale
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Abonează-mă
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <span>&copy; 2024 Amillaria. Toate drepturile rezervate.</span>
            <span className="text-gray-500">•</span>
            <span className="flex items-center gap-1">
              Făcut cu <Heart className="w-4 h-4 text-red-500" /> în Transilvania
            </span>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/amillaria/termeni" className="hover:text-green-400 transition-colors">
              Termeni și Condiții
            </Link>
            <Link href="/amillaria/confidentialitate" className="hover:text-green-400 transition-colors">
              Politica de Confidențialitate
            </Link>
            <Link href="/amillaria/cookies" className="hover:text-green-400 transition-colors">
              Politica Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
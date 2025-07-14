import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const services = [
    { name: 'Instalații Termice', href: '/napocainstal/servicii/termice' },
    { name: 'Instalații Sanitare', href: '/napocainstal/servicii/sanitare' },
    { name: 'Climatizare', href: '/napocainstal/servicii/climatizare' },
    { name: 'Urgențe 24/7', href: '/napocainstal/contact' },
  ];

  const company = [
    { name: 'Despre Noi', href: '/napocainstal/despre' },
    { name: 'Portofoliu', href: '/napocainstal/portofoliu' },
    { name: 'Certificări', href: '/napocainstal/despre#certificari' },
    { name: 'Cariere', href: '/napocainstal/despre#cariere' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="bg-blue-900 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Abonează-te la Newsletter
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Primește sfaturi utile despre întreținerea instalațiilor și oferte exclusive
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Adresa ta de email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              Abonează-te
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Napoca<span className="text-orange-500">Instal</span>
            </h3>
            <p className="mb-4">
              Partenerul tău de încredere pentru toate nevoile de instalații termice, 
              sanitare și climatizare în Cluj-Napoca și împrejurimi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicii</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-orange-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Companie</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-orange-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+40744123456" className="hover:text-orange-400 transition-colors">
                    0744 123 456
                  </a>
                  <div className="text-sm text-gray-500">Urgențe 24/7</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@napocainstal.ro" className="hover:text-orange-400 transition-colors">
                  contact@napocainstal.ro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  Str. Fabricii Nr. 123<br />
                  Cluj-Napoca, Cluj
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  Luni - Vineri: 08:00 - 18:00<br />
                  Sâmbătă: 09:00 - 14:00
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="mb-4">
            &copy; 2024 Napoca Instal. Toate drepturile rezervate.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/napocainstal/termeni" className="hover:text-orange-400 transition-colors">
              Termeni și Condiții
            </Link>
            <Link href="/napocainstal/confidentialitate" className="hover:text-orange-400 transition-colors">
              Politica de Confidențialitate
            </Link>
            <Link href="/napocainstal/cookies" className="hover:text-orange-400 transition-colors">
              Politica Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
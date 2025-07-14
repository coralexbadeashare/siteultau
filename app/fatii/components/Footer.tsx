import Link from 'next/link'
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    cursuri: [
      { name: 'Manager Transport', href: '/fatii/cursuri/manager-transport' },
      { name: 'Șofer Profesionist', href: '/fatii/cursuri/sofer-marfa' },
      { name: 'Instructor Auto', href: '/fatii/cursuri/instructor' },
      { name: 'Consilier ADR', href: '/fatii/cursuri/adr' },
      { name: 'Transport Animale', href: '/fatii/cursuri/transport-animale' },
    ],
    informatii: [
      { name: 'Despre Noi', href: '/fatii/despre' },
      { name: 'Acreditări', href: '/fatii/acreditari' },
      { name: 'Centre de Pregătire', href: '/fatii/centre' },
      { name: 'Chestionare Online', href: '/fatii/chestionare' },
      { name: 'Legislație', href: '/fatii/legislatie' },
    ],
    legal: [
      { name: 'Termeni și Condiții', href: '/fatii/termeni' },
      { name: 'Politica de Confidențialitate', href: '/fatii/confidentialitate' },
      { name: 'Politica Cookie', href: '/fatii/cookies' },
      { name: 'ANPC', href: 'https://anpc.ro/', external: true },
    ]
  }

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', label: 'YouTube' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                FA
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">FATII</h3>
                <p className="text-sm">Academia de Transport Profesional</p>
              </div>
            </div>
            
            <p className="mb-6 text-gray-400">
              Fundația Academia de Transport Intern și Internațional - lider în formarea 
              profesională pentru transporturi din 1998.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-sm">Str. Occidentului nr. 5, Sector 1, București</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <a href="tel:+40213160275" className="text-sm hover:text-white transition-colors">
                  021 316 02 75
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <a href="mailto:contact@fatii.ro" className="text-sm hover:text-white transition-colors">
                  contact@fatii.ro
                </a>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Cursuri</h4>
            <ul className="space-y-2">
              {footerLinks.cursuri.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Informații</h4>
            <ul className="space-y-2">
              {footerLinks.informatii.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name} ↗
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} FATII - Fundația Academia de Transport Intern și Internațional. Toate drepturile rezervate.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Membru fondator</span>
              <div className="bg-blue-600 text-white px-3 py-1 rounded">
                EuroTRA
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
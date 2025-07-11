import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Aveți Nevoie de Ambalaje de Calitate?
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Contactați-ne astăzi pentru o ofertă personalizată. Echipa noastră vă stă la dispoziție 
            pentru a găsi soluția perfectă pentru afacerea dumneavoastră.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <a
              href="tel:+40733076994"
              className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors group"
            >
              <Phone className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-1">Telefon</h3>
              <p className="text-green-100">+40 733 076 994</p>
              <p className="text-green-200 text-sm mt-2">Luni - Vineri: 7:30 - 15:30</p>
            </a>

            <a
              href="mailto:office@zeldaprojects.ro"
              className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors group"
            >
              <Mail className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
              <p className="text-green-100">office@zeldaprojects.ro</p>
              <p className="text-green-200 text-sm mt-2">Răspuns în 24 ore</p>
            </a>

            <a
              href="https://wa.me/40733076994"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors group"
            >
              <MessageSquare className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
              <p className="text-green-100">Chat Direct</p>
              <p className="text-green-200 text-sm mt-2">Răspuns rapid</p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zeldaprojects/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold group"
            >
              Solicită Ofertă Personalizată
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/zeldaprojects/produse"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Vezi Catalogul Complet
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
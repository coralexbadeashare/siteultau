import Link from 'next/link'
import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pregătit să Începi Aventura?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-3xl mx-auto">
            Alătură-te comunității SKAI și descoperă o nouă pasiune. 
            Prima ședință de inițiere include tot echipamentul necesar!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/skaiurbancrag/cursuri/initiere"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg group"
            >
              Rezervă Prima Ședință
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/skaiurbancrag/tarife"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
            >
              Vezi Tarifele
            </Link>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="tel:+40742325429"
              className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors group"
            >
              <Phone className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-1">Sună-ne</h3>
              <p className="text-orange-100">+40 742 325 429</p>
            </a>

            <a
              href="mailto:info@skaiurbancrag.ro"
              className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors group"
            >
              <Mail className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-1">Scrie-ne</h3>
              <p className="text-orange-100">info@skaiurbancrag.ro</p>
            </a>

            <a
              href="https://wa.me/40742325429"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors group"
            >
              <MessageSquare className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
              <p className="text-orange-100">Răspuns rapid</p>
            </a>
          </div>

          {/* Benefits */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full" />
              <span>Fără taxă de înscriere</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full" />
              <span>Echipament inclus pentru începători</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full" />
              <span>Instructori certificați</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
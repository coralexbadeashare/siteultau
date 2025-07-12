import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <Link href="/oasis-expres" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Înapoi la Acasă
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <Shield className="w-10 h-10 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Politica de Confidențialitate
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            Protecția datelor tale este prioritatea noastră
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Informații Generale</h2>
                <p className="text-gray-300 leading-relaxed">
                  Oasis Expres respectă confidențialitatea datelor personale ale clienților săi. 
                  Această politică de confidențialitate explică modul în care colectăm, utilizăm și 
                  protejăm informațiile dumneavoastră.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Date Colectate</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  În cadrul activității noastre, putem colecta următoarele tipuri de date:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Nume și prenume
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Număr de telefon
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Adresă de email
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Informații despre vehicul (pentru serviciile de spălare)
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Scopul Prelucrării Datelor</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Datele personale sunt prelucrate în următoarele scopuri:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Furnizarea serviciilor de spălătorie auto
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Comunicare cu clienții (răspuns la întrebări, programări)
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Îmbunătățirea serviciilor noastre
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Marketing și oferte speciale (doar cu consimțământul dvs.)
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Securitatea Datelor</h2>
                <p className="text-gray-300 leading-relaxed">
                  Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele 
                  personale împotriva accesului neautorizat, pierderii, distrugerii sau divulgării. 
                  Accesul la date este limitat doar la personalul autorizat.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Drepturile Dumneavoastră</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  În conformitate cu GDPR, aveți următoarele drepturi:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Dreptul de acces la datele personale
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Dreptul de rectificare a datelor incorecte
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Dreptul de ștergere a datelor
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Dreptul de a restricționa prelucrarea
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Dreptul la portabilitatea datelor
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Dreptul de a vă opune prelucrării
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Perioada de Păstrare</h2>
                <p className="text-gray-300 leading-relaxed">
                  Datele personale sunt păstrate doar pe perioada necesară îndeplinirii scopurilor 
                  pentru care au fost colectate sau conform cerințelor legale aplicabile.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Cookie-uri</h2>
                <p className="text-gray-300 leading-relaxed">
                  Site-ul nostru poate utiliza cookie-uri pentru a îmbunătăți experiența 
                  utilizatorului. Puteți configura browserul pentru a refuza cookie-urile, 
                  însă acest lucru poate afecta funcționalitatea site-ului.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Pentru orice întrebări sau solicitări privind această politică de confidențialitate 
                  sau prelucrarea datelor dumneavoastră, ne puteți contacta la:
                </p>
                <div className="bg-white/5 rounded-lg p-6 space-y-2">
                  <p className="text-gray-300">
                    <span className="text-cyan-400">Email:</span> info@oasis-expres.ro
                  </p>
                  <p className="text-gray-300">
                    <span className="text-cyan-400">Telefon:</span> 0772 006 156
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Modificări ale Politicii</h2>
                <p className="text-gray-300 leading-relaxed">
                  Ne rezervăm dreptul de a actualiza această politică de confidențialitate periodic. 
                  Orice modificări vor fi publicate pe această pagină, iar data ultimei actualizări 
                  va fi menționată la sfârșitul documentului.
                </p>
              </div>

              <div className="border-t border-gray-700 pt-8">
                <p className="text-gray-400 text-sm">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
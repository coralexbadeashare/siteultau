import { Shield, Lock, Eye, UserCheck, Database, FileText, AlertCircle, Mail, MapPin } from 'lucide-react'

const GDPRPage = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Date Colectate',
      content: [
        'Date personale furnizate voluntar: nume, prenume, adresă email, număr de telefon, adresă, date profesionale',
        'Date colectate automat: adresă IP, locație geografică, browser, sistem de operare, comportament de navigare',
        'Cookie-uri pentru îmbunătățirea experienței utilizatorilor'
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Scopul Prelucrării',
      content: [
        'Oferirea de asistență și suport clienților',
        'Procesarea comenzilor și livrarea produselor',
        'Comunicări de marketing (doar cu consimțământul dvs.)',
        'Îmbunătățirea serviciilor și produselor noastre',
        'Respectarea obligațiilor legale'
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Securitatea Datelor',
      content: [
        'Utilizăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor',
        'Acces restricționat la date personale doar pentru personalul autorizat',
        'Criptare SSL pentru transmiterea datelor online',
        'Actualizări regulate ale sistemelor de securitate'
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Drepturile Dumneavoastră',
      content: [
        'Dreptul de acces la datele personale',
        'Dreptul de rectificare a datelor incorecte',
        'Dreptul de ștergere („dreptul de a fi uitat")',
        'Dreptul de restricționare a prelucrării',
        'Dreptul la portabilitatea datelor',
        'Dreptul de opoziție la prelucrare',
        'Dreptul de a depune plângere la ANSPDCP'
      ]
    }
  ]

  const legalBases = [
    { title: 'Consimțământ', description: 'Pentru activități de marketing și comunicări promoționale' },
    { title: 'Contract', description: 'Pentru procesarea comenzilor și livrarea produselor' },
    { title: 'Interes legitim', description: 'Pentru îmbunătățirea serviciilor și prevenirea fraudelor' },
    { title: 'Obligație legală', description: 'Pentru respectarea cerințelor legale și fiscale' }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold">Politica de Confidențialitate</h1>
          </div>
          <p className="text-xl text-green-50 max-w-3xl">
            La Zelda Projects, protecția datelor dumneavoastră personale este o prioritate. 
            Această politică explică cum colectăm, folosim și protejăm informațiile dumneavoastră.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Angajamentul Nostru</h3>
                <p className="text-gray-700">
                  ZELDA PROJECTS SRL respectă Regulamentul General privind Protecția Datelor (GDPR) 
                  și legislația română în vigoare. Această politică a fost actualizată ultima dată 
                  la 1 ianuarie 2024.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Această politică de confidențialitate descrie modul în care ZELDA PROJECTS SRL 
              (&ldquo;noi&rdquo;, &ldquo;nouă&rdquo; sau &ldquo;nostru&rdquo;) colectează, utilizează, stochează și protejează 
              informațiile personale ale utilizatorilor site-ului nostru web și ale clienților noștri.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 rounded-lg p-3 text-green-600">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Bases */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Temeiuri Legale pentru Prelucrarea Datelor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalBases.map((base, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{base.title}</h3>
                <p className="text-gray-600">{base.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Politica de Cookie-uri</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Utilizăm cookie-uri pentru a îmbunătăți experiența dumneavoastră pe site-ul nostru. 
                Cookie-urile sunt fișiere mici de text stocate pe dispozitivul dumneavoastră.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="font-medium text-amber-900">Tipuri de cookie-uri utilizate:</p>
                <ul className="mt-2 space-y-1 text-amber-800">
                  <li>• Cookie-uri esențiale - necesare pentru funcționarea site-ului</li>
                  <li>• Cookie-uri de performanță - pentru analiza utilizării site-ului</li>
                  <li>• Cookie-uri funcționale - pentru salvarea preferințelor</li>
                </ul>
              </div>
              <p>
                Puteți gestiona preferințele pentru cookie-uri din setările browser-ului dumneavoastră. 
                Dezactivarea cookie-urilor poate afecta funcționalitatea site-ului.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Perioada de Păstrare a Datelor
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Păstrăm datele dumneavoastră personale doar atât timp cât este necesar pentru 
              scopurile pentru care au fost colectate sau conform cerințelor legale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <Eye className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Date Clienți</h3>
              <p className="text-gray-600">Conform obligațiilor fiscale și legale (10 ani)</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Date Marketing</h3>
              <p className="text-gray-600">Până la retragerea consimțământului</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <Database className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Date Navigare</h3>
              <p className="text-gray-600">Maximum 2 ani de la colectare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact DPO */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Aveți Întrebări despre Datele Dumneavoastră?
                </h2>
                <p className="text-green-50 mb-4">
                  Pentru exercitarea drepturilor dumneavoastră sau pentru orice întrebări 
                  legate de protecția datelor, contactați-ne:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:office@zeldaprojects.ro" className="hover:underline">
                      office@zeldaprojects.ro
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Str. Frunzișului 11 S, Cluj-Napoca</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/20 backdrop-blur rounded-full p-8">
                  <Lock className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Update */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Această politică de confidențialitate a fost actualizată ultima dată la: 
            <span className="font-semibold"> 1 ianuarie 2024</span>
          </p>
        </div>
      </section>
    </main>
  )
}

export default GDPRPage
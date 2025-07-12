'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Info,
  AlertTriangle,
  FileText,
  Shield,
  HelpCircle,
  Lightbulb,
  Book
} from 'lucide-react'

export default function InformatiiUtilePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const faqCategories = [
    {
      title: "Întrebări Generale",
      icon: <HelpCircle className="w-6 h-6" />,
      questions: [
        {
          question: "Ce documente am nevoie pentru a închiria o remorcă?",
          answer: "Pentru închirierea unei remorci aveți nevoie de: buletin/carte de identitate valabilă, permis de conducere categoria B (minim 2 ani vechime), și o garanție care variază între 500-1500 lei în funcție de tipul remorci."
        },
        {
          question: "Pot conduce o remorcă fără permis special?",
          answer: "Da, pentru remorcile cu masă totală maximă autorizată de până la 750 kg nu este nevoie de permis special. Pentru remorci mai grele, este necesar permisul categoria BE."
        },
        {
          question: "Care este perioada minimă de închiriere?",
          answer: "Perioada minimă de închiriere este de 24 de ore. Oferim reduceri pentru închirieri pe termen lung (peste 7 zile)."
        }
      ]
    },
    {
      title: "Siguranță și Răspundere",
      icon: <Shield className="w-6 h-6" />,
      questions: [
        {
          question: "Ce se întâmplă în caz de accident sau defecțiune?",
          answer: "În caz de accident, contactați imediat Poliția și pe noi la numărul de urgență. Toate remorcile noastre sunt asigurate RCA. Pentru defecțiuni tehnice, vă oferim asistență gratuită și înlocuirea remorci."
        },
        {
          question: "Sunt responsabil pentru daunele produse remorci?",
          answer: "Da, clientul este responsabil pentru daunele produse din neglijență sau utilizare necorespunzătoare. De aceea solicităm o garanție care acoperă eventualele daune minore."
        },
        {
          question: "Ce acoperă asigurarea?",
          answer: "Asigurarea RCA acoperă daunele produse terților. Pentru protecție completă, recomandăm încheierea unei asigurări CASCO pentru perioada închirierii."
        }
      ]
    },
    {
      title: "Sfaturi pentru Utilizare",
      icon: <Lightbulb className="w-6 h-6" />,
      questions: [
        {
          question: "Cum încarc corect o remorcă?",
          answer: "Distribuiți greutatea uniform, cu 60% din greutate în fața remorci. Fixați bine încărcătura cu chingi sau frânghii. Nu depășiți capacitatea maximă indicată."
        },
        {
          question: "Ce viteza maximă pot avea cu remorca?",
          answer: "Viteza maximă legală cu remorcă este: 80 km/h pe drumuri naționale și 100 km/h pe autostrăzi. Recomandăm o viteză mai redusă pentru siguranță."
        },
        {
          question: "Cum parchez cu remorca?",
          answer: "Alegeți locuri de parcare spațioase. Pentru mers înapoi, rotiți volanul în direcția opusă față de cea în care doriți să meargă remorca. Exersați într-un spațiu liber înainte."
        }
      ]
    }
  ]

  const safetyTips = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
      title: "Verificări Înainte de Plecare",
      items: [
        "Verificați presiunea în anvelope",
        "Testați sistemul de iluminare",
        "Asigurați-vă că încărcătura este bine fixată",
        "Verificați cuplajul și lanțul de siguranță"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "În Timpul Conducerii",
      items: [
        "Măriți distanța de frânare",
        "Reduceți viteza în curbe",
        "Evitați manevrele bruște",
        "Fiți atenți la vântul lateral"
      ]
    },
    {
      icon: <Info className="w-8 h-8 text-green-600" />,
      title: "Încărcare Corectă",
      items: [
        "Nu depășiți masa maximă autorizată",
        "Distribuiți uniform greutatea",
        "Fixați obiectele care se pot mișca",
        "Lăsați spațiu pentru ventilație"
      ]
    }
  ]

  const documents = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Contract de Închiriere",
      description: "Model standard pentru toate închirierile",
      link: "#"
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Manual de Utilizare Remorci",
      description: "Ghid complet pentru utilizarea corectă",
      link: "#"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Termeni și Condiții",
      description: "Regulamentul complet al serviciilor",
      link: "#"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4">
          <Link href="/welmius" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Înapoi la Acasă
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Informații Utile
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Tot ce trebuie să știi despre închirierea de remorci și serviciile noastre
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Întrebări Frecvente
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Răspunsuri la cele mai comune întrebări ale clienților noștri
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const accordionIndex = categoryIndex * 10 + index
                    return (
                      <div key={index} className="faq-item">
                        <div 
                          className="faq-question"
                          onClick={() => setActiveAccordion(activeAccordion === accordionIndex ? null : accordionIndex)}
                        >
                          <span>{item.question}</span>
                          {activeAccordion === accordionIndex ? (
                            <ChevronUp className="w-5 h-5 text-orange-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                        <div className={`faq-answer ${activeAccordion === accordionIndex ? 'active' : ''}`}>
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sfaturi de Siguranță
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recomandări importante pentru utilizarea sigură a remorcilor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center justify-center mb-6">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {tip.title}
                </h3>
                <ul className="space-y-2">
                  {tip.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Documente Utile
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descarcă documentele necesare pentru închiriere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <a
                key={index}
                href={doc.link}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {doc.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {doc.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {doc.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ai Alte Întrebări?
            </h2>
            <p className="text-xl mb-8">
              Echipa noastră este disponibilă să te ajute cu orice informație ai nevoie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/welmius/contact" className="btn-secondary bg-white text-orange-600">
                Contactează-ne
              </Link>
              <a href="tel:0742020254" className="btn-primary bg-white/20 backdrop-blur-sm border-2 border-white">
                Sună Acum: 0742 020 254
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
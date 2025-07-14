import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Leaf, Apple, Droplets, Timer, Thermometer, Package, Shield, Sparkles } from 'lucide-react';

export default function CumProducem() {
  const juiceProcess = [
    {
      icon: Apple,
      title: 'Selecție Manuală',
      description: 'Fiecare fruct este verificat și selectat manual pentru calitate perfectă',
      details: ['Fructe la maturitate optimă', 'Fără deteriorări sau pete', 'Spălare în apă rece']
    },
    {
      icon: Droplets,
      title: 'Presare la Rece',
      description: 'Tehnologie modernă de presare care păstrează nutrienții intacți',
      details: ['Presare hidraulică lentă', 'Temperatură sub 5°C', 'Randament 55-65%']
    },
    {
      icon: Timer,
      title: 'Filtrare Ușoară',
      description: 'Eliminăm impuritățile păstrând pulpa naturală și fibrele',
      details: ['Filtre din inox alimentar', 'Păstrare pulpă naturală', 'Fără clarificare chimică']
    },
    {
      icon: Thermometer,
      title: 'Pasteurizare Blândă',
      description: 'Tratament termic minim pentru siguranță maximă',
      details: ['Temperatură 82°C', 'Timp minim necesar', 'Păstrare vitamine']
    },
    {
      icon: Package,
      title: 'Îmbuteliere la Cald',
      description: 'Ambalare în sticle sterilizate pentru prospețime îndelungată',
      details: ['Sticle din sticlă brună', 'Sigilare ermetică', 'Fără conservanți']
    }
  ];

  const jamProcess = [
    {
      step: '01',
      title: 'Preparare Fructe',
      description: 'Spălare, curățare și tăiere după necesitate',
      image: 'https://images.unsplash.com/photo-1607895378960-75d27e8b00e9'
    },
    {
      step: '02',
      title: 'Fierbere Tradițională',
      description: 'În cazane de cupru, cu amestecare continuă',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff'
    },
    {
      step: '03',
      title: 'Adăugare Zahăr',
      description: 'Cantitate minimă pentru conservare naturală',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64'
    },
    {
      step: '04',
      title: 'Testare Consistență',
      description: 'Verificare punct de gelificare natural',
      image: 'https://images.unsplash.com/photo-1474625121024-7595bfbc57ac'
    },
    {
      step: '05',
      title: 'Ambalare la Cald',
      description: 'În borcane sterilizate pentru conservare perfectă',
      image: 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba'
    }
  ];

  const quality = [
    { icon: Shield, title: 'Control Calitate', description: 'Verificare la fiecare etapă de producție' },
    { icon: Leaf, title: 'Ingrediente Pure', description: 'Doar fructe și legume românești certificate' },
    { icon: Thermometer, title: 'Monitorizare Temperatură', description: 'Control precis pentru păstrarea nutrienților' },
    { icon: Sparkles, title: 'Igienă Perfectă', description: 'Standarde înalte de curățenie și siguranță' }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/70 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52"
            alt="Proces de producție artizanal"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cum Producem
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            De la recoltare până la ambalare, fiecare pas este făcut cu grijă 
            pentru a păstra gustul și nutrienții naturali
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span>Procesare minimă pentru calitate maximă</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Artă și Știință în Fiecare Produs
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Combinăm metodele tradiționale cu tehnologia modernă pentru a crea 
              produse care păstrează esența naturii. Fiecare etapă a procesului 
              nostru este gândită să maximizeze calitatea și să minimizeze 
              procesarea.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-amber-50 rounded-xl p-6">
                <div className="text-4xl mb-3">🌱</div>
                <h3 className="font-bold text-gray-900 mb-2">100% Natural</h3>
                <p className="text-gray-600">Fără aditivi chimici sau conservanți artificiali</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <div className="text-4xl mb-3">🌡️</div>
                <h3 className="font-bold text-gray-900 mb-2">Procesare Blândă</h3>
                <p className="text-gray-600">Temperaturi minime pentru nutrienți maximi</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <div className="text-4xl mb-3">✋</div>
                <h3 className="font-bold text-gray-900 mb-2">Lucru Manual</h3>
                <p className="text-gray-600">Atenție la detalii în fiecare etapă</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Juice Production Process */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Procesul de Producție - Sucuri Naturale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Presare la rece pentru păstrarea integrală a vitaminelor și mineralelor
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {juiceProcess.map((step, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100"></div>
                    </div>
                  </div>
                </div>
                {index < juiceProcess.length - 1 && (
                  <div className="flex justify-center my-8">
                    <ArrowRight className="w-8 h-8 text-orange-300 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jam Production Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Procesul de Producție - Dulcețuri Artizanale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rețete tradiționale preparate cu răbdare și dragoste
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {jamProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-3xl font-bold">{step.step}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Controlul Calității
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Standarde înalte la fiecare pas pentru produse de excepție
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quality.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tehnologie Modernă, Tradiție Păstrată
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Investim constant în echipamente moderne care ne permit să păstrăm 
                metodele tradiționale de preparare, dar cu eficiență și siguranță sporite.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Presă Hidraulică Modernă</h4>
                    <p className="text-gray-600">Presare lentă la temperatură scăzută pentru sucuri premium</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Cazane din Inox Alimentar</h4>
                    <p className="text-gray-600">Pentru prepararea dulcețurilor cu distribuție uniformă a căldurii</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sistem de Pasteurizare Controlat</h4>
                    <p className="text-gray-600">Temperatură și timp precise pentru siguranță fără compromisuri</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-amber-100 rounded-full opacity-30 blur-3xl" />
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
                  alt="Echipamente moderne de producție"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sustenabilitate și Responsabilitate
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Grija pentru natură se reflectă în fiecare aspect al producției noastre
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-5xl mb-4">♻️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Zero Deșeuri
                </h3>
                <p className="text-gray-600">
                  Pulpa și resturile vegetale devin compost pentru grădinile locale
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ambalaje Eco
                </h3>
                <p className="text-gray-600">
                  Sticle reutilizabile și borcane reciclabile 100%
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-5xl mb-4">🌳</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Local și Natural
                </h3>
                <p className="text-gray-600">
                  Sprijinim agricultura locală și biodiversitatea
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vino să Vezi Cum Lucrăm
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Organizăm vizite la atelierul nostru pentru cei care vor să vadă 
            procesul de producție și să guste din produsele noastre proaspete
          </p>
          <a 
            href="/amillaria/contact" 
            className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-block"
          >
            Programează o Vizită
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
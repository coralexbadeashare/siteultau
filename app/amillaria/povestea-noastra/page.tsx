import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Heart, Leaf, Users, Award, MapPin, Calendar, Sparkles } from 'lucide-react';

export default function PovesteaNoastra() {
  const values = [
    {
      icon: Leaf,
      title: 'Natural 100%',
      description: 'Fără aditivi, conservanți sau coloranți artificiali - doar natură pură'
    },
    {
      icon: Heart,
      title: 'Pasiune de Familie',
      description: 'O afacere construită cu dragoste și dedicare de două decenii'
    },
    {
      icon: Users,
      title: 'Comunitate Locală',
      description: 'Sprijinim fermierii locali și economia rurală din Transilvania'
    },
    {
      icon: Award,
      title: 'Calitate Premium',
      description: 'Standarde înalte în selecția ingredientelor și procesare'
    }
  ];

  const milestones = [
    { year: '2004', event: 'Începutul poveștii - Prima presă de fructe', icon: Sparkles },
    { year: '2008', event: 'Extindere gamă - Lansare dulcețuri artizanale', icon: Cherry },
    { year: '2012', event: 'Deschidere atelier producție în Berindu', icon: MapPin },
    { year: '2016', event: 'Certificare producție ecologică', icon: Award },
    { year: '2020', event: 'Lansare servicii de presare pentru terți', icon: Users },
    { year: '2024', event: '20 de ani de produse naturale românești', icon: Heart }
  ];

  const team = [
    {
      name: 'Dorina Pop',
      role: 'Co-fondator & Director Producție',
      description: 'Păstrătoarea rețetelor de familie și sufletul producției artizanale',
      phone: '0744 555 666'
    },
    {
      name: 'Sorin Pop',
      role: 'Co-fondator & Director General',
      description: 'Vizionarul care a transformat o pasiune într-o afacere de succes',
      phone: '0744 777 888'
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-transparent to-orange-900/70 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1595855759920-86582396756a"
            alt="Livadă transilvăneană"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Povestea Noastră
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Două decenii de pasiune pentru produse naturale și autentice din inima Transilvaniei
          </p>
        </div>
      </section>

      {/* Story Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full mb-6">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="text-green-700 font-medium">Din 2004</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                O Poveste despre Natură, Familie și Tradiție
              </h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl mb-6">
                În 2004, Dorina și Sorin Pop au avut o viziune simplă dar puternică: 
                să aducă pe mesele românilor produse naturale, autentice, preparate 
                cu respect pentru natură și tradiție.
              </p>
              <p className="mb-6">
                Totul a început cu o mică presă de fructe și dorința de a oferi 
                familiei și prietenilor sucuri naturale, presate la rece, fără 
                zahăr adăugat sau conservanți. Calitatea și gustul autentic al 
                produselor noastre au făcut rapid înconjurul comunității.
              </p>
              <p className="mb-6">
                Situați în inima Transilvaniei, într-o zonă binecuvântată cu 
                livezi și grădini roditoare, am avut privilegiul de a colabora 
                cu fermieri locali care împărtășesc aceeași pasiune pentru 
                agricultura sustenabilă și produse de calitate.
              </p>
              <p>
                Astăzi, după 20 de ani, Amillaria rămâne o afacere de familie 
                care pune la fel de mult suflet în fiecare produs ca în prima 
                zi. Fiecare sticlă de suc, fiecare borcan de dulceață sau 
                preparat poartă cu sine nu doar gustul desăvârșit al naturii, 
                ci și povestea unei familii care crede că natural înseamnă viață.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Valorile Care Ne Definesc
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principiile care ghidează fiecare decizie și fiecare produs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              20 de Ani de Evoluție
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-200"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`inline-block ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <milestone.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Familia Amillaria
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oamenii din spatele produselor pe care le iubiți
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80 bg-gradient-to-br from-green-100 to-orange-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Users className="w-16 h-16 text-green-600" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-green-600 hover:text-green-700 font-medium">
                    {member.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Filozofia Noastră: Natural Înseamnă Viață
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Pentru noi, &ldquo;natural&rdquo; nu este doar un cuvânt de marketing. 
                Este o promisiune pe care o facem cu fiecare produs: să păstrăm 
                integritatea ingredientelor, să respectăm procesele tradiționale 
                și să oferim doar ce este mai bun din natură.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Credem că alimentele procesate minimal, fără aditivi chimici, 
                nu doar că au un gust mai bun, dar contribuie și la o viață 
                mai sănătoasă. De aceea, toate produsele noastre sunt preparate 
                cu metode care păstrează nutrienții și aroma naturală.
              </p>
              <div className="bg-green-50 rounded-xl p-6">
                <p className="text-green-800 italic">
                  &ldquo;Când bei un pahar din sucul nostru sau guști din dulcețurile 
                  noastre, vrem să simți exact gustul fructului cules din livadă, 
                  nu al chimicalelor din laborator.&rdquo;
                </p>
                <p className="text-green-600 font-medium mt-2">- Dorina Pop</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-green-100 rounded-full opacity-30 blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1569163139394-de4798aa4e6f"
                      alt="Procesare naturală"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82"
                      alt="Fructe proaspete"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
                      alt="Grădină naturală"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1610832958506-aa56368176cf"
                      alt="Recoltare manuală"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Din Inima Transilvaniei
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Două locații care servesc comunitatea noastră
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Sediu Cluj-Napoca</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Biroul nostru administrativ și punct de contact pentru clienți 
                și parteneri de afaceri.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Consultanță și comenzi</li>
                <li>• Degustări produse</li>
                <li>• Întâlniri cu clienții B2B</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Atelier Berindu</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Inima producției noastre, unde magia se întâmplă și fructele 
                devin produse delicioase.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Producție artizanală</li>
                <li>• Presare la rece</li>
                <li>• Depozitare și ambalare</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Fii Parte din Povestea Noastră
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Alege produse naturale, susține producătorii locali și bucură-te 
            de gustul autentic al Transilvaniei
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/amillaria/produse" 
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-block"
            >
              Descoperă Produsele
            </a>
            <a 
              href="/amillaria/contact" 
              className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all inline-block border border-white/30"
            >
              Contactează-ne
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Add Cherry icon since it's not in lucide-react
function Cherry({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 13a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5M12 7c.31 0 .61.04.9.11C11.73 5.84 11 4 11 2h2c0 2.84 1.16 5.24 2.76 6.74A5.48 5.48 0 0 1 19.5 13a5.5 5.5 0 0 1-5.5 5.5c-1.22 0-2.35-.4-3.26-1.07-.43.47-.93.87-1.49 1.2A3.999 3.999 0 0 1 5.5 20 4 4 0 0 1 1.5 16a4 4 0 0 1 4-4c.22 0 .44.02.65.05C6.06 11.37 6 10.69 6 10c0-1.65.33-3.19.92-4.38l1.65.66C8.08 7.38 7.82 8.65 7.82 10c0 .7.07 1.38.2 2.02.07-.01.15-.02.23-.02.8 0 1.54.24 2.16.65A5.467 5.467 0 0 1 12 7z"/>
    </svg>
  );
}
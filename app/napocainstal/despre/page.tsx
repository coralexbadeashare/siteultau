import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Award, Users, Target, Heart, Shield, CheckCircle } from 'lucide-react';

export default function DespreNoi() {
  const values = [
    {
      icon: Heart,
      title: 'Pasiune pentru Excelență',
      description: 'Fiecare proiect este tratat cu dedicare și atenție la detalii'
    },
    {
      icon: Shield,
      title: 'Integritate și Transparență',
      description: 'Comunicare deschisă și prețuri corecte pentru toți clienții'
    },
    {
      icon: Users,
      title: 'Orientare către Client',
      description: 'Soluții personalizate adaptate nevoilor specifice'
    },
    {
      icon: Target,
      title: 'Inovație Continuă',
      description: 'Tehnologii moderne și metode actualizate de lucru'
    }
  ];

  const team = [
    {
      name: 'Alexandru Popescu',
      role: 'Director General',
      description: 'Peste 20 de ani experiență în domeniul instalațiilor',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a'
    },
    {
      name: 'Maria Ionescu',
      role: 'Inginer Șef Proiecte',
      description: 'Specialist în sisteme HVAC și eficiență energetică',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2'
    },
    {
      name: 'Andrei Gheorghe',
      role: 'Coordonator Tehnic',
      description: 'Expert în instalații termice și sanitare complexe',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7'
    },
    {
      name: 'Elena Dumitrescu',
      role: 'Manager Relații Clienți',
      description: 'Dedicată satisfacției complete a clienților',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
    }
  ];

  const certifications = [
    'ISO 9001:2015 - Sistem de Management al Calității',
    'ISO 14001:2015 - Sistem de Management de Mediu',
    'Autorizație ANRE - Instalații Gaze Naturale',
    'Certificare ISCIR - Instalații sub Presiune',
    'Atestat ANRSC - Servicii Publice',
    'Certificare VRF/VRV - Daikin, Mitsubishi'
  ];

  const milestones = [
    { year: '2009', event: 'Înființarea companiei Napoca Instal' },
    { year: '2012', event: 'Prima certificare ISO 9001' },
    { year: '2015', event: 'Extindere servicii climatizare comercială' },
    { year: '2018', event: 'Deschidere showroom și service center' },
    { year: '2021', event: 'Lansare divizie energie regenerabilă' },
    { year: '2024', event: 'Peste 2500 proiecte finalizate cu succes' }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8fbc8c1b25b"
            alt="Echipa Napoca Instal"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Despre Napoca Instal
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            15+ ani de experiență în instalații termice, sanitare și climatizare
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Povestea Noastră</h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Fondată în 2009, Napoca Instal s-a născut din dorința de a oferi servicii de instalații 
                la cele mai înalte standarde de calitate în Cluj-Napoca și împrejurimi. Ce a început ca 
                o mică echipă de profesioniști pasionați a evoluat într-una dintre cele mai respectate 
                companii de instalații din regiune.
              </p>
              <p className="mb-6">
                De-a lungul anilor, am crescut organic, investind constant în formarea echipei noastre, 
                în echipamente moderne și în certificări profesionale. Astăzi, cu peste 50 de specialiști 
                certificați și mai mult de 2500 de proiecte finalizate cu succes, suntem mândri să fim 
                partenerul de încredere pentru soluții complete de instalații.
              </p>
              <p>
                Misiunea noastră rămâne neschimbată: să oferim servicii de instalații care depășesc 
                așteptările clienților, folosind tehnologii moderne, materiale de calitate și o abordare 
                orientată către rezultate durabile și eficiență energetică.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Valorile Noastre</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare zi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Echipa Noastră</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesioniști dedicați succesului proiectului tău
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certificari" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificări și Autorizații</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Acreditat și autorizat pentru toate tipurile de instalații
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Evoluția Noastră</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-24 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-orange-200 mx-12 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-lg text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                De Ce Să Alegi Napoca Instal?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Experiență Dovedită</h3>
                    <p className="text-gray-600">Peste 15 ani de activitate și mii de clienți mulțumiți</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Echipă Certificată</h3>
                    <p className="text-gray-600">Personal calificat și autorizat pentru toate tipurile de lucrări</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Tehnologii Moderne</h3>
                    <p className="text-gray-600">Echipamente și soluții de ultimă generație</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Garanție Extinsă</h3>
                    <p className="text-gray-600">Până la 5 ani garanție pentru lucrările executate</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Service 24/7</h3>
                    <p className="text-gray-600">Asistență non-stop pentru situații de urgență</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Echipa la lucru"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section id="cariere" className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Alătură-te Echipei Noastre!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Căutăm permanent profesioniști pasionați să se alăture echipei noastre în creștere
          </p>
          <a 
            href="mailto:cariere@napocainstal.ro" 
            className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-block"
          >
            Vezi Pozițiile Deschise
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
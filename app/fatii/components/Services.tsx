import Link from 'next/link'
import { Truck, Users, Shield, AlertTriangle, Car, Cat, Briefcase, GraduationCap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Manager Transport",
      description: "Certificare pentru manageri de transport marfă și persoane conform Reg. CE 1071/2009",
      duration: "4 săptămâni",
      price: "De la 1.500 RON",
      color: "from-blue-500 to-blue-600",
      href: "/fatii/cursuri/manager-transport"
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Șofer Profesionist Marfă",
      description: "Calificare pentru conducerea vehiculelor de transport marfă peste 3.5 tone",
      duration: "280 ore",
      price: "De la 2.200 RON",
      color: "from-green-500 to-green-600",
      href: "/fatii/cursuri/sofer-marfa"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Șofer Profesionist Persoane",
      description: "Calificare pentru conducerea autobuzelor și autocarelor",
      duration: "280 ore",
      price: "De la 2.200 RON",
      color: "from-purple-500 to-purple-600",
      href: "/fatii/cursuri/sofer-persoane"
    },
    {
      icon: <AlertTriangle className="h-12 w-12" />,
      title: "Consilier ADR",
      description: "Specializare pentru transportul mărfurilor periculoase",
      duration: "5 zile",
      price: "De la 1.800 RON",
      color: "from-orange-500 to-orange-600",
      href: "/fatii/cursuri/adr"
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Instructor Auto",
      description: "Formare pentru viitori instructori auto și profesori de legislație",
      duration: "4 săptămâni",
      price: "De la 2.500 RON",
      color: "from-red-500 to-red-600",
      href: "/fatii/cursuri/instructor"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Taxi și Închiriere",
      description: "Atestat profesional pentru taximetriști și șoferi rent-a-car",
      duration: "2 săptămâni",
      price: "De la 800 RON",
      color: "from-yellow-500 to-yellow-600",
      href: "/fatii/cursuri/taxi"
    },
    {
      icon: <Cat className="h-12 w-12" />,
      title: "Transport Animale Vii",
      description: "Certificare pentru transportul profesional de animale",
      duration: "3 zile",
      price: "De la 900 RON",
      color: "from-pink-500 to-pink-600",
      href: "/fatii/cursuri/transport-animale"
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Perfecționare Periodică",
      description: "Cursuri de actualizare pentru păstrarea certificărilor",
      duration: "35 ore",
      price: "De la 600 RON",
      color: "from-indigo-500 to-indigo-600",
      href: "/fatii/cursuri/perfectionare"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cursurile Noastre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferim o gamă completă de cursuri de formare profesională în domeniul transporturilor, 
            toate acreditate și recunoscute la nivel național și european
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative p-6 space-y-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300 text-sm">
                  {service.description}
                </p>
                
                <div className="pt-4 border-t border-gray-200 group-hover:border-white/20 transition-colors duration-300">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 group-hover:text-gray-200 transition-colors duration-300">
                      {service.duration}
                    </span>
                    <span className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                      {service.price}
                    </span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium">
                    Vezi detalii →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/fatii/cursuri"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <span className="text-lg font-semibold">Vezi Toate Cursurile</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
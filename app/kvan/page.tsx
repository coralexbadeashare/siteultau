
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "Casa Modernă București",
    category: "Rezidențial",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    description: "O casă contemporană cu linii curate și spații deschise"
  },
  {
    id: 2,
    title: "Clădire de Birouri Tech Hub",
    category: "Comercial",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    description: "Spațiu modern de lucru pentru companii de tehnologie"
  },
  {
    id: 3,
    title: "Vila de Lux Snagov",
    category: "Rezidențial",
    year: "2022",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    description: "Vilă exclusivă cu vedere la lac"
  },
  {
    id: 4,
    title: "Centru Cultural Urban",
    category: "Public",
    year: "2022",
    image: "https://images.unsplash.com/photo-1587382559340-a5a4a2c2d338?w=800&h=600&fit=crop",
    description: "Spațiu multifuncțional pentru evenimente culturale"
  },
  {
    id: 5,
    title: "Complex Rezidențial Green",
    category: "Rezidențial",
    year: "2021",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    description: "Locuințe sustenabile cu certificare verde"
  },
  {
    id: 6,
    title: "Showroom Auto Premium",
    category: "Comercial",
    year: "2021",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17f?w=800&h=600&fit=crop",
    description: "Design modern pentru prezentarea automobilelor de lux"
  }
]

export default function KvanPage() {
  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">KVAN Architecture</h1>
          <p className="text-xl md:text-2xl">Design modern. Soluții inovatoare. Excelență în arhitectură.</p>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proiectele Noastre</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorați portofoliul nostru de proiecte arhitecturale care combină funcționalitatea cu estetica modernă
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <div className="aspect-w-16 aspect-h-12">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-sm font-semibold uppercase tracking-wider mb-1">{project.category}</p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold mb-2">50+</h3>
              <p className="text-gray-400">Proiecte Finalizate</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">15+</h3>
              <p className="text-gray-400">Ani de Experiență</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">98%</h3>
              <p className="text-gray-400">Clienți Mulțumiți</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">12</h3>
              <p className="text-gray-400">Premii Câștigate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
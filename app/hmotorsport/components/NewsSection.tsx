import Link from 'next/link'
import { Calendar, ArrowRight, Trophy, Wrench, Car } from 'lucide-react'

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Victorie la Campionatul Național de Rally',
      excerpt: 'Echipa noastră asistată a câștigat etapa de la Brașov cu un timp record.',
      date: '15 Dec 2023',
      category: 'Competiții',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop',
      icon: <Trophy className="w-4 h-4" />
    },
    {
      id: 2,
      title: 'Noua Mașină în Flotă: Porsche 911 GT3',
      excerpt: 'Am adăugat un nou Porsche 911 GT3 Cup pregătit pentru circuit.',
      date: '10 Dec 2023',
      category: 'Flota Auto',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&h=400&fit=crop',
      icon: <Car className="w-4 h-4" />
    },
    {
      id: 3,
      title: 'Workshop Tehnic: Pregătire pentru Sezonul 2024',
      excerpt: 'Organizăm un workshop gratuit despre pregătirea tehnică pentru noul sezon.',
      date: '5 Dec 2023',
      category: 'Evenimente',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&h=400&fit=crop',
      icon: <Wrench className="w-4 h-4" />
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ultimele <span className="text-red-600">Noutăți</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rămâneți la curent cu ultimele evenimente, competiții și noutăți din lumea motorsportului
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article) => (
            <article
              key={article.id}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                    {article.icon}
                    <span>{article.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                
                <Link
                  href={`/hmotorsport/noutati/${article.id}`}
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
                >
                  Citește mai mult
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/hmotorsport/noutati"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Vezi Toate Noutățile
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
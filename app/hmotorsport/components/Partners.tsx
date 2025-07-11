const Partners = () => {
  const partners = [
    { name: 'Michelin', logo: '🏁' },
    { name: 'Motul', logo: '🛢️' },
    { name: 'Brembo', logo: '🔧' },
    { name: 'OZ Racing', logo: '⚙️' },
    { name: 'Sparco', logo: '🏎️' },
    { name: 'Alpine Stars', logo: '⭐' }
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Partenerii Noștri
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-2">{partner.logo}</div>
              <span className="text-gray-700 font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
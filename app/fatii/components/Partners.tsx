export default function Partners() {
  const partners = [
    { name: "Ministerul Transporturilor", type: "Autoritate" },
    { name: "ARR", type: "Asociație" },
    { name: "EuroTRA", type: "Membru Fondator" },
    { name: "CNFPA", type: "Acreditare" },
    { name: "ANC", type: "Certificare" },
    { name: "ISCTR", type: "Colaborator" }
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Parteneri și Acreditări
          </h2>
          <p className="text-lg text-gray-600">
            Colaborăm cu instituții de prestigiu pentru a oferi cele mai bune servicii
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                {partner.name.substring(0, 2)}
              </div>
              <h3 className="font-semibold text-gray-900">{partner.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
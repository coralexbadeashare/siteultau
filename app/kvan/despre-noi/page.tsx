export default function DesprePage() {
  return (
    <div>
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-600">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold">Despre Noi</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cine Suntem</h2>
            <p className="text-lg text-gray-600 mb-4">
              KVAN Architecture este un birou de arhitectură modern, dedicat creării de spații care inspiră și 
              îmbunătățesc calitatea vieții. Cu peste 15 ani de experiență în domeniu, ne-am câștigat reputația 
              de a livra proiecte excepționale care îmbină funcționalitatea cu designul estetic.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Echipa noastră de arhitecți și designeri talentați lucrează îndeaproape cu clienții pentru a 
              transforma viziunile în realitate, respectând întotdeauna cele mai înalte standarde de calitate 
              și sustenabilitate.
            </p>
            <p className="text-lg text-gray-600">
              De la rezidențe private la clădiri comerciale și spații publice, fiecare proiect este abordat 
              cu aceeași pasiune și atenție la detalii, rezultând în creații arhitecturale care rezistă 
              testului timpului.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
              alt="KVAN Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Valorile Noastre</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Inovație</h4>
              <p className="text-gray-600">Abordăm fiecare proiect cu soluții creative și tehnologii moderne</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Sustenabilitate</h4>
              <p className="text-gray-600">Promovăm arhitectura verde și practici ecologice în toate proiectele</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Colaborare</h4>
              <p className="text-gray-600">Lucrăm îndeaproape cu clienții pentru a realiza viziunea lor perfectă</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Echipa Noastră</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h4 className="text-xl font-semibold">Alexandru Popescu</h4>
              <p className="text-gray-600">Arhitect Principal</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h4 className="text-xl font-semibold">Maria Ionescu</h4>
              <p className="text-gray-600">Director Design</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h4 className="text-xl font-semibold">Andrei Radu</h4>
              <p className="text-gray-600">Manager Proiect</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h4 className="text-xl font-semibold">Elena Gheorghe</h4>
              <p className="text-gray-600">Arhitect Senior</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
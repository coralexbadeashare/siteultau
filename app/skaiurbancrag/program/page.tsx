import { Clock, Calendar, AlertCircle, Sun, Moon, Coffee, Mountain } from 'lucide-react'
import Link from 'next/link'

const ProgramPage = () => {
  const schedule = {
    regular: [
      { 
        days: 'Luni - Vineri', 
        hours: '16:00 - 22:00',
        icon: <Sun className="w-6 h-6" />,
        color: 'from-yellow-500 to-orange-500'
      },
      { 
        days: 'Sâmbătă - Duminică', 
        hours: '15:00 - 19:00',
        icon: <Coffee className="w-6 h-6" />,
        color: 'from-blue-500 to-blue-600'
      }
    ],
    special: [
      { date: '23 Decembrie', status: 'Închis', reason: 'Ajun de Crăciun' },
      { date: '24-26 Decembrie', status: 'Închis', reason: 'Sărbători de Crăciun' },
      { date: '31 Decembrie', status: 'Închis', reason: 'Revelion' },
      { date: '1-2 Ianuarie 2024', status: 'Închis', reason: 'An Nou' }
    ]
  }

  const dailySchedule = [
    {
      time: '16:00 - 17:00',
      monday: 'Curs Copii 4-7 ani',
      tuesday: 'Escaladă Liberă',
      wednesday: 'Curs Copii 8-14 ani',
      thursday: 'Escaladă Liberă',
      friday: 'Curs Copii Avansați',
      saturday: 'Curs Familie',
      sunday: 'Escaladă Liberă'
    },
    {
      time: '17:00 - 18:30',
      monday: 'Curs Copii 8-14 ani',
      tuesday: 'Curs Adulți Începători',
      wednesday: 'Curs Copii Avansați',
      thursday: 'Curs Adulți Intermediar',
      friday: 'Escaladă Liberă',
      saturday: 'Petreceri Private',
      sunday: 'Workshop Tehnici'
    },
    {
      time: '18:30 - 20:00',
      monday: 'Curs Adulți Începători',
      tuesday: 'Antrenament Avansat',
      wednesday: 'Yoga',
      thursday: 'Curs Adulți Avansați',
      friday: 'Community Night',
      saturday: 'Evenimente',
      sunday: 'Închis'
    },
    {
      time: '20:00 - 22:00',
      monday: 'Escaladă Liberă',
      tuesday: 'Escaladă Liberă',
      wednesday: 'Escaladă Liberă',
      thursday: 'Escaladă Liberă',
      friday: 'Escaladă Liberă',
      saturday: '-',
      sunday: '-'
    }
  ]

  const activities = [
    {
      name: 'Cursuri Copii',
      schedule: 'L, Mi, V: 16:00-18:00',
      color: 'bg-blue-500',
      description: 'Grupe pe vârste cu instructori specializați'
    },
    {
      name: 'Cursuri Adulți',
      schedule: 'Ma, J: 18:30-20:00',
      color: 'bg-green-500',
      description: 'Toate nivelurile, de la începător la avansat'
    },
    {
      name: 'Yoga',
      schedule: 'Mi: 18:30-20:00',
      color: 'bg-purple-500',
      description: 'Yoga pentru climbers - flexibilitate și echilibru'
    },
    {
      name: 'Community Night',
      schedule: 'V: 18:30-22:00',
      color: 'bg-orange-500',
      description: 'Seară socială cu jocuri și competiții amicale'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 flex items-center">
            <Clock className="w-12 h-12 mr-4" />
            Program
          </h1>
          <p className="text-xl text-orange-50 max-w-3xl">
            Deschiși 7 zile pe săptămână pentru a-ți oferi flexibilitate maximă în practicarea escaladei
          </p>
        </div>
      </section>

      {/* Main Schedule */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schedule.regular.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{item.days}</h3>
                    <div className={`bg-gradient-to-br ${item.color} rounded-full p-3 text-white`}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900">{item.hours}</div>
                  <p className="text-gray-600 mt-2">Ore de funcționare</p>
                </div>
              </div>
            ))}
          </div>

          {/* Holiday Notice */}
          <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-red-900 mb-4">
                  Zile Libere și Sărbători Legale
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {schedule.special.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <div>
                        <span className="font-medium text-red-900">{item.date}</span>
                        <span className="text-red-700 text-sm block">{item.reason}</span>
                      </div>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Orar Săptămânal Detaliat
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-50 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Ora</th>
                  <th className="px-4 py-4 text-center">Luni</th>
                  <th className="px-4 py-4 text-center">Marți</th>
                  <th className="px-4 py-4 text-center">Miercuri</th>
                  <th className="px-4 py-4 text-center">Joi</th>
                  <th className="px-4 py-4 text-center">Vineri</th>
                  <th className="px-4 py-4 text-center">Sâmbătă</th>
                  <th className="px-4 py-4 text-center">Duminică</th>
                </tr>
              </thead>
              <tbody>
                {dailySchedule.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="px-4 py-4 font-medium text-gray-900">{row.time}</td>
                    <td className="px-4 py-4 text-center text-sm">{row.monday}</td>
                    <td className="px-4 py-4 text-center text-sm">{row.tuesday}</td>
                    <td className="px-4 py-4 text-center text-sm">{row.wednesday}</td>
                    <td className="px-4 py-4 text-center text-sm">{row.thursday}</td>
                    <td className="px-4 py-4 text-center text-sm">{row.friday}</td>
                    <td className="px-4 py-4 text-center text-sm">{row.saturday}</td>
                    <td className="px-4 py-4 text-center text-sm">{row.sunday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-600 mt-4">
            * Programul poate suferi modificări. Verifică pagina noastră de Facebook pentru ultimele actualizări.
          </p>
        </div>
      </section>

      {/* Activities Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Activități Regulate
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className={`w-4 h-4 ${activity.color} rounded-full mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                <div className="flex items-center text-sm text-gray-700">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  {activity.schedule}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Hours */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 rounded-xl p-8">
              <Mountain className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Acces Liber</h3>
              <p className="text-gray-400">
                În afara orelor de curs, sala este disponibilă pentru antrenament individual
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8">
              <Moon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Evenimente Private</h3>
              <p className="text-gray-400">
                Posibilitate de închiriere exclusivă în afara programului normal
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8">
              <Coffee className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Weekend Special</h3>
              <p className="text-gray-400">
                Sâmbăta dimineața rezervată pentru cursuri familie și evenimente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vrei să Participi la Cursuri?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Înscrie-te acum și alătură-te comunității noastre de pasionați
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/cursuri"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
            >
              Vezi Toate Cursurile
            </Link>
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Rezervă un Loc
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProgramPage
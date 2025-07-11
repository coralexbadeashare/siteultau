import { Clock, Calendar, AlertCircle } from 'lucide-react'

const Schedule = () => {
  const schedule = [
    { day: 'Luni - Vineri', hours: '16:00 - 22:00', type: 'weekday' },
    { day: 'Sâmbătă - Duminică', hours: '15:00 - 19:00', type: 'weekend' }
  ]

  const holidays = [
    { date: '23-26 Decembrie', reason: 'Sărbători de Crăciun' },
    { date: '31 Decembrie', reason: 'Revelion' },
    { date: '1-2 Ianuarie', reason: 'An Nou' }
  ]

  const activities = [
    { time: '17:00 - 18:00', activity: 'Curs Copii Începători', days: 'Luni, Miercuri', color: 'bg-blue-500' },
    { time: '18:00 - 19:30', activity: 'Curs Adulți', days: 'Marți, Joi', color: 'bg-green-500' },
    { time: '19:00 - 20:30', activity: 'Yoga', days: 'Miercuri', color: 'bg-purple-500' },
    { time: '10:00 - 12:00', activity: 'Curs Copii Weekend', days: 'Sâmbătă', color: 'bg-orange-500' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Program de <span className="text-orange-500">Funcționare</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem deschiși 7 zile pe săptămână pentru a-ți oferi flexibilitate maximă
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Schedule */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Ore de Funcționare
                </h3>
              </div>
              
              <div className="p-8">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-4 ${
                      index !== schedule.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        item.type === 'weekday' ? 'bg-blue-500' : 'bg-green-500'
                      }`} />
                      <span className="text-lg font-medium text-gray-900">{item.day}</span>
                    </div>
                    <span className="text-lg text-gray-700 font-semibold">{item.hours}</span>
                  </div>
                ))}
              </div>

              {/* Holiday Notice */}
              <div className="bg-red-50 p-6 border-t border-red-100">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Zile Libere</h4>
                    <ul className="space-y-1">
                      {holidays.map((holiday, index) => (
                        <li key={index} className="text-sm text-red-700">
                          <span className="font-medium">{holiday.date}</span> - {holiday.reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activities Schedule */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  Program Activități
                </h3>
              </div>
              
              <div className="p-8 space-y-4">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className={`w-2 h-full ${activity.color} rounded-full`} />
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-900">{activity.activity}</h4>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {activity.time}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {activity.days}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 p-6 border-t border-orange-100">
                <p className="text-center text-orange-800">
                  <span className="font-semibold">Notă:</span> Programul activităților poate suferi modificări. 
                  Verifică pe pagina noastră de Facebook pentru ultimele actualizări.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Acces Liber</h4>
            <p className="text-blue-700 text-sm">
              În afara orelor de curs, sala este disponibilă pentru escaladă liberă
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Rezervări Private</h4>
            <p className="text-green-700 text-sm">
              Posibilitate de închiriere privată pentru grupuri în afara programului
            </p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-2">Evenimente Speciale</h4>
            <p className="text-purple-700 text-sm">
              Organizăm competiții și evenimente tematice lunar
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
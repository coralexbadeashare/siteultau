"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  DollarSign,
  Activity,
  ShoppingBag,
  UserPlus,
  Clock
} from "lucide-react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { useData } from "../../contexts/DataContext";
import { format, startOfWeek, endOfWeek, eachDayOfInterval } from "date-fns";
import { ro } from "date-fns/locale";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function AdminDashboard() {
  const { appointments, getStatistics } = useData();
  const statistics = getStatistics();

  // Get today's appointments
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayAppointments = appointments.filter(app => {
    const appDate = new Date(app.date);
    appDate.setHours(0, 0, 0, 0);
    return appDate.getTime() === today.getTime();
  });

  // Calculate monthly revenue
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const monthlyAppointments = appointments.filter(app => {
    const appDate = new Date(app.date);
    return appDate.getMonth() === currentMonth && 
           appDate.getFullYear() === currentYear && 
           app.status === "completed";
  });
  const monthlyRevenue = monthlyAppointments.reduce((sum, app) => sum + app.price, 0);

  // Calculate conversion rate (completed vs total)
  const conversionRate = appointments.length > 0 
    ? Math.round((statistics.completedAppointments / appointments.length) * 100)
    : 0;

  // Get recent appointments (last 5)
  const recentAppointments = appointments
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)
    .map(app => ({
      id: app.id,
      client: app.clientName,
      service: app.service,
      time: format(new Date(app.date), "HH:mm"),
      status: app.status,
      date: app.date
    }));

  // Calculate top services
  const serviceStats: { [key: string]: { bookings: number; revenue: number } } = {};
  appointments.forEach(app => {
    if (!serviceStats[app.service]) {
      serviceStats[app.service] = { bookings: 0, revenue: 0 };
    }
    serviceStats[app.service].bookings += 1;
    if (app.status === "completed") {
      serviceStats[app.service].revenue += app.price;
    }
  });

  const topServices = Object.entries(serviceStats)
    .map(([name, stats]) => ({
      name,
      bookings: stats.bookings,
      revenue: `${stats.revenue.toLocaleString("ro-RO")} RON`
    }))
    .sort((a, b) => b.bookings - a.bookings)
    .slice(0, 4);

  const stats = [
    {
      title: "Total Clienți",
      value: statistics.totalClients.toLocaleString("ro-RO"),
      change: "+12%",
      trend: "up" as const,
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Programări Azi",
      value: todayAppointments.length.toString(),
      change: "+5%",
      trend: "up" as const,
      icon: Calendar,
      color: "bg-green-500",
    },
    {
      title: "Venituri Lunare",
      value: `${monthlyRevenue.toLocaleString("ro-RO")} RON`,
      change: "+23%",
      trend: "up" as const,
      icon: DollarSign,
      color: "bg-purple-500",
    },
    {
      title: "Rata Conversie",
      value: `${conversionRate}%`,
      change: "-2%",
      trend: "down" as const,
      icon: TrendingUp,
      color: "bg-orange-500",
    },
  ];

  // Chart data - Revenue by month
  const monthLabels = statistics.revenueByMonth.map(item => item.month);
  const monthRevenue = statistics.revenueByMonth.map(item => item.revenue);
  
  const revenueData = {
    labels: monthLabels.length > 0 ? monthLabels : ["No data"],
    datasets: [
      {
        label: "Venituri",
        data: monthRevenue.length > 0 ? monthRevenue : [0],
        borderColor: "rgb(236, 72, 153)",
        backgroundColor: "rgba(236, 72, 153, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Services distribution
  const serviceLabels = statistics.popularServices.map(s => s.name);
  const serviceValues = statistics.popularServices.map(s => s.count);
  
  const servicesData = {
    labels: serviceLabels.length > 0 ? serviceLabels : ["No services"],
    datasets: [
      {
        data: serviceValues.length > 0 ? serviceValues : [1],
        backgroundColor: [
          "rgba(236, 72, 153, 0.8)",
          "rgba(168, 85, 247, 0.8)",
          "rgba(34, 197, 94, 0.8)",
          "rgba(251, 146, 60, 0.8)",
          "rgba(59, 130, 246, 0.8)",
        ],
      },
    ],
  };

  // Weekly bookings
  const startOfThisWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
  const endOfThisWeek = endOfWeek(new Date(), { weekStartsOn: 1 });
  const daysOfWeek = eachDayOfInterval({ start: startOfThisWeek, end: endOfThisWeek });
  
  const weeklyBookings = daysOfWeek.map(day => {
    const dayStart = new Date(day);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(day);
    dayEnd.setHours(23, 59, 59, 999);
    
    return appointments.filter(app => {
      const appDate = new Date(app.date);
      return appDate >= dayStart && appDate <= dayEnd;
    }).length;
  });

  const bookingsData = {
    labels: ["Lun", "Mar", "Mie", "Joi", "Vin", "Sâm", "Dum"],
    datasets: [
      {
        label: "Programări",
        data: weeklyBookings,
        backgroundColor: "rgba(168, 85, 247, 0.8)",
      },
    ],
  };

  return (
    <div className="p-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Dashboard</h1>
        <p className="text-gray-600 mt-2">Bun venit înapoi! Iată un sumar al activității tale.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:scale-[1.02] hover:border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3.5 rounded-xl ${stat.color} bg-opacity-90 shadow-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full ${
                stat.trend === "up" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
              }`}>
                <span className="text-sm font-semibold">
                  {stat.change}
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`${
                  stat.trend === "up" ? "rotate-0" : "rotate-180"
                }`}>
                  <path d="M6 3L9 7H3L6 3Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500 text-sm mt-2 font-medium">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Evoluție Venituri</h2>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option>Ultimul an</option>
              <option>Ultimele 6 luni</option>
              <option>Ultima lună</option>
            </select>
          </div>
          <Line data={revenueData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Distribuție Servicii</h2>
          <Doughnut data={servicesData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Appointments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Programări Recente</h2>
            <Link href="/bellachicstudio/admin/appointments" className="text-pink-600 hover:text-pink-700 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Vezi toate 
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm font-medium">
                  <th className="pb-4 font-medium">Client</th>
                  <th className="pb-4 font-medium">Serviciu</th>
                  <th className="pb-4 font-medium">Ora</th>
                  <th className="pb-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAppointments.length > 0 ? recentAppointments.map((appointment) => (
                  <tr key={appointment.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl mr-3 flex items-center justify-center">
                          <span className="text-sm font-semibold text-purple-700">
                            {appointment.client.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{appointment.client}</p>
                          <p className="text-xs text-gray-500">{format(new Date(appointment.date), "d MMM", { locale: ro })}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-gray-700 font-medium">{appointment.service}</td>
                    <td className="py-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="font-medium">{appointment.time}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                        appointment.status === "confirmed"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : appointment.status === "completed"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : appointment.status === "cancelled"
                          ? "bg-red-50 text-red-700 border border-red-200"
                          : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          appointment.status === "confirmed" ? "bg-green-600" : 
                          appointment.status === "completed" ? "bg-blue-600" :
                          appointment.status === "cancelled" ? "bg-red-600" :
                          "bg-yellow-600"
                        }`}></div>
                        {appointment.status === "confirmed" ? "Confirmat" : 
                         appointment.status === "completed" ? "Finalizat" :
                         appointment.status === "cancelled" ? "Anulat" :
                         "În așteptare"}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-gray-500">
                      Nu există programări recente
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Top Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top Servicii</h2>
          <div className="space-y-4">
            {topServices.length > 0 ? topServices.map((service, index) => (
              <div key={service.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    index === 0 ? "bg-pink-100" :
                    index === 1 ? "bg-purple-100" :
                    index === 2 ? "bg-green-100" : "bg-orange-100"
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? "bg-pink-500" :
                      index === 1 ? "bg-purple-500" :
                      index === 2 ? "bg-green-500" : "bg-orange-500"
                    }`}></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{service.name}</p>
                    <p className="text-sm text-gray-500">{service.bookings} rezervări</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{service.revenue}</p>
                  <p className="text-xs text-gray-500">Total venituri</p>
                </div>
              </div>
            )) : (
              <p className="text-gray-500 text-center py-8">Nu există date despre servicii</p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Weekly Bookings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 bg-white rounded-2xl shadow-md p-8 border border-gray-100"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-6">Programări Săptămânale</h2>
        <Bar data={bookingsData} options={{ responsive: true, maintainAspectRatio: false }} height={200} />
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <Link href="/bellachicstudio/admin/appointments" className="group p-5 bg-gradient-to-br from-pink-600 to-pink-700 text-white rounded-2xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]">
          <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-semibold">Programare Nouă</span>
        </Link>
        <Link href="/bellachicstudio/admin/clients" className="group p-5 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]">
          <UserPlus className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-semibold">Client Nou</span>
        </Link>
        <Link href="/bellachicstudio/admin/promotions" className="group p-5 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]">
          <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-semibold">Promoție Nouă</span>
        </Link>
        <Link href="/bellachicstudio/admin/reports" className="group p-5 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]">
          <Activity className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-semibold">Vezi Rapoarte</span>
        </Link>
      </motion.div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/DataContext";
import { useRouter } from "next/navigation";
import { Calendar, Clock, Phone, Mail, Search, ChevronLeft, ChevronRight, Check, X, Edit2, Trash2, Plus, DollarSign } from "lucide-react";
import { format, startOfWeek, endOfWeek, addDays, isSameDay, isToday } from "date-fns";
import { ro } from "date-fns/locale";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import AppointmentModal from "../components/AppointmentModal";

const appointmentStatuses = {
  pending: { label: "În așteptare", color: "bg-yellow-50 text-yellow-700 border border-yellow-200" },
  confirmed: { label: "Confirmat", color: "bg-green-50 text-green-700 border border-green-200" },
  cancelled: { label: "Anulat", color: "bg-red-50 text-red-700 border border-red-200" },
  completed: { label: "Finalizat", color: "bg-blue-50 text-blue-700 border border-blue-200" },
};

export default function AppointmentsPage() {
  const { user, isLoading } = useAuth();
  const { appointments, updateAppointment, deleteAppointment, services } = useData();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [viewMode, setViewMode] = useState<"day" | "week">("day");
  const [showModal, setShowModal] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/bellachicstudio/admin/login");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (!user) return null;

  // Filter appointments
  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = apt.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         apt.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || apt.status === filterStatus;
    const matchesDate = viewMode === "day" 
      ? isSameDay(new Date(apt.date), selectedDate)
      : new Date(apt.date) >= startOfWeek(selectedDate, { weekStartsOn: 1 }) && 
        new Date(apt.date) <= endOfWeek(selectedDate, { weekStartsOn: 1 });
    
    return matchesSearch && matchesStatus && matchesDate;
  }).sort((a, b) => {
    // Sort by date and time
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA.getTime() !== dateB.getTime()) {
      return dateA.getTime() - dateB.getTime();
    }
    return a.time.localeCompare(b.time);
  });

  const handleUpdateStatus = (id: string, newStatus: "pending" | "confirmed" | "cancelled" | "completed") => {
    updateAppointment(id, { status: newStatus });
  };

  const handleDeleteAppointment = (id: string) => {
    if (confirm("Sigur vrei să ștergi această programare?")) {
      deleteAppointment(id);
    }
  };

  const handleEditAppointment = (id: string) => {
    setEditingAppointment(id);
    setShowModal(true);
  };

  // Calculate stats for the day/week
  const statsAppointments = filteredAppointments.filter(apt => {
    const matchesDate = viewMode === "day" 
      ? isSameDay(new Date(apt.date), selectedDate)
      : new Date(apt.date) >= startOfWeek(selectedDate, { weekStartsOn: 1 }) && 
        new Date(apt.date) <= endOfWeek(selectedDate, { weekStartsOn: 1 });
    return matchesDate;
  });

  const totalRevenue = statsAppointments
    .filter(apt => apt.status === "completed")
    .reduce((sum, apt) => sum + apt.price, 0);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Programări</h1>
            <p className="text-gray-600">Gestionează programările clienților</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            {Object.entries(appointmentStatuses).map(([key, status]) => {
              const count = statsAppointments.filter(apt => apt.status === key).length;
              return (
                <div key={key} className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{status.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{count}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${status.color.split(' ')[0]}`} />
                  </div>
                </div>
              );
            })}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Venit Total</p>
                  <p className="text-2xl font-bold text-pink-600">{totalRevenue.toLocaleString("ro-RO")} RON</p>
                </div>
                <DollarSign className="h-8 w-8 text-pink-600" />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Caută după nume sau serviciu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                >
                  <option value="all">Toate statusurile</option>
                  {Object.entries(appointmentStatuses).map(([key, status]) => (
                    <option key={key} value={key}>{status.label}</option>
                  ))}
                </select>

                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("day")}
                    className={`px-4 py-2 rounded ${viewMode === "day" ? "bg-white shadow" : ""}`}
                  >
                    Zi
                  </button>
                  <button
                    onClick={() => setViewMode("week")}
                    className={`px-4 py-2 rounded ${viewMode === "week" ? "bg-white shadow" : ""}`}
                  >
                    Săptămână
                  </button>
                </div>

                <button 
                  onClick={() => {
                    setEditingAppointment(null);
                    setShowModal(true);
                  }}
                  className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Programare Nouă
                </button>
              </div>
            </div>

            {/* Date Navigation */}
            <div className="flex items-center justify-center mt-6 gap-4">
              <button
                onClick={() => setSelectedDate(prev => addDays(prev, viewMode === "day" ? -1 : -7))}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  {viewMode === "day" 
                    ? format(selectedDate, "EEEE, d MMMM yyyy", { locale: ro })
                    : `${format(startOfWeek(selectedDate, { weekStartsOn: 1 }), "d MMM", { locale: ro })} - ${format(endOfWeek(selectedDate, { weekStartsOn: 1 }), "d MMM yyyy", { locale: ro })}`
                  }
                </h2>
                {isToday(selectedDate) && viewMode === "day" && (
                  <span className="text-sm text-pink-600">Astăzi</span>
                )}
              </div>

              <button
                onClick={() => setSelectedDate(prev => addDays(prev, viewMode === "day" ? 1 : 7))}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => setSelectedDate(new Date())}
                className="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-colors ml-4"
              >
                Azi
              </button>
            </div>
          </div>

          {/* Appointments List */}
          <div className="space-y-4">
            {filteredAppointments.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Nu există programări pentru această perioadă</p>
              </div>
            ) : (
              filteredAppointments.map((appointment) => (
                <div key={appointment.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{appointment.clientName}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${appointmentStatuses[appointment.status as keyof typeof appointmentStatuses].color}`}>
                            {appointmentStatuses[appointment.status as keyof typeof appointmentStatuses].label}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                            {format(new Date(appointment.date), "d MMM yyyy", { locale: ro })}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-gray-400" />
                            {appointment.time} ({appointment.duration} min)
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Phone className="h-4 w-4 mr-2 text-gray-400" />
                            {appointment.clientPhone}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Mail className="h-4 w-4 mr-2 text-gray-400" />
                            {appointment.clientEmail}
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">{appointment.service}</p>
                              <p className="text-sm text-gray-600">
                                {services.find(s => s.name === appointment.service)?.category || "General"}
                              </p>
                            </div>
                            <p className="text-lg font-semibold text-pink-600">{appointment.price} RON</p>
                          </div>
                          {appointment.notes && (
                            <p className="mt-2 text-sm text-gray-600 italic">Note: {appointment.notes}</p>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 ml-4">
                        {appointment.status === "pending" && (
                          <>
                            <button
                              onClick={() => handleUpdateStatus(appointment.id, "confirmed")}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              title="Confirmă"
                            >
                              <Check className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleUpdateStatus(appointment.id, "cancelled")}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Anulează"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </>
                        )}
                        {appointment.status === "confirmed" && (
                          <button
                            onClick={() => handleUpdateStatus(appointment.id, "completed")}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Marchează ca finalizat"
                          >
                            <Check className="h-5 w-5" />
                          </button>
                        )}
                        <button
                          onClick={() => handleEditAppointment(appointment.id)}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Editează"
                        >
                          <Edit2 className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteAppointment(appointment.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Șterge"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>

      {/* Appointment Modal */}
      {showModal && (
        <AppointmentModal
          appointmentId={editingAppointment}
          onClose={() => {
            setShowModal(false);
            setEditingAppointment(null);
          }}
        />
      )}
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Clock, User, DollarSign } from "lucide-react";
import { useData } from "../../contexts/DataContext";
import { format } from "date-fns";

interface AppointmentModalProps {
  appointmentId: string | null;
  onClose: () => void;
}

export default function AppointmentModal({ appointmentId, onClose }: AppointmentModalProps) {
  const { appointments, services, clients, addAppointment, updateAppointment, addClient } = useData();
  const isEditing = !!appointmentId;
  const appointment = isEditing ? appointments.find(a => a.id === appointmentId) : null;

  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    service: "",
    date: format(new Date(), "yyyy-MM-dd"),
    time: "10:00",
    duration: 60,
    price: 0,
    status: "pending" as "pending" | "confirmed" | "completed" | "cancelled",
    notes: "",
  });

  const [isNewClient, setIsNewClient] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState<string>("");

  useEffect(() => {
    if (appointment) {
      setFormData({
        clientName: appointment.clientName,
        clientEmail: appointment.clientEmail,
        clientPhone: appointment.clientPhone,
        service: appointment.service,
        date: format(new Date(appointment.date), "yyyy-MM-dd"),
        time: appointment.time,
        duration: appointment.duration,
        price: appointment.price,
        status: appointment.status,
        notes: appointment.notes || "",
      });
    }
  }, [appointment]);

  useEffect(() => {
    // Update price and duration when service changes
    const selectedService = services.find(s => s.name === formData.service);
    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        price: selectedService.price,
        duration: selectedService.duration,
      }));
    }
  }, [formData.service, services]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const appointmentData = {
      ...formData,
      date: new Date(formData.date),
    };

    if (isEditing && appointmentId) {
      updateAppointment(appointmentId, appointmentData);
    } else {
      addAppointment(appointmentData);

      // Add new client if needed
      if (isNewClient && !clients.find(c => c.email === formData.clientEmail)) {
        addClient({
          name: formData.clientName,
          email: formData.clientEmail,
          phone: formData.clientPhone,
          dateJoined: new Date(),
          lastVisit: new Date(),
          totalVisits: 0,
          totalSpent: 0,
          favoriteServices: [formData.service],
          rating: 5,
          notes: "",
          status: "active",
        });
      }
    }

    onClose();
  };

  const handleClientSelect = (clientId: string) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      setFormData(prev => ({
        ...prev,
        clientName: client.name,
        clientEmail: client.email,
        clientPhone: client.phone,
      }));
      setSelectedClientId(clientId);
      setIsNewClient(false);
    }
  };

  // Generate time slots
  const timeSlots = [];
  for (let hour = 9; hour < 21; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      timeSlots.push(time);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {isEditing ? "Editează Programare" : "Programare Nouă"}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Client Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-gray-500" />
              Informații Client
            </h3>
            
            <div className="mb-4">
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={isNewClient}
                  onChange={(e) => setIsNewClient(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm font-medium">Client nou</span>
              </label>
            </div>

            {!isNewClient && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Selectează client existent
                </label>
                <select
                  value={selectedClientId}
                  onChange={(e) => handleClientSelect(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">-- Selectează --</option>
                  {clients.map(client => (
                    <option key={client.id} value={client.id}>
                      {client.name} - {client.phone}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nume complet *
                </label>
                <input
                  type="text"
                  required
                  value={formData.clientName}
                  onChange={(e) => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  disabled={!isNewClient && selectedClientId !== ""}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.clientEmail}
                  onChange={(e) => setFormData(prev => ({ ...prev, clientEmail: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  disabled={!isNewClient && selectedClientId !== ""}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.clientPhone}
                  onChange={(e) => setFormData(prev => ({ ...prev, clientPhone: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  disabled={!isNewClient && selectedClientId !== ""}
                />
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Detalii Serviciu</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Serviciu *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">-- Selectează serviciu --</option>
                  {services.filter(s => s.active).map(service => (
                    <option key={service.id} value={service.name}>
                      {service.name} - {service.price} RON ({service.duration} min)
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as "pending" | "confirmed" | "completed" | "cancelled" }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="pending">În așteptare</option>
                  <option value="confirmed">Confirmat</option>
                  <option value="completed">Finalizat</option>
                  <option value="cancelled">Anulat</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Data *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Ora *
                </label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Durată (min) *
                </label>
                <input
                  type="number"
                  required
                  min="15"
                  step="15"
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <DollarSign className="inline h-4 w-4 mr-1" />
                  Preț (RON) *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: parseInt(e.target.value) }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Note adiționale
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
              placeholder="Preferințe speciale, alergii, etc."
            />
          </div>
        </form>

        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Anulează
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors cursor-pointer"
            >
              {isEditing ? "Salvează Modificări" : "Creează Programare"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
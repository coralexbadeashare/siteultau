"use client";

import { useState, useEffect } from "react";
import { X, User, Phone, Mail, Calendar, Star, FileText } from "lucide-react";
import { useData } from "../../contexts/DataContext";
import { format } from "date-fns";

interface ClientModalProps {
  clientId: string | null;
  onClose: () => void;
}

export default function ClientModal({ clientId, onClose }: ClientModalProps) {
  const { clients, addClient, updateClient } = useData();
  const isEditing = !!clientId;
  const client = isEditing ? clients.find(c => c.id === clientId) : null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateJoined: format(new Date(), "yyyy-MM-dd"),
    favoriteServices: [] as string[],
    rating: 5,
    notes: "",
    status: "active" as "active" | "inactive",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (client) {
      setFormData({
        name: client.name,
        email: client.email,
        phone: client.phone,
        dateJoined: format(new Date(client.dateJoined), "yyyy-MM-dd"),
        favoriteServices: client.favoriteServices,
        rating: client.rating,
        notes: client.notes,
        status: client.status,
      });
    }
  }, [client]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Numele este obligatoriu";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email-ul este obligatoriu";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalid";
    } else {
      // Check for duplicate email (except when editing same client)
      const existingClient = clients.find(c => c.email === formData.email && c.id !== clientId);
      if (existingClient) {
        newErrors.email = "Acest email este deja înregistrat";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefonul este obligatoriu";
    } else if (!/^(\+?40)?[0-9]{9,10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Număr de telefon invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const clientData = {
      ...formData,
      dateJoined: new Date(formData.dateJoined),
      lastVisit: client?.lastVisit || new Date(formData.dateJoined),
      totalVisits: client?.totalVisits || 0,
      totalSpent: client?.totalSpent || 0,
    };

    if (isEditing && clientId) {
      updateClient(clientId, clientData);
    } else {
      addClient(clientData);
    }

    onClose();
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      favoriteServices: prev.favoriteServices.includes(service)
        ? prev.favoriteServices.filter(s => s !== service)
        : [...prev.favoriteServices, service],
    }));
  };

  const availableServices = [
    "Coafor", "Vopsit", "Manichiură", "Pedichiură", 
    "Tratamente Faciale", "Makeup", "Epilare", "Masaj"
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {isEditing ? "Editează Client" : "Client Nou"}
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
          {/* Basic Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-gray-500" />
              Informații Personale
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nume complet *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="07XX XXX XXX"
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data înregistrării
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.dateJoined}
                    onChange={(e) => setFormData(prev => ({ ...prev, dateJoined: e.target.value }))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    disabled={isEditing}
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Preferințe</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Servicii Favorite
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {availableServices.map(service => (
                  <label key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.favoriteServices.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="mr-2 text-pink-600 focus:ring-pink-500"
                    />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating Client
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                    className="p-1 cursor-pointer"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        star <= formData.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm text-gray-600">{formData.rating} stele</span>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-gray-500" />
              Informații Adiționale
            </h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Note
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                placeholder="Preferințe speciale, alergii, observații..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as "active" | "inactive" }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="active">Activ</option>
                <option value="inactive">Inactiv</option>
              </select>
            </div>
          </div>

          {/* Display Stats for Existing Clients */}
          {isEditing && client && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Statistici Client</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Total Vizite:</span>
                  <p className="font-semibold">{client.totalVisits}</p>
                </div>
                <div>
                  <span className="text-gray-600">Total Cheltuit:</span>
                  <p className="font-semibold">{client.totalSpent.toLocaleString("ro-RO")} RON</p>
                </div>
                <div>
                  <span className="text-gray-600">Ultima Vizită:</span>
                  <p className="font-semibold">
                    {format(new Date(client.lastVisit), "d MMM yyyy")}
                  </p>
                </div>
                <div>
                  <span className="text-gray-600">Client Din:</span>
                  <p className="font-semibold">
                    {format(new Date(client.dateJoined), "d MMM yyyy")}
                  </p>
                </div>
              </div>
            </div>
          )}
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
              {isEditing ? "Salvează Modificări" : "Adaugă Client"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
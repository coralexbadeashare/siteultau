"use client";

import { useState, useEffect } from "react";
import { X, Package, Clock, DollarSign, Image as ImageIcon, Star } from "lucide-react";
import { useData } from "../../contexts/DataContext";

interface ServiceModalProps {
  serviceId: string | null;
  onClose: () => void;
}

export default function ServiceModal({ serviceId, onClose }: ServiceModalProps) {
  const { services, addService, updateService } = useData();
  const isEditing = !!serviceId;
  const service = isEditing ? services.find(s => s.id === serviceId) : null;

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    duration: 60,
    price: 0,
    image: "",
    popular: false,
    active: true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const categories = [
    "Coafor",
    "Manichiură",
    "Pedichiură",
    "Tratamente Faciale",
    "Makeup",
    "Epilare",
    "Masaj",
    "Altele"
  ];

  const defaultImages = {
    "Coafor": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400",
    "Manichiură": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    "Pedichiură": "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400",
    "Tratamente Faciale": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
    "Makeup": "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
    "Epilare": "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400",
    "Masaj": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400",
    "Altele": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400"
  };

  useEffect(() => {
    if (service) {
      setFormData({
        name: service.name,
        category: service.category,
        description: service.description,
        duration: service.duration,
        price: service.price,
        image: service.image,
        popular: service.popular,
        active: service.active,
      });
    }
  }, [service]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Numele serviciului este obligatoriu";
    }

    if (!formData.category) {
      newErrors.category = "Categoria este obligatorie";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Descrierea este obligatorie";
    }

    if (formData.duration < 15) {
      newErrors.duration = "Durata minimă este de 15 minute";
    }

    if (formData.price <= 0) {
      newErrors.price = "Prețul trebuie să fie mai mare de 0";
    }

    if (!formData.image.trim()) {
      newErrors.image = "URL-ul imaginii este obligatoriu";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (isEditing && serviceId) {
      updateService(serviceId, formData);
    } else {
      addService(formData);
    }

    onClose();
  };

  const handleCategoryChange = (category: string) => {
    setFormData(prev => ({
      ...prev,
      category,
      // Auto-set image if empty or if it's a default image
      image: (!prev.image || Object.values(defaultImages).includes(prev.image)) 
        ? defaultImages[category as keyof typeof defaultImages] || defaultImages.Altele
        : prev.image
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {isEditing ? "Editează Serviciu" : "Serviciu Nou"}
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
              <Package className="h-5 w-5 mr-2 text-gray-500" />
              Informații Generale
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nume serviciu *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Ex: Tuns și Coafat Dame"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Categorie *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                    errors.category ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">-- Selectează categoria --</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descriere *
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Descrie serviciul oferit..."
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                )}
              </div>
            </div>
          </div>

          {/* Pricing and Duration */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Preț și Durată</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Durată (minute) *
                </label>
                <input
                  type="number"
                  min="15"
                  step="15"
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                    errors.duration ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.duration && (
                  <p className="mt-1 text-sm text-red-600">{errors.duration}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <DollarSign className="inline h-4 w-4 mr-1" />
                  Preț (RON) *
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: parseInt(e.target.value) }))}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                    errors.price ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                )}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <ImageIcon className="h-5 w-5 mr-2 text-gray-500" />
              Imagine
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL imagine *
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                  errors.image ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="https://example.com/image.jpg"
              />
              {errors.image && (
                <p className="mt-1 text-sm text-red-600">{errors.image}</p>
              )}
              
              {formData.image && !errors.image && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Previzualizare:</p>
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full max-w-xs h-40 object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = defaultImages.Altele;
                      setErrors(prev => ({ ...prev, image: "URL-ul imaginii nu este valid" }));
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Options */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Opțiuni</h3>
            
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.popular}
                  onChange={(e) => setFormData(prev => ({ ...prev, popular: e.target.checked }))}
                  className="mr-3 text-pink-600 focus:ring-pink-500"
                />
                <div>
                  <span className="font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    Serviciu Popular
                  </span>
                  <p className="text-sm text-gray-500">Marchează ca serviciu recomandat</p>
                </div>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.active}
                  onChange={(e) => setFormData(prev => ({ ...prev, active: e.target.checked }))}
                  className="mr-3 text-pink-600 focus:ring-pink-500"
                />
                <div>
                  <span className="font-medium">Serviciu Activ</span>
                  <p className="text-sm text-gray-500">Disponibil pentru rezervări</p>
                </div>
              </label>
            </div>
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
              {isEditing ? "Salvează Modificări" : "Adaugă Serviciu"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
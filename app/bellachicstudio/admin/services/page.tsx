"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/DataContext";
import { useRouter } from "next/navigation";
import { 
  Scissors, Search, Plus, Edit2, Trash2, DollarSign, 
  Clock, Star, Package, ToggleRight 
} from "lucide-react";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import ServiceModal from "../components/ServiceModal";

export default function ServicesPage() {
  const { user, isLoading } = useAuth();
  const { services, appointments, deleteService } = useData();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState<string | null>(null);

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

  // Get unique categories
  const categories = Array.from(new Set(services.map(s => s.category)));

  // Calculate service statistics
  const serviceStats = services.map(service => {
    const serviceAppointments = appointments.filter(apt => apt.service === service.name);
    const completedAppointments = serviceAppointments.filter(apt => apt.status === "completed");
    const revenue = completedAppointments.reduce((sum, apt) => sum + apt.price, 0);
    const bookings = serviceAppointments.length;
    const averageRating = 4.5 + Math.random() * 0.5; // Placeholder - would come from reviews

    return {
      ...service,
      bookings,
      revenue,
      averageRating,
      lastBooked: serviceAppointments.length > 0 
        ? serviceAppointments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0].date
        : null,
    };
  });

  // Filter services
  let filteredServices = serviceStats.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "all" || service.category === filterCategory;
    const matchesStatus = filterStatus === "all" || 
                         (filterStatus === "active" && service.active) ||
                         (filterStatus === "inactive" && !service.active);
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Sort by revenue (highest first)
  filteredServices = filteredServices.sort((a, b) => b.revenue - a.revenue);

  const handleDeleteService = (id: string) => {
    const service = services.find(s => s.id === id);
    if (confirm(`Sigur vrei să ștergi serviciul "${service?.name}"? Această acțiune nu poate fi anulată.`)) {
      deleteService(id);
    }
  };

  const handleEditService = (id: string) => {
    setEditingService(id);
    setShowModal(true);
  };

  // Calculate overall statistics
  const totalRevenue = serviceStats.reduce((sum, service) => sum + service.revenue, 0);
  const totalBookings = serviceStats.reduce((sum, service) => sum + service.bookings, 0);
  const activeServices = services.filter(s => s.active).length;

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Servicii</h1>
            <p className="text-gray-600">Gestionează serviciile oferite de salon</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Servicii</p>
                  <p className="text-2xl font-bold text-gray-900">{services.length}</p>
                </div>
                <Package className="h-8 w-8 text-pink-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Servicii Active</p>
                  <p className="text-2xl font-bold text-gray-900">{activeServices}</p>
                </div>
                <ToggleRight className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Rezervări</p>
                  <p className="text-2xl font-bold text-gray-900">{totalBookings}</p>
                </div>
                <Scissors className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Venit Total</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {totalRevenue.toLocaleString("ro-RO")} RON
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-purple-600" />
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
                  placeholder="Caută servicii..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                >
                  <option value="all">Toate categoriile</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                >
                  <option value="all">Toate statusurile</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>

                <button 
                  onClick={() => {
                    setEditingService(null);
                    setShowModal(true);
                  }}
                  className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Serviciu Nou
                </button>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.length === 0 ? (
              <div className="col-span-full bg-white rounded-lg shadow p-12 text-center">
                <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Nu au fost găsite servicii care să corespundă criteriilor de căutare</p>
              </div>
            ) : (
              filteredServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {service.popular && (
                      <span className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    )}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                      service.active 
                        ? "bg-green-100 text-green-800" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {service.active ? "Activ" : "Inactiv"}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-500">{service.category}</p>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{service.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        {service.duration} min
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                        {service.price} RON
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Performanță</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{service.averageRating.toFixed(1)}</span>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Rezervări:</span>
                          <span className="font-medium">{service.bookings}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Venit:</span>
                          <span className="font-medium text-pink-600">
                            {service.revenue.toLocaleString("ro-RO")} RON
                          </span>
                        </div>
                        {service.lastBooked && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Ultima rezervare:</span>
                            <span className="text-xs">
                              {new Date(service.lastBooked).toLocaleDateString("ro-RO")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4 pt-4 border-t">
                      <button
                        onClick={() => handleEditService(service.id)}
                        className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Edit2 className="h-4 w-4 mr-2" />
                        Editează
                      </button>
                      <button
                        onClick={() => handleDeleteService(service.id)}
                        className="flex items-center justify-center px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary */}
          {filteredServices.length > 0 && (
            <div className="mt-6 text-sm text-gray-600 text-center">
              Afișare {filteredServices.length} din {services.length} servicii
            </div>
          )}
        </main>
      </div>

      {/* Service Modal */}
      {showModal && (
        <ServiceModal
          serviceId={editingService}
          onClose={() => {
            setShowModal(false);
            setEditingService(null);
          }}
        />
      )}
    </div>
  );
}
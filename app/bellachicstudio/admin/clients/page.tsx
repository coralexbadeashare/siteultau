"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/DataContext";
import { useRouter } from "next/navigation";
import { User, Search, Plus, Edit2, Trash2, Star, TrendingUp, Phone, Mail, Calendar, DollarSign } from "lucide-react";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import ClientModal from "../components/ClientModal";
import { format } from "date-fns";
import { ro } from "date-fns/locale";

export default function ClientsPage() {
  const { user, isLoading } = useAuth();
  const { clients, appointments, deleteClient } = useData();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [showModal, setShowModal] = useState(false);
  const [editingClient, setEditingClient] = useState<string | null>(null);

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

  // Calculate client statistics from appointments
  const clientStats = clients.map(client => {
    const clientAppointments = appointments.filter(apt => apt.clientEmail === client.email);
    const completedAppointments = clientAppointments.filter(apt => apt.status === "completed");
    const totalSpent = completedAppointments.reduce((sum, apt) => sum + apt.price, 0);
    const lastAppointment = clientAppointments
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
    
    return {
      ...client,
      totalVisits: completedAppointments.length,
      totalSpent,
      lastVisit: lastAppointment ? lastAppointment.date : client.dateJoined,
      upcomingAppointments: clientAppointments.filter(apt => 
        apt.status === "confirmed" && new Date(apt.date) > new Date()
      ).length,
    };
  });

  // Filter and sort clients
  let filteredClients = clientStats.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.phone.includes(searchQuery);
    const matchesStatus = filterStatus === "all" || client.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Sort clients
  filteredClients = [...filteredClients].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "visits":
        return b.totalVisits - a.totalVisits;
      case "spent":
        return b.totalSpent - a.totalSpent;
      case "lastVisit":
        return new Date(b.lastVisit).getTime() - new Date(a.lastVisit).getTime();
      default:
        return 0;
    }
  });

  const handleDeleteClient = (id: string) => {
    if (confirm("Sigur vrei să ștergi acest client? Această acțiune nu poate fi anulată.")) {
      deleteClient(id);
    }
  };

  const handleEditClient = (id: string) => {
    setEditingClient(id);
    setShowModal(true);
  };

  // Calculate overall statistics
  const activeClients = clients.filter(c => c.status === "active").length;
  const totalRevenue = clientStats.reduce((sum, client) => sum + client.totalSpent, 0);
  const averageRating = clients.length > 0 
    ? clients.reduce((sum, client) => sum + client.rating, 0) / clients.length 
    : 0;

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Clienți</h1>
            <p className="text-gray-600">Gestionează baza de date a clienților</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Clienți</p>
                  <p className="text-2xl font-bold text-gray-900">{clients.length}</p>
                </div>
                <User className="h-8 w-8 text-pink-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Clienți Activi</p>
                  <p className="text-2xl font-bold text-gray-900">{activeClients}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Rating Mediu</p>
                  <p className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
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
                  placeholder="Caută după nume, email sau telefon..."
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
                  <option value="all">Toți clienții</option>
                  <option value="active">Activi</option>
                  <option value="inactive">Inactivi</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                >
                  <option value="name">Sortează după Nume</option>
                  <option value="visits">Sortează după Vizite</option>
                  <option value="spent">Sortează după Cheltuieli</option>
                  <option value="lastVisit">Sortează după Ultima Vizită</option>
                </select>

                <button 
                  onClick={() => {
                    setEditingClient(null);
                    setShowModal(true);
                  }}
                  className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Client Nou
                </button>
              </div>
            </div>
          </div>

          {/* Clients Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statistici
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ultima Vizită
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acțiuni
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredClients.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                        Nu au fost găsiți clienți care să corespundă criteriilor de căutare
                      </td>
                    </tr>
                  ) : (
                    filteredClients.map((client) => (
                      <tr key={client.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                                {client.name.split(' ').map(n => n[0]).join('')}
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{client.name}</div>
                              <div className="text-sm text-gray-500">
                                Client din {format(new Date(client.dateJoined), "MMM yyyy", { locale: ro })}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col">
                            <div className="flex items-center text-sm text-gray-900">
                              <Mail className="h-4 w-4 mr-2 text-gray-400" />
                              {client.email}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Phone className="h-4 w-4 mr-2 text-gray-400" />
                              {client.phone}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm text-gray-900">
                                {client.totalVisits} vizite
                                {client.upcomingAppointments > 0 && (
                                  <span className="ml-2 text-xs text-green-600">
                                    ({client.upcomingAppointments} programate)
                                  </span>
                                )}
                              </div>
                              <div className="text-sm font-medium text-pink-600">
                                {client.totalSpent.toLocaleString("ro-RO")} RON
                              </div>
                            </div>
                            <div className="ml-4 flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < client.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                            {format(new Date(client.lastVisit), "d MMM yyyy", { locale: ro })}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            client.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {client.status === "active" ? "Activ" : "Inactiv"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleEditClient(client.id)}
                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                            title="Editează"
                          >
                            <Edit2 className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteClient(client.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Șterge"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary */}
          {filteredClients.length > 0 && (
            <div className="mt-4 text-sm text-gray-600 text-center">
              Afișare {filteredClients.length} din {clients.length} clienți
            </div>
          )}
        </main>
      </div>

      {/* Client Modal */}
      {showModal && (
        <ClientModal
          clientId={editingClient}
          onClose={() => {
            setShowModal(false);
            setEditingClient(null);
          }}
        />
      )}
    </div>
  );
}
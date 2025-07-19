'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import { useAuth } from '../../contexts/AuthContext';
import { Plus, Edit2, Trash2, Calendar, Percent, Tag, Clock, ToggleLeft, ToggleRight } from 'lucide-react';

interface Promotion {
  id: string;
  title: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  code?: string;
  startDate: string;
  endDate: string;
  applicableServices: string[];
  minOrderValue?: number;
  maxUsage?: number;
  currentUsage: number;
  isActive: boolean;
}

export default function PromotionsManagement() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive' | 'expired'>('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingPromotion, setEditingPromotion] = useState<Promotion | null>(null);

  const services = [
    'Machiaj de zi',
    'Machiaj de seară',
    'Machiaj de mireasă',
    'Curs de automachiere',
    'Consultație personalizată'
  ];

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/bellachicstudio/admin/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    // Load promotions from localStorage
    const savedPromotions = localStorage.getItem('promotions');
    if (savedPromotions) {
      setPromotions(JSON.parse(savedPromotions));
    } else {
      // Sample data
      const samplePromotions: Promotion[] = [
        {
          id: '1',
          title: 'Reducere de primăvară',
          description: '20% reducere la toate serviciile de machiaj',
          discountType: 'percentage',
          discountValue: 20,
          code: 'SPRING20',
          startDate: '2024-03-01',
          endDate: '2024-04-30',
          applicableServices: ['Machiaj de zi', 'Machiaj de seară'],
          minOrderValue: 150,
          currentUsage: 45,
          isActive: true
        },
        {
          id: '2',
          title: 'Ofertă pachet mireasă',
          description: '150 RON reducere pentru pachetul complet de nuntă',
          discountType: 'fixed',
          discountValue: 150,
          code: 'BRIDE2024',
          startDate: '2024-01-01',
          endDate: '2024-12-31',
          applicableServices: ['Machiaj de mireasă'],
          maxUsage: 50,
          currentUsage: 23,
          isActive: true
        }
      ];
      setPromotions(samplePromotions);
      localStorage.setItem('promotions', JSON.stringify(samplePromotions));
    }
  }, []);

  const getPromotionStatus = (promotion: Promotion) => {
    const now = new Date();
    const endDate = new Date(promotion.endDate);
    
    if (!promotion.isActive) return 'inactive';
    if (endDate < now) return 'expired';
    if (promotion.maxUsage && promotion.currentUsage >= promotion.maxUsage) return 'expired';
    return 'active';
  };

  const filteredPromotions = promotions.filter(promotion => {
    const matchesSearch = promotion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         promotion.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (promotion.code && promotion.code.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const status = getPromotionStatus(promotion);
    const matchesStatus = filterStatus === 'all' || status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const handleDeletePromotion = (id: string) => {
    if (confirm('Sigur vrei să ștergi această promoție?')) {
      const updatedPromotions = promotions.filter(promo => promo.id !== id);
      setPromotions(updatedPromotions);
      localStorage.setItem('promotions', JSON.stringify(updatedPromotions));
    }
  };

  const handleSavePromotion = (promotion: Promotion) => {
    let updatedPromotions;
    if (editingPromotion) {
      updatedPromotions = promotions.map(p => p.id === promotion.id ? promotion : p);
    } else {
      updatedPromotions = [...promotions, { ...promotion, id: Date.now().toString() }];
    }
    setPromotions(updatedPromotions);
    localStorage.setItem('promotions', JSON.stringify(updatedPromotions));
    setIsCreateModalOpen(false);
    setEditingPromotion(null);
  };

  const togglePromotionStatus = (id: string) => {
    const updatedPromotions = promotions.map(promo =>
      promo.id === id ? { ...promo, isActive: !promo.isActive } : promo
    );
    setPromotions(updatedPromotions);
    localStorage.setItem('promotions', JSON.stringify(updatedPromotions));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Se încarcă...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      
      <div className="flex-1 ml-64">
        <AdminHeader />
        
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Promoții</h1>
            <p className="text-gray-600 mt-2">Gestionează ofertele și reducerile</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Promoții active</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">
                    {promotions.filter(p => getPromotionStatus(p) === 'active').length}
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <Tag className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total utilizări</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">
                    {promotions.reduce((sum, p) => sum + p.currentUsage, 0)}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <Percent className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Expirate</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">
                    {promotions.filter(p => getPromotionStatus(p) === 'expired').length}
                  </p>
                </div>
                <div className="p-3 bg-red-100 rounded-full">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Inactive</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">
                    {promotions.filter(p => !p.isActive).length}
                  </p>
                </div>
                <div className="p-3 bg-gray-100 rounded-full">
                  <ToggleLeft className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Caută promoții..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center gap-4">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as 'all' | 'active' | 'inactive' | 'expired')}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="all">Toate</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="expired">Expirate</option>
                </select>
                
                <button
                  onClick={() => {
                    setEditingPromotion(null);
                    setIsCreateModalOpen(true);
                  }}
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Promoție nouă
                </button>
              </div>
            </div>
          </div>

          {/* Promotions List */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Promoție
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Reducere
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cod
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Perioadă
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Utilizări
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
                  {filteredPromotions.map((promotion) => {
                    const status = getPromotionStatus(promotion);
                    return (
                      <tr key={promotion.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{promotion.title}</div>
                            <div className="text-sm text-gray-500">{promotion.description}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center text-sm font-medium text-gray-900">
                            <Percent className="w-4 h-4 mr-1 text-gray-400" />
                            {promotion.discountType === 'percentage' 
                              ? `${promotion.discountValue}%`
                              : `${promotion.discountValue} RON`
                            }
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {promotion.code && (
                            <code className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm font-mono">
                              {promotion.code}
                            </code>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                              {new Date(promotion.startDate).toLocaleDateString('ro-RO')}
                            </div>
                            <div className="text-gray-500">
                              până la {new Date(promotion.endDate).toLocaleDateString('ro-RO')}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {promotion.currentUsage}
                            {promotion.maxUsage && ` / ${promotion.maxUsage}`}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : status === 'expired'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {status === 'active' ? 'Activă' : status === 'expired' ? 'Expirată' : 'Inactivă'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => togglePromotionStatus(promotion.id)}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              {promotion.isActive ? (
                                <ToggleRight className="w-5 h-5 text-green-600" />
                              ) : (
                                <ToggleLeft className="w-5 h-5" />
                              )}
                            </button>
                            <button
                              onClick={() => {
                                setEditingPromotion(promotion);
                                setIsCreateModalOpen(true);
                              }}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeletePromotion(promotion.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Create/Edit Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">
                {editingPromotion ? 'Editează promoție' : 'Promoție nouă'}
              </h2>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const selectedServices = Array.from(formData.getAll('services')) as string[];
                
                const promotion: Promotion = {
                  id: editingPromotion?.id || '',
                  title: formData.get('title') as string,
                  description: formData.get('description') as string,
                  discountType: formData.get('discountType') as 'percentage' | 'fixed',
                  discountValue: Number(formData.get('discountValue')),
                  code: formData.get('code') as string || undefined,
                  startDate: formData.get('startDate') as string,
                  endDate: formData.get('endDate') as string,
                  applicableServices: selectedServices,
                  minOrderValue: formData.get('minOrderValue') ? Number(formData.get('minOrderValue')) : undefined,
                  maxUsage: formData.get('maxUsage') ? Number(formData.get('maxUsage')) : undefined,
                  currentUsage: editingPromotion?.currentUsage || 0,
                  isActive: editingPromotion?.isActive ?? true
                };
                handleSavePromotion(promotion);
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Titlu promoție
                    </label>
                    <input
                      name="title"
                      type="text"
                      defaultValue={editingPromotion?.title}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descriere
                    </label>
                    <textarea
                      name="description"
                      rows={2}
                      defaultValue={editingPromotion?.description}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tip reducere
                      </label>
                      <select
                        name="discountType"
                        defaultValue={editingPromotion?.discountType || 'percentage'}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        <option value="percentage">Procentual (%)</option>
                        <option value="fixed">Sumă fixă (RON)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Valoare reducere
                      </label>
                      <input
                        name="discountValue"
                        type="number"
                        min="0"
                        step="0.01"
                        defaultValue={editingPromotion?.discountValue}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cod promoțional (opțional)
                    </label>
                    <input
                      name="code"
                      type="text"
                      defaultValue={editingPromotion?.code}
                      placeholder="Ex: SUMMER20"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Data început
                      </label>
                      <input
                        name="startDate"
                        type="date"
                        defaultValue={editingPromotion?.startDate}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Data sfârșit
                      </label>
                      <input
                        name="endDate"
                        type="date"
                        defaultValue={editingPromotion?.endDate}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Servicii aplicabile
                    </label>
                    <div className="space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-3">
                      {services.map((service) => (
                        <label key={service} className="flex items-center">
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            defaultChecked={editingPromotion?.applicableServices.includes(service)}
                            className="mr-2 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                          />
                          <span className="text-sm text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Valoare minimă comandă (opțional)
                      </label>
                      <input
                        name="minOrderValue"
                        type="number"
                        min="0"
                        defaultValue={editingPromotion?.minOrderValue}
                        placeholder="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Utilizări maxime (opțional)
                      </label>
                      <input
                        name="maxUsage"
                        type="number"
                        min="0"
                        defaultValue={editingPromotion?.maxUsage}
                        placeholder="Nelimitat"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCreateModalOpen(false);
                      setEditingPromotion(null);
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Anulează
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
                  >
                    {editingPromotion ? 'Salvează' : 'Creează'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
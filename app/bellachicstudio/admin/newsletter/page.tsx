'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import { useAuth } from '../../contexts/AuthContext';
import { Mail, Users, Send, Calendar, CheckCircle, XCircle, Download, Plus, Edit2, Trash2 } from 'lucide-react';

interface Subscriber {
  id: string;
  email: string;
  name?: string;
  subscribedAt: string;
  isActive: boolean;
  tags: string[];
}

interface Campaign {
  id: string;
  subject: string;
  content: string;
  sentAt?: string;
  scheduledFor?: string;
  status: 'draft' | 'scheduled' | 'sent';
  recipients: number;
  openRate?: number;
  clickRate?: number;
}

export default function NewsletterManagement() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'subscribers' | 'campaigns'>('subscribers');
  const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/bellachicstudio/admin/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    // Load subscribers from localStorage
    const savedSubscribers = localStorage.getItem('newsletterSubscribers');
    if (savedSubscribers) {
      setSubscribers(JSON.parse(savedSubscribers));
    } else {
      // Sample data
      const sampleSubscribers: Subscriber[] = [
        {
          id: '1',
          email: 'maria.popescu@email.com',
          name: 'Maria Popescu',
          subscribedAt: '2024-02-15T10:30:00',
          isActive: true,
          tags: ['client', 'vip']
        },
        {
          id: '2',
          email: 'ana.ionescu@email.com',
          name: 'Ana Ionescu',
          subscribedAt: '2024-03-01T15:45:00',
          isActive: true,
          tags: ['prospect']
        },
        {
          id: '3',
          email: 'elena.dumitrescu@email.com',
          subscribedAt: '2024-01-20T09:15:00',
          isActive: false,
          tags: ['client']
        }
      ];
      setSubscribers(sampleSubscribers);
      localStorage.setItem('newsletterSubscribers', JSON.stringify(sampleSubscribers));
    }

    // Load campaigns
    const savedCampaigns = localStorage.getItem('newsletterCampaigns');
    if (savedCampaigns) {
      setCampaigns(JSON.parse(savedCampaigns));
    } else {
      // Sample campaigns
      const sampleCampaigns: Campaign[] = [
        {
          id: '1',
          subject: 'Oferte speciale de primăvară',
          content: 'Descoperă noile tendințe de machiaj pentru acest sezon...',
          sentAt: '2024-03-15T10:00:00',
          status: 'sent',
          recipients: 245,
          openRate: 68.5,
          clickRate: 23.4
        },
        {
          id: '2',
          subject: 'Curs nou de automachiere - Înscrieri deschise',
          content: 'Învață tehnicile profesionale de machiaj...',
          scheduledFor: '2024-03-25T09:00:00',
          status: 'scheduled',
          recipients: 189
        }
      ];
      setCampaigns(sampleCampaigns);
      localStorage.setItem('newsletterCampaigns', JSON.stringify(sampleCampaigns));
    }
  }, []);

  const filteredSubscribers = subscribers.filter(subscriber =>
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (subscriber.name && subscriber.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleToggleSubscriber = (id: string) => {
    const updatedSubscribers = subscribers.map(sub =>
      sub.id === id ? { ...sub, isActive: !sub.isActive } : sub
    );
    setSubscribers(updatedSubscribers);
    localStorage.setItem('newsletterSubscribers', JSON.stringify(updatedSubscribers));
  };

  const handleDeleteSubscriber = (id: string) => {
    if (confirm('Sigur vrei să ștergi acest abonat?')) {
      const updatedSubscribers = subscribers.filter(sub => sub.id !== id);
      setSubscribers(updatedSubscribers);
      localStorage.setItem('newsletterSubscribers', JSON.stringify(updatedSubscribers));
    }
  };

  const handleSaveCampaign = (campaign: Campaign) => {
    let updatedCampaigns;
    if (editingCampaign) {
      updatedCampaigns = campaigns.map(c => c.id === campaign.id ? campaign : c);
    } else {
      updatedCampaigns = [...campaigns, { ...campaign, id: Date.now().toString() }];
    }
    setCampaigns(updatedCampaigns);
    localStorage.setItem('newsletterCampaigns', JSON.stringify(updatedCampaigns));
    setIsCreateCampaignOpen(false);
    setEditingCampaign(null);
  };

  const handleDeleteCampaign = (id: string) => {
    if (confirm('Sigur vrei să ștergi această campanie?')) {
      const updatedCampaigns = campaigns.filter(c => c.id !== id);
      setCampaigns(updatedCampaigns);
      localStorage.setItem('newsletterCampaigns', JSON.stringify(updatedCampaigns));
    }
  };

  const handleExportSubscribers = () => {
    const csv = [
      ['Email', 'Nume', 'Data abonării', 'Status', 'Tags'],
      ...subscribers.map(sub => [
        sub.email,
        sub.name || '',
        new Date(sub.subscribedAt).toLocaleDateString('ro-RO'),
        sub.isActive ? 'Activ' : 'Inactiv',
        sub.tags.join(', ')
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'abonati-newsletter.csv';
    a.click();
  };

  const activeSubscribers = subscribers.filter(s => s.isActive).length;
  const sentCampaigns = campaigns.filter(c => c.status === 'sent').length;

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
            <h1 className="text-3xl font-bold text-gray-900">Newsletter</h1>
            <p className="text-gray-600 mt-2">Gestionează abonații și campaniile de email</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total abonați</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{subscribers.length}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Abonați activi</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{activeSubscribers}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Campanii trimise</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{sentCampaigns}</p>
                </div>
                <div className="p-3 bg-pink-100 rounded-full">
                  <Send className="w-6 h-6 text-pink-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Rata medie deschidere</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">
                    {campaigns.filter(c => c.openRate).length > 0
                      ? `${(campaigns.filter(c => c.openRate).reduce((acc, c) => acc + (c.openRate || 0), 0) / campaigns.filter(c => c.openRate).length).toFixed(1)}%`
                      : '0%'
                    }
                  </p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('subscribers')}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'subscribers'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Abonați
                </button>
                <button
                  onClick={() => setActiveTab('campaigns')}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'campaigns'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Campanii
                </button>
              </nav>
            </div>

            {/* Subscribers Tab */}
            {activeTab === 'subscribers' && (
              <div>
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1 max-w-md">
                      <input
                        type="text"
                        placeholder="Caută abonați..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                    
                    <button
                      onClick={handleExportSubscribers}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Exportă CSV
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nume
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Data abonării
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tags
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
                      {filteredSubscribers.map((subscriber) => (
                        <tr key={subscriber.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {subscriber.email}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {subscriber.name || '-'}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(subscriber.subscribedAt).toLocaleDateString('ro-RO')}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1">
                              {subscriber.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              subscriber.isActive 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {subscriber.isActive ? 'Activ' : 'Inactiv'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right text-sm font-medium">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleToggleSubscriber(subscriber.id)}
                                className="text-gray-600 hover:text-gray-900"
                              >
                                {subscriber.isActive ? (
                                  <XCircle className="w-4 h-4" />
                                ) : (
                                  <CheckCircle className="w-4 h-4" />
                                )}
                              </button>
                              <button
                                onClick={() => handleDeleteSubscriber(subscriber.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Campaigns Tab */}
            {activeTab === 'campaigns' && (
              <div>
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        setEditingCampaign(null);
                        setIsCreateCampaignOpen(true);
                      }}
                      className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors flex items-center gap-2"
                    >
                      <Plus className="w-5 h-5" />
                      Campanie nouă
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-gray-200">
                  {campaigns.map((campaign) => (
                    <div key={campaign.id} className="p-6 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900">{campaign.subject}</h3>
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{campaign.content}</p>
                          
                          <div className="flex items-center gap-4 mt-3">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              campaign.status === 'sent' 
                                ? 'bg-green-100 text-green-800' 
                                : campaign.status === 'scheduled'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {campaign.status === 'sent' ? 'Trimis' : campaign.status === 'scheduled' ? 'Programat' : 'Ciornă'}
                            </span>
                            
                            <div className="flex items-center text-sm text-gray-500">
                              <Users className="w-4 h-4 mr-1" />
                              {campaign.recipients} destinatari
                            </div>
                            
                            {campaign.sentAt && (
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(campaign.sentAt).toLocaleDateString('ro-RO')}
                              </div>
                            )}
                            
                            {campaign.scheduledFor && (
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-1" />
                                Programat: {new Date(campaign.scheduledFor).toLocaleDateString('ro-RO')}
                              </div>
                            )}
                          </div>
                          
                          {campaign.openRate !== undefined && (
                            <div className="flex items-center gap-4 mt-2">
                              <div className="text-sm text-gray-600">
                                Rata deschidere: <span className="font-medium">{campaign.openRate}%</span>
                              </div>
                              <div className="text-sm text-gray-600">
                                Rata click: <span className="font-medium">{campaign.clickRate}%</span>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 ml-4">
                          {campaign.status === 'draft' && (
                            <button
                              onClick={() => {
                                setEditingCampaign(campaign);
                                setIsCreateCampaignOpen(true);
                              }}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteCampaign(campaign.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Create/Edit Campaign Modal */}
      {isCreateCampaignOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">
                {editingCampaign ? 'Editează campanie' : 'Campanie nouă'}
              </h2>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const campaign: Campaign = {
                  id: editingCampaign?.id || '',
                  subject: formData.get('subject') as string,
                  content: formData.get('content') as string,
                  status: formData.get('status') as 'draft' | 'scheduled',
                  recipients: activeSubscribers,
                  scheduledFor: formData.get('scheduledFor') as string || undefined
                };
                handleSaveCampaign(campaign);
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subiect
                    </label>
                    <input
                      name="subject"
                      type="text"
                      defaultValue={editingCampaign?.subject}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Conținut
                    </label>
                    <textarea
                      name="content"
                      rows={8}
                      defaultValue={editingCampaign?.content}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <select
                        name="status"
                        defaultValue={editingCampaign?.status || 'draft'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        <option value="draft">Ciornă</option>
                        <option value="scheduled">Programat</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Programare (opțional)
                      </label>
                      <input
                        name="scheduledFor"
                        type="datetime-local"
                        defaultValue={editingCampaign?.scheduledFor}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      Această campanie va fi trimisă către <span className="font-medium">{activeSubscribers} abonați activi</span>
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCreateCampaignOpen(false);
                      setEditingCampaign(null);
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Anulează
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
                  >
                    {editingCampaign ? 'Salvează' : 'Creează'}
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
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import { useAuth } from '../../contexts/AuthContext';
import { User, Mail, Phone, MapPin, Globe, Clock, Bell, Shield, Save } from 'lucide-react';

interface BusinessSettings {
  businessName: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  workingHours: {
    monday: { open: string; close: string; closed: boolean };
    tuesday: { open: string; close: string; closed: boolean };
    wednesday: { open: string; close: string; closed: boolean };
    thursday: { open: string; close: string; closed: boolean };
    friday: { open: string; close: string; closed: boolean };
    saturday: { open: string; close: string; closed: boolean };
    sunday: { open: string; close: string; closed: boolean };
  };
  notifications: {
    emailNotifications: boolean;
    smsNotifications: boolean;
    appointmentReminders: boolean;
    marketingEmails: boolean;
  };
  social: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}

export default function SettingsManagement() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'general' | 'hours' | 'notifications' | 'security'>('general');
  const [settings, setSettings] = useState<BusinessSettings>({
    businessName: 'BellaChic Studio',
    email: 'contact@bellachicstudio.ro',
    phone: '+40 721 123 456',
    address: 'Str. Florilor nr. 10, București',
    website: 'www.bellachicstudio.ro',
    workingHours: {
      monday: { open: '09:00', close: '18:00', closed: false },
      tuesday: { open: '09:00', close: '18:00', closed: false },
      wednesday: { open: '09:00', close: '18:00', closed: false },
      thursday: { open: '09:00', close: '18:00', closed: false },
      friday: { open: '09:00', close: '18:00', closed: false },
      saturday: { open: '10:00', close: '16:00', closed: false },
      sunday: { open: '', close: '', closed: true }
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      appointmentReminders: true,
      marketingEmails: true
    },
    social: {
      facebook: 'https://facebook.com/bellachicstudio',
      instagram: 'https://instagram.com/bellachicstudio',
      tiktok: 'https://tiktok.com/@bellachicstudio'
    }
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/bellachicstudio/admin/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('businessSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSaveSettings = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('businessSettings', JSON.stringify(settings));
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1000);
  };

  const handleWorkingHoursChange = (day: keyof BusinessSettings['workingHours'], field: 'open' | 'close' | 'closed', value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      workingHours: {
        ...prev.workingHours,
        [day]: {
          ...prev.workingHours[day],
          [field]: value
        }
      }
    }));
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
      
      <div className="flex-1">
        <AdminHeader />
        
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Setări</h1>
            <p className="text-gray-600 mt-2">Configurează setările afacerii tale</p>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('general')}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'general'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  General
                </button>
                <button
                  onClick={() => setActiveTab('hours')}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'hours'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Program de lucru
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'notifications'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Notificări
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'security'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Securitate
                </button>
              </nav>
            </div>

            <div className="p-6">
              {/* General Tab */}
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Informații generale</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="w-4 h-4 inline mr-1" />
                          Nume afacere
                        </label>
                        <input
                          type="text"
                          value={settings.businessName}
                          onChange={(e) => setSettings(prev => ({ ...prev, businessName: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="w-4 h-4 inline mr-1" />
                          Email
                        </label>
                        <input
                          type="email"
                          value={settings.email}
                          onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="w-4 h-4 inline mr-1" />
                          Telefon
                        </label>
                        <input
                          type="tel"
                          value={settings.phone}
                          onChange={(e) => setSettings(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Globe className="w-4 h-4 inline mr-1" />
                          Website
                        </label>
                        <input
                          type="url"
                          value={settings.website}
                          onChange={(e) => setSettings(prev => ({ ...prev, website: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          Adresă
                        </label>
                        <input
                          type="text"
                          value={settings.address}
                          onChange={(e) => setSettings(prev => ({ ...prev, address: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Social Media</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Facebook
                        </label>
                        <input
                          type="url"
                          value={settings.social.facebook}
                          onChange={(e) => setSettings(prev => ({ 
                            ...prev, 
                            social: { ...prev.social, facebook: e.target.value }
                          }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Instagram
                        </label>
                        <input
                          type="url"
                          value={settings.social.instagram}
                          onChange={(e) => setSettings(prev => ({ 
                            ...prev, 
                            social: { ...prev.social, instagram: e.target.value }
                          }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          TikTok
                        </label>
                        <input
                          type="url"
                          value={settings.social.tiktok}
                          onChange={(e) => setSettings(prev => ({ 
                            ...prev, 
                            social: { ...prev.social, tiktok: e.target.value }
                          }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Working Hours Tab */}
              {activeTab === 'hours' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    <Clock className="w-5 h-5 inline mr-2" />
                    Program de lucru
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(settings.workingHours).map(([day, hours]) => (
                      <div key={day} className="flex items-center gap-4">
                        <div className="w-32">
                          <span className="text-sm font-medium text-gray-700 capitalize">
                            {day === 'monday' ? 'Luni' :
                             day === 'tuesday' ? 'Marți' :
                             day === 'wednesday' ? 'Miercuri' :
                             day === 'thursday' ? 'Joi' :
                             day === 'friday' ? 'Vineri' :
                             day === 'saturday' ? 'Sâmbătă' :
                             'Duminică'}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-3 flex-1">
                          <input
                            type="checkbox"
                            checked={!hours.closed}
                            onChange={(e) => handleWorkingHoursChange(
                              day as keyof BusinessSettings['workingHours'],
                              'closed',
                              !e.target.checked
                            )}
                            className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                          />
                          
                          <input
                            type="time"
                            value={hours.open}
                            onChange={(e) => handleWorkingHoursChange(
                              day as keyof BusinessSettings['workingHours'],
                              'open',
                              e.target.value
                            )}
                            disabled={hours.closed}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                          />
                          
                          <span className="text-gray-500">-</span>
                          
                          <input
                            type="time"
                            value={hours.close}
                            onChange={(e) => handleWorkingHoursChange(
                              day as keyof BusinessSettings['workingHours'],
                              'close',
                              e.target.value
                            )}
                            disabled={hours.closed}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                          />
                          
                          {hours.closed && (
                            <span className="text-sm text-gray-500">Închis</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    <Bell className="w-5 h-5 inline mr-2" />
                    Setări notificări
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Notificări email</h4>
                        <p className="text-sm text-gray-500">Primește notificări prin email pentru programări noi</p>
                      </div>
                      <button
                        onClick={() => setSettings(prev => ({
                          ...prev,
                          notifications: {
                            ...prev.notifications,
                            emailNotifications: !prev.notifications.emailNotifications
                          }
                        }))}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.notifications.emailNotifications ? 'bg-pink-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.notifications.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Notificări SMS</h4>
                        <p className="text-sm text-gray-500">Primește notificări prin SMS pentru urgențe</p>
                      </div>
                      <button
                        onClick={() => setSettings(prev => ({
                          ...prev,
                          notifications: {
                            ...prev.notifications,
                            smsNotifications: !prev.notifications.smsNotifications
                          }
                        }))}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.notifications.smsNotifications ? 'bg-pink-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.notifications.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Remindere programări</h4>
                        <p className="text-sm text-gray-500">Trimite remindere automate clienților</p>
                      </div>
                      <button
                        onClick={() => setSettings(prev => ({
                          ...prev,
                          notifications: {
                            ...prev.notifications,
                            appointmentReminders: !prev.notifications.appointmentReminders
                          }
                        }))}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.notifications.appointmentReminders ? 'bg-pink-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.notifications.appointmentReminders ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Email-uri marketing</h4>
                        <p className="text-sm text-gray-500">Permite trimiterea de oferte și promoții</p>
                      </div>
                      <button
                        onClick={() => setSettings(prev => ({
                          ...prev,
                          notifications: {
                            ...prev.notifications,
                            marketingEmails: !prev.notifications.marketingEmails
                          }
                        }))}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings.notifications.marketingEmails ? 'bg-pink-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.notifications.marketingEmails ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    <Shield className="w-5 h-5 inline mr-2" />
                    Securitate
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Schimbă parola</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Parola curentă
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Parola nouă
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirmă parola nouă
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                        <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                          Schimbă parola
                        </button>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Autentificare în doi pași</h4>
                      <p className="text-sm text-gray-500 mb-4">
                        Adaugă un nivel suplimentar de securitate contului tău
                      </p>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Activează 2FA
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSaveSettings}
              disabled={isSaving}
              className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Se salvează...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Salvează modificările
                </>
              )}
            </button>
          </div>

          {/* Success Message */}
          {saveSuccess && (
            <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-up">
              <Save className="w-5 h-5" />
              Setările au fost salvate cu succes!
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
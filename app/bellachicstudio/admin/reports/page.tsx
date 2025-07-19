'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import { useAuth } from '../../contexts/AuthContext';
import { BarChart, TrendingUp, Users, Calendar, DollarSign, ShoppingBag, Download } from 'lucide-react';

interface ReportData {
  revenue: {
    current: number;
    previous: number;
    growth: number;
  };
  appointments: {
    current: number;
    previous: number;
    growth: number;
  };
  clients: {
    current: number;
    new: number;
    returning: number;
  };
  services: {
    name: string;
    count: number;
    revenue: number;
  }[];
  monthlyRevenue: {
    month: string;
    revenue: number;
  }[];
}

export default function ReportsManagement() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [reportPeriod, setReportPeriod] = useState<'week' | 'month' | 'year'>('month');
  const [reportData] = useState<ReportData>({
    revenue: { current: 15420, previous: 13200, growth: 16.8 },
    appointments: { current: 87, previous: 72, growth: 20.8 },
    clients: { current: 245, new: 42, returning: 203 },
    services: [
      { name: 'Machiaj de mireasă', count: 23, revenue: 5750 },
      { name: 'Machiaj de seară', count: 31, revenue: 4650 },
      { name: 'Curs automachiere', count: 12, revenue: 3600 },
      { name: 'Machiaj de zi', count: 21, revenue: 1420 }
    ],
    monthlyRevenue: [
      { month: 'Ian', revenue: 12500 },
      { month: 'Feb', revenue: 13200 },
      { month: 'Mar', revenue: 15420 },
      { month: 'Apr', revenue: 14800 },
      { month: 'Mai', revenue: 16200 },
      { month: 'Iun', revenue: 17500 }
    ]
  });

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/bellachicstudio/admin/login');
    }
  }, [user, isLoading, router]);

  const handleExportReport = () => {
    // Generate CSV report
    const csv = [
      ['BellaChic Studio - Raport ' + reportPeriod],
      [''],
      ['Metrici generale'],
      ['Metric', 'Valoare curentă', 'Valoare anterioară', 'Creștere (%)'],
      ['Venituri (RON)', reportData.revenue.current, reportData.revenue.previous, reportData.revenue.growth],
      ['Programări', reportData.appointments.current, reportData.appointments.previous, reportData.appointments.growth],
      [''],
      ['Servicii populare'],
      ['Serviciu', 'Număr', 'Venituri (RON)'],
      ...reportData.services.map(s => [s.name, s.count, s.revenue]),
      [''],
      ['Clienți'],
      ['Total', reportData.clients.current],
      ['Noi', reportData.clients.new],
      ['Recurenți', reportData.clients.returning]
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `raport-bellachic-${reportPeriod}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
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
            <h1 className="text-3xl font-bold text-gray-900">Rapoarte</h1>
            <p className="text-gray-600 mt-2">Analizează performanța afacerii tale</p>
          </div>

          {/* Period Selector */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Perioada raportului</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setReportPeriod('week')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      reportPeriod === 'week' 
                        ? 'bg-pink-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Săptămână
                  </button>
                  <button
                    onClick={() => setReportPeriod('month')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      reportPeriod === 'month' 
                        ? 'bg-pink-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Lună
                  </button>
                  <button
                    onClick={() => setReportPeriod('year')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      reportPeriod === 'year' 
                        ? 'bg-pink-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    An
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleExportReport}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Exportă raport
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <span className={`text-sm font-medium ${
                  reportData.revenue.growth >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {reportData.revenue.growth >= 0 ? '+' : ''}{reportData.revenue.growth}%
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-600">Venituri totale</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{reportData.revenue.current.toLocaleString('ro-RO')} RON</p>
              <p className="text-sm text-gray-500 mt-1">
                vs. {reportData.revenue.previous.toLocaleString('ro-RO')} RON perioada anterioară
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <span className={`text-sm font-medium ${
                  reportData.appointments.growth >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {reportData.appointments.growth >= 0 ? '+' : ''}{reportData.appointments.growth}%
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-600">Programări totale</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{reportData.appointments.current}</p>
              <p className="text-sm text-gray-500 mt-1">
                vs. {reportData.appointments.previous} perioada anterioară
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-pink-100 rounded-full">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <span className="text-sm font-medium text-green-600">
                  +{reportData.clients.new} noi
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-600">Clienți activi</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{reportData.clients.current}</p>
              <p className="text-sm text-gray-500 mt-1">
                {reportData.clients.returning} recurenți, {reportData.clients.new} noi
              </p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Evoluție venituri</h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {reportData.monthlyRevenue.map((month, index) => {
                  const maxRevenue = Math.max(...reportData.monthlyRevenue.map(m => m.revenue));
                  const height = (month.revenue / maxRevenue) * 100;
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-pink-100 rounded-t relative group cursor-pointer transition-all hover:bg-pink-200"
                           style={{ height: `${height}%` }}>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {month.revenue.toLocaleString('ro-RO')} RON
                        </div>
                      </div>
                      <span className="text-xs text-gray-600 mt-2">{month.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Popular Services */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Servicii populare</h3>
              <div className="space-y-4">
                {reportData.services.map((service, index) => {
                  const maxRevenue = Math.max(...reportData.services.map(s => s.revenue));
                  const width = (service.revenue / maxRevenue) * 100;
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{service.name}</span>
                        <span className="text-sm text-gray-500">{service.count} servicii</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-6 relative overflow-hidden">
                        <div 
                          className="absolute inset-y-0 left-0 bg-pink-500 rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${width}%` }}
                        >
                          <span className="text-xs text-white font-medium">
                            {service.revenue.toLocaleString('ro-RO')} RON
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Additional Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <BarChart className="w-8 h-8 text-pink-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Rata de conversie</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900">68%</p>
              <p className="text-sm text-gray-500 mt-2">
                Din vizitatorii site-ului devin clienți
              </p>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +5% față de luna trecută
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <ShoppingBag className="w-8 h-8 text-pink-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Valoare medie comandă</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900">177 RON</p>
              <p className="text-sm text-gray-500 mt-2">
                Per serviciu prestat
              </p>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12% față de luna trecută
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-pink-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Rata de retenție</h3>
              </div>
              <p className="text-3xl font-bold text-gray-900">83%</p>
              <p className="text-sm text-gray-500 mt-2">
                Clienți care revin
              </p>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +2% față de luna trecută
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
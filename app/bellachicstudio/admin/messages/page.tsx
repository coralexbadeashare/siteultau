'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import { useAuth } from '../../contexts/AuthContext';
import { Mail, MailOpen, Reply, Trash2, Calendar, User, Phone, Search } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  isRead: boolean;
  isReplied: boolean;
  category: 'general' | 'appointment' | 'feedback' | 'complaint';
}

export default function MessagesManagement() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'unread' | 'read' | 'replied'>('all');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/bellachicstudio/admin/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    // Load messages from localStorage
    const savedMessages = localStorage.getItem('messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Sample data
      const sampleMessages: Message[] = [
        {
          id: '1',
          name: 'Maria Popescu',
          email: 'maria.popescu@email.com',
          phone: '0721234567',
          subject: 'Programare pentru nuntă',
          message: 'Bună ziua, aș dori să fac o programare pentru probă de machiaj de mireasă. Nunta va fi pe 15 iunie 2024. Vă rog să-mi spuneți care sunt disponibilitățile.',
          date: '2024-03-18T10:30:00',
          isRead: false,
          isReplied: false,
          category: 'appointment'
        },
        {
          id: '2',
          name: 'Ana Ionescu',
          email: 'ana.ionescu@email.com',
          phone: '0732345678',
          subject: 'Feedback servicii',
          message: 'Vreau să vă mulțumesc pentru machiajul minunat de la evenimentul de săptămâna trecută. Toți invitații au fost impresionați!',
          date: '2024-03-17T15:45:00',
          isRead: true,
          isReplied: true,
          category: 'feedback'
        },
        {
          id: '3',
          name: 'Elena Dumitrescu',
          email: 'elena.d@email.com',
          phone: '0743456789',
          subject: 'Întrebare despre cursuri',
          message: 'Bună, sunt interesată de cursul de automachiere. Care este durata cursului și ce include în preț?',
          date: '2024-03-16T09:15:00',
          isRead: true,
          isReplied: false,
          category: 'general'
        }
      ];
      setMessages(sampleMessages);
      localStorage.setItem('messages', JSON.stringify(sampleMessages));
    }
  }, []);

  const categories = {
    all: 'Toate',
    general: 'General',
    appointment: 'Programări',
    feedback: 'Feedback',
    complaint: 'Reclamații'
  };

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === 'all' || message.category === filterCategory;
    
    let matchesStatus = true;
    if (filterStatus === 'unread') matchesStatus = !message.isRead;
    else if (filterStatus === 'read') matchesStatus = message.isRead && !message.isReplied;
    else if (filterStatus === 'replied') matchesStatus = message.isReplied;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleMarkAsRead = (id: string) => {
    const updatedMessages = messages.map(msg =>
      msg.id === id ? { ...msg, isRead: true } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  };

  const handleDeleteMessage = (id: string) => {
    if (confirm('Sigur vrei să ștergi acest mesaj?')) {
      const updatedMessages = messages.filter(msg => msg.id !== id);
      setMessages(updatedMessages);
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      setSelectedMessage(null);
    }
  };

  const handleReply = (message: Message) => {
    setSelectedMessage(message);
    setIsReplyModalOpen(true);
  };

  const handleSendReply = (replyText: string) => {
    if (selectedMessage) {
      const updatedMessages = messages.map(msg =>
        msg.id === selectedMessage.id ? { ...msg, isReplied: true, isRead: true } : msg
      );
      setMessages(updatedMessages);
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      
      // Here you would normally send the actual email
      console.log('Reply sent to:', selectedMessage.email, 'Message:', replyText);
      
      setIsReplyModalOpen(false);
      setSelectedMessage(null);
    }
  };

  const unreadCount = messages.filter(m => !m.isRead).length;

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
            <h1 className="text-3xl font-bold text-gray-900">Mesaje</h1>
            <p className="text-gray-600 mt-2">
              {unreadCount > 0 ? `Ai ${unreadCount} mesaje necitite` : 'Toate mesajele sunt citite'}
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Caută mesaje..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {Object.entries(categories).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
                
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as 'all' | 'unread' | 'read' | 'replied')}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="all">Toate</option>
                  <option value="unread">Necitite</option>
                  <option value="read">Citite</option>
                  <option value="replied">Cu răspuns</option>
                </select>
              </div>
            </div>
          </div>

          {/* Messages Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Messages List */}
            <div className="lg:col-span-1 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">Inbox</h2>
              </div>
              <div className="divide-y divide-gray-200 max-h-[calc(100vh-300px)] overflow-y-auto">
                {filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => {
                      setSelectedMessage(message);
                      handleMarkAsRead(message.id);
                    }}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedMessage?.id === message.id ? 'bg-pink-50' : ''
                    } ${!message.isRead ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        {!message.isRead ? (
                          <Mail className="w-4 h-4 text-blue-600 mr-2" />
                        ) : (
                          <MailOpen className="w-4 h-4 text-gray-400 mr-2" />
                        )}
                        <h3 className="text-sm font-medium text-gray-900">{message.name}</h3>
                      </div>
                      {message.isReplied && (
                        <Reply className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-900 mb-1">{message.subject}</p>
                    <p className="text-sm text-gray-500 line-clamp-2">{message.message}</p>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(message.date).toLocaleDateString('ro-RO')} - 
                      {new Date(message.date).toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Detail */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm">
              {selectedMessage ? (
                <div className="h-full flex flex-col">
                  <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-900">{selectedMessage.subject}</h2>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          selectedMessage.category === 'appointment' 
                            ? 'bg-blue-100 text-blue-800' 
                            : selectedMessage.category === 'feedback'
                            ? 'bg-green-100 text-green-800'
                            : selectedMessage.category === 'complaint'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {categories[selectedMessage.category]}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 flex items-center">
                            <User className="w-5 h-5 mr-2 text-gray-400" />
                            {selectedMessage.name}
                          </h3>
                          <p className="text-sm text-gray-500">{selectedMessage.email}</p>
                          <p className="text-sm text-gray-500 flex items-center mt-1">
                            <Phone className="w-4 h-4 mr-1" />
                            {selectedMessage.phone}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 flex items-center justify-end">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(selectedMessage.date).toLocaleDateString('ro-RO')}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(selectedMessage.date).toLocaleTimeString('ro-RO')}
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleReply(selectedMessage)}
                        className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors flex items-center gap-2"
                      >
                        <Reply className="w-4 h-4" />
                        Răspunde
                      </button>
                      <button
                        onClick={() => handleDeleteMessage(selectedMessage.id)}
                        className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Șterge
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <Mail className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Selectează un mesaj pentru a-l vizualiza</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Reply Modal */}
      {isReplyModalOpen && selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Răspunde la mesaj</h2>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600">Către: {selectedMessage.name} ({selectedMessage.email})</p>
                <p className="text-sm text-gray-600">Subiect: Re: {selectedMessage.subject}</p>
              </div>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleSendReply(formData.get('reply') as string);
              }}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajul tău
                  </label>
                  <textarea
                    name="reply"
                    rows={8}
                    required
                    placeholder="Scrie răspunsul aici..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsReplyModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Anulează
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
                  >
                    Trimite răspuns
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
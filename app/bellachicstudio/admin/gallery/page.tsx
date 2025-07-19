'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import { useAuth } from '../../contexts/AuthContext';
import { Plus, Edit2, Trash2, Grid, List } from 'lucide-react';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  createdAt: string;
  featured: boolean;
}

export default function GalleryManagement() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/bellachicstudio/admin/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    // Load gallery items from localStorage
    const savedItems = localStorage.getItem('galleryItems');
    if (savedItems) {
      setGalleryItems(JSON.parse(savedItems));
    } else {
      // Sample data
      const sampleItems: GalleryItem[] = [
        {
          id: '1',
          title: 'Machiaj de mireasă elegant',
          category: 'Nuntă',
          image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1',
          description: 'Machiaj delicat pentru ziua nunții',
          tags: ['nuntă', 'elegant', 'natural'],
          createdAt: '2024-03-15',
          featured: true
        },
        {
          id: '2',
          title: 'Machiaj editorial artistic',
          category: 'Editorial',
          image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb',
          description: 'Machiaj creativ pentru ședință foto',
          tags: ['editorial', 'artistic', 'bold'],
          createdAt: '2024-03-14',
          featured: false
        },
        {
          id: '3',
          title: 'Machiaj de seară glamour',
          category: 'Evenimente',
          image: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1',
          description: 'Look sofisticat pentru evenimente speciale',
          tags: ['seară', 'glamour', 'elegant'],
          createdAt: '2024-03-13',
          featured: true
        }
      ];
      setGalleryItems(sampleItems);
      localStorage.setItem('galleryItems', JSON.stringify(sampleItems));
    }
  }, []);

  const categories = ['all', 'Nuntă', 'Evenimente', 'Editorial', 'Zi', 'Seară'];

  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDeleteItem = (id: string) => {
    if (confirm('Sigur vrei să ștergi această imagine?')) {
      const updatedItems = galleryItems.filter(item => item.id !== id);
      setGalleryItems(updatedItems);
      localStorage.setItem('galleryItems', JSON.stringify(updatedItems));
    }
  };

  const handleSaveItem = (item: GalleryItem) => {
    let updatedItems;
    if (editingItem) {
      updatedItems = galleryItems.map(i => i.id === item.id ? item : i);
    } else {
      updatedItems = [...galleryItems, { ...item, id: Date.now().toString() }];
    }
    setGalleryItems(updatedItems);
    localStorage.setItem('galleryItems', JSON.stringify(updatedItems));
    setIsUploadModalOpen(false);
    setEditingItem(null);
  };

  const toggleFeatured = (id: string) => {
    const updatedItems = galleryItems.map(item =>
      item.id === id ? { ...item, featured: !item.featured } : item
    );
    setGalleryItems(updatedItems);
    localStorage.setItem('galleryItems', JSON.stringify(updatedItems));
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
            <h1 className="text-3xl font-bold text-gray-900">Galerie</h1>
            <p className="text-gray-600 mt-2">Gestionează imaginile din galerie</p>
          </div>

          {/* Actions Bar */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Caută în galerie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center gap-4">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'Toate categoriile' : cat}
                    </option>
                  ))}
                </select>
                
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
                
                <button
                  onClick={() => {
                    setEditingItem(null);
                    setIsUploadModalOpen(true);
                  }}
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Adaugă imagine
                </button>
              </div>
            </div>
          </div>

          {/* Gallery View */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
                  <div className="relative aspect-square">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingItem(item);
                            setIsUploadModalOpen(true);
                          }}
                          className="p-2 bg-white rounded-full text-gray-700 hover:bg-gray-100"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          className="p-2 bg-white rounded-full text-red-600 hover:bg-gray-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    {item.featured && (
                      <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Imagine
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Titlu
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categorie
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
                  {filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="relative w-16 h-16">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="rounded-lg object-cover"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleFeatured(item.id)}
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            item.featured 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {item.featured ? 'Featured' : 'Normal'}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setEditingItem(item);
                              setIsUploadModalOpen(true);
                            }}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteItem(item.id)}
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
          )}
        </main>
      </div>

      {/* Upload/Edit Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">
                {editingItem ? 'Editează imagine' : 'Adaugă imagine'}
              </h2>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const item: GalleryItem = {
                  id: editingItem?.id || '',
                  title: formData.get('title') as string,
                  category: formData.get('category') as string,
                  image: formData.get('image') as string,
                  description: formData.get('description') as string,
                  tags: (formData.get('tags') as string).split(',').map(tag => tag.trim()),
                  createdAt: editingItem?.createdAt || new Date().toISOString(),
                  featured: editingItem?.featured || false
                };
                handleSaveItem(item);
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Titlu
                    </label>
                    <input
                      name="title"
                      type="text"
                      defaultValue={editingItem?.title}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Categorie
                    </label>
                    <select
                      name="category"
                      defaultValue={editingItem?.category}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="Nuntă">Nuntă</option>
                      <option value="Evenimente">Evenimente</option>
                      <option value="Editorial">Editorial</option>
                      <option value="Zi">Zi</option>
                      <option value="Seară">Seară</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      URL imagine
                    </label>
                    <input
                      name="image"
                      type="url"
                      defaultValue={editingItem?.image}
                      required
                      placeholder="https://..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descriere
                    </label>
                    <textarea
                      name="description"
                      rows={3}
                      defaultValue={editingItem?.description}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tags (separate prin virgulă)
                    </label>
                    <input
                      name="tags"
                      type="text"
                      defaultValue={editingItem?.tags.join(', ')}
                      required
                      placeholder="nuntă, elegant, natural"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsUploadModalOpen(false);
                      setEditingItem(null);
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Anulează
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
                  >
                    {editingItem ? 'Salvează' : 'Adaugă'}
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
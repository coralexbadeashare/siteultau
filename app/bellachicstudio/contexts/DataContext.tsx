"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Types
export interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  service: string;
  date: Date;
  time: string;
  duration: number;
  price: number;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  notes?: string;
  createdAt: Date;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateJoined: Date;
  lastVisit: Date;
  totalVisits: number;
  totalSpent: number;
  favoriteServices: string[];
  rating: number;
  notes: string;
  status: "active" | "inactive";
}

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: number;
  price: number;
  image: string;
  popular: boolean;
  active: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: Date;
  readTime: number;
  image: string;
  featured: boolean;
  published: boolean;
  views: number;
  tags: string[];
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  tags: string[];
  uploadedAt: Date;
  likes: number;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  validFrom: Date;
  validUntil: Date;
  code: string;
  usageLimit: number;
  usageCount: number;
  active: boolean;
}

interface DataContextType {
  // Appointments
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, "id" | "createdAt">) => void;
  updateAppointment: (id: string, data: Partial<Appointment>) => void;
  deleteAppointment: (id: string) => void;
  
  // Clients
  clients: Client[];
  addClient: (client: Omit<Client, "id">) => void;
  updateClient: (id: string, data: Partial<Client>) => void;
  deleteClient: (id: string) => void;
  
  // Services
  services: Service[];
  addService: (service: Omit<Service, "id">) => void;
  updateService: (id: string, data: Partial<Service>) => void;
  deleteService: (id: string) => void;
  
  // Blog Posts
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, "id" | "views">) => void;
  updateBlogPost: (id: string, data: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  incrementBlogViews: (id: string) => void;
  
  // Gallery
  galleryImages: GalleryImage[];
  addGalleryImage: (image: Omit<GalleryImage, "id" | "uploadedAt" | "likes">) => void;
  deleteGalleryImage: (id: string) => void;
  likeGalleryImage: (id: string) => void;
  
  // Promotions
  promotions: Promotion[];
  addPromotion: (promotion: Omit<Promotion, "id" | "usageCount">) => void;
  updatePromotion: (id: string, data: Partial<Promotion>) => void;
  deletePromotion: (id: string) => void;
  usePromotion: (code: string) => boolean;
  
  // Statistics
  getStatistics: () => {
    totalRevenue: number;
    totalClients: number;
    activeClients: number;
    totalAppointments: number;
    completedAppointments: number;
    averageRating: number;
    popularServices: { name: string; count: number }[];
    revenueByMonth: { month: string; revenue: number }[];
    appointmentsByStatus: { status: string; count: number }[];
  };
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Initial data
const initialServices: Service[] = [
  {
    id: "1",
    name: "Tuns și Coafat Dame",
    category: "Coafor",
    description: "Tuns modern, coafat profesional și styling personalizat",
    duration: 60,
    price: 120,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400",
    popular: true,
    active: true,
  },
  {
    id: "2",
    name: "Vopsit și Tratament",
    category: "Coafor",
    description: "Vopsit profesional cu produse premium și tratament de hidratare",
    duration: 180,
    price: 350,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
    popular: true,
    active: true,
  },
  {
    id: "3",
    name: "Manichiură Semipermanentă",
    category: "Manichiură",
    description: "Manichiură cu ojă semipermanentă și design personalizat",
    duration: 90,
    price: 120,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    popular: true,
    active: true,
  },
  {
    id: "4",
    name: "Tratament Facial Anti-Age",
    category: "Tratamente Faciale",
    description: "Tratament complet anti-îmbătrânire cu produse premium",
    duration: 75,
    price: 250,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
    popular: false,
    active: true,
  },
  {
    id: "5",
    name: "Makeup Profesional",
    category: "Makeup",
    description: "Machiaj profesional pentru evenimente speciale",
    duration: 60,
    price: 200,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
    popular: true,
    active: true,
  },
];

const initialPromotions: Promotion[] = [
  {
    id: "1",
    title: "Reducere Primăvară 2025",
    description: "20% reducere la toate serviciile de coafor",
    discount: 20,
    validFrom: new Date("2025-03-01"),
    validUntil: new Date("2025-05-31"),
    code: "SPRING20",
    usageLimit: 100,
    usageCount: 23,
    active: true,
  },
  {
    id: "2",
    title: "Pachet Manichiură + Pedichiură",
    description: "15% reducere pentru pachetul complet",
    discount: 15,
    validFrom: new Date("2025-01-01"),
    validUntil: new Date("2025-12-31"),
    code: "MANIPEDI15",
    usageLimit: 50,
    usageCount: 12,
    active: true,
  },
];

export function DataProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage or use defaults
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [services, setServices] = useState<Service[]>(initialServices);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [promotions, setPromotions] = useState<Promotion[]>(initialPromotions);

  // Load data from localStorage on mount
  useEffect(() => {
    const loadData = () => {
      try {
        const savedAppointments = localStorage.getItem("bellachic_appointments");
        const savedClients = localStorage.getItem("bellachic_clients");
        const savedServices = localStorage.getItem("bellachic_services");
        const savedBlogPosts = localStorage.getItem("bellachic_blogposts");
        const savedGallery = localStorage.getItem("bellachic_gallery");
        const savedPromotions = localStorage.getItem("bellachic_promotions");

        if (savedAppointments) {
          setAppointments(JSON.parse(savedAppointments, (key, value) => {
            if (key === "date" || key === "createdAt" || key === "lastVisit" || key === "dateJoined") {
              return new Date(value);
            }
            return value;
          }));
        }
        if (savedClients) setClients(JSON.parse(savedClients, (key, value) => {
          if (key === "dateJoined" || key === "lastVisit") {
            return new Date(value);
          }
          return value;
        }));
        if (savedServices) setServices(JSON.parse(savedServices));
        if (savedBlogPosts) setBlogPosts(JSON.parse(savedBlogPosts, (key, value) => {
          if (key === "date") {
            return new Date(value);
          }
          return value;
        }));
        if (savedGallery) setGalleryImages(JSON.parse(savedGallery, (key, value) => {
          if (key === "uploadedAt") {
            return new Date(value);
          }
          return value;
        }));
        if (savedPromotions) setPromotions(JSON.parse(savedPromotions, (key, value) => {
          if (key === "validFrom" || key === "validUntil") {
            return new Date(value);
          }
          return value;
        }));
      } catch (error) {
        console.error("Error loading data from localStorage:", error);
      }
    };

    loadData();
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bellachic_appointments", JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem("bellachic_clients", JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    localStorage.setItem("bellachic_services", JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem("bellachic_blogposts", JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem("bellachic_gallery", JSON.stringify(galleryImages));
  }, [galleryImages]);

  useEffect(() => {
    localStorage.setItem("bellachic_promotions", JSON.stringify(promotions));
  }, [promotions]);

  // Appointment functions
  const addAppointment = (appointment: Omit<Appointment, "id" | "createdAt">) => {
    const newAppointment: Appointment = {
      ...appointment,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setAppointments(prev => [...prev, newAppointment]);

    // Update client's last visit and total visits if client exists
    const client = clients.find(c => c.email === appointment.clientEmail);
    if (client && appointment.status === "completed") {
      updateClient(client.id, {
        lastVisit: appointment.date,
        totalVisits: client.totalVisits + 1,
        totalSpent: client.totalSpent + appointment.price,
      });
    }
  };

  const updateAppointment = (id: string, data: Partial<Appointment>) => {
    setAppointments(prev => prev.map(app => 
      app.id === id ? { ...app, ...data } : app
    ));

    // If status changed to completed, update client data
    const appointment = appointments.find(a => a.id === id);
    if (appointment && data.status === "completed") {
      const client = clients.find(c => c.email === appointment.clientEmail);
      if (client) {
        updateClient(client.id, {
          lastVisit: appointment.date,
          totalVisits: client.totalVisits + 1,
          totalSpent: client.totalSpent + appointment.price,
        });
      }
    }
  };

  const deleteAppointment = (id: string) => {
    setAppointments(prev => prev.filter(app => app.id !== id));
  };

  // Client functions
  const addClient = (client: Omit<Client, "id">) => {
    const newClient: Client = {
      ...client,
      id: Date.now().toString(),
    };
    setClients(prev => [...prev, newClient]);
  };

  const updateClient = (id: string, data: Partial<Client>) => {
    setClients(prev => prev.map(client => 
      client.id === id ? { ...client, ...data } : client
    ));
  };

  const deleteClient = (id: string) => {
    setClients(prev => prev.filter(client => client.id !== id));
  };

  // Service functions
  const addService = (service: Omit<Service, "id">) => {
    const newService: Service = {
      ...service,
      id: Date.now().toString(),
    };
    setServices(prev => [...prev, newService]);
  };

  const updateService = (id: string, data: Partial<Service>) => {
    setServices(prev => prev.map(service => 
      service.id === id ? { ...service, ...data } : service
    ));
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };

  // Blog functions
  const addBlogPost = (post: Omit<BlogPost, "id" | "views">) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      views: 0,
    };
    setBlogPosts(prev => [...prev, newPost]);
  };

  const updateBlogPost = (id: string, data: Partial<BlogPost>) => {
    setBlogPosts(prev => prev.map(post => 
      post.id === id ? { ...post, ...data } : post
    ));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));
  };

  const incrementBlogViews = (id: string) => {
    setBlogPosts(prev => prev.map(post => 
      post.id === id ? { ...post, views: post.views + 1 } : post
    ));
  };

  // Gallery functions
  const addGalleryImage = (image: Omit<GalleryImage, "id" | "uploadedAt" | "likes">) => {
    const newImage: GalleryImage = {
      ...image,
      id: Date.now().toString(),
      uploadedAt: new Date(),
      likes: 0,
    };
    setGalleryImages(prev => [...prev, newImage]);
  };

  const deleteGalleryImage = (id: string) => {
    setGalleryImages(prev => prev.filter(img => img.id !== id));
  };

  const likeGalleryImage = (id: string) => {
    setGalleryImages(prev => prev.map(img => 
      img.id === id ? { ...img, likes: img.likes + 1 } : img
    ));
  };

  // Promotion functions
  const addPromotion = (promotion: Omit<Promotion, "id" | "usageCount">) => {
    const newPromotion: Promotion = {
      ...promotion,
      id: Date.now().toString(),
      usageCount: 0,
    };
    setPromotions(prev => [...prev, newPromotion]);
  };

  const updatePromotion = (id: string, data: Partial<Promotion>) => {
    setPromotions(prev => prev.map(promo => 
      promo.id === id ? { ...promo, ...data } : promo
    ));
  };

  const deletePromotion = (id: string) => {
    setPromotions(prev => prev.filter(promo => promo.id !== id));
  };

  const usePromotion = (code: string): boolean => {
    const promo = promotions.find(p => p.code === code && p.active);
    if (promo && promo.usageCount < promo.usageLimit) {
      updatePromotion(promo.id, { usageCount: promo.usageCount + 1 });
      return true;
    }
    return false;
  };

  // Statistics function
  const getStatistics = () => {
    const completedAppointments = appointments.filter(a => a.status === "completed");
    const totalRevenue = completedAppointments.reduce((sum, app) => sum + app.price, 0);
    const activeClients = clients.filter(c => c.status === "active").length;
    
    // Calculate average rating
    const totalRating = clients.reduce((sum, client) => sum + client.rating, 0);
    const averageRating = clients.length > 0 ? totalRating / clients.length : 0;

    // Popular services
    const serviceCount: { [key: string]: number } = {};
    appointments.forEach(app => {
      serviceCount[app.service] = (serviceCount[app.service] || 0) + 1;
    });
    const popularServices = Object.entries(serviceCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Revenue by month
    const revenueByMonth: { [key: string]: number } = {};
    completedAppointments.forEach(app => {
      const monthKey = app.date.toLocaleDateString('ro-RO', { year: 'numeric', month: 'short' });
      revenueByMonth[monthKey] = (revenueByMonth[monthKey] || 0) + app.price;
    });
    const revenueData = Object.entries(revenueByMonth)
      .map(([month, revenue]) => ({ month, revenue }))
      .slice(-6); // Last 6 months

    // Appointments by status
    const statusCount: { [key: string]: number } = {};
    appointments.forEach(app => {
      statusCount[app.status] = (statusCount[app.status] || 0) + 1;
    });
    const appointmentsByStatus = Object.entries(statusCount)
      .map(([status, count]) => ({ status, count }));

    return {
      totalRevenue,
      totalClients: clients.length,
      activeClients,
      totalAppointments: appointments.length,
      completedAppointments: completedAppointments.length,
      averageRating,
      popularServices,
      revenueByMonth: revenueData,
      appointmentsByStatus,
    };
  };

  const value: DataContextType = {
    appointments,
    addAppointment,
    updateAppointment,
    deleteAppointment,
    clients,
    addClient,
    updateClient,
    deleteClient,
    services,
    addService,
    updateService,
    deleteService,
    blogPosts,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    incrementBlogViews,
    galleryImages,
    addGalleryImage,
    deleteGalleryImage,
    likeGalleryImage,
    promotions,
    addPromotion,
    updatePromotion,
    deletePromotion,
    usePromotion,
    getStatistics,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
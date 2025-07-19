"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  FileText, 
  Image, 
  Tag, 
  Settings,
  MessageSquare,
  BarChart,
  Mail,
  LogOut,
  Scissors
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/bellachicstudio/admin" },
  { icon: Calendar, label: "Programări", href: "/bellachicstudio/admin/appointments" },
  { icon: Users, label: "Clienți", href: "/bellachicstudio/admin/clients" },
  { icon: Scissors, label: "Servicii", href: "/bellachicstudio/admin/services" },
  { icon: FileText, label: "Blog", href: "/bellachicstudio/admin/blog" },
  { icon: Image, label: "Galerie", href: "/bellachicstudio/admin/gallery" },
  { icon: Tag, label: "Promoții", href: "/bellachicstudio/admin/promotions" },
  { icon: MessageSquare, label: "Mesaje", href: "/bellachicstudio/admin/messages" },
  { icon: Mail, label: "Newsletter", href: "/bellachicstudio/admin/newsletter" },
  { icon: BarChart, label: "Rapoarte", href: "/bellachicstudio/admin/reports" },
  { icon: Settings, label: "Setări", href: "/bellachicstudio/admin/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white w-72 flex flex-col shadow-2xl">
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">BC</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"></div>
          </div>
          <div>
            <div className="font-bold text-xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Bella Chic</div>
            <div className="text-xs text-gray-400">Panel Administrare</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-1.5">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-600/20"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-white hover:translate-x-1"
                  }`}
                >
                  <item.icon className={`h-5 w-5 transition-transform ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`} />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-6 bg-white/30 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700/50">
        <button
          onClick={logout}
          className="group flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-red-600/10 hover:text-red-400 transition-all duration-200 w-full"
        >
          <LogOut className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:-translate-x-0.5" />
          <span className="font-medium">Deconectare</span>
        </button>
      </div>
    </div>
  );
}
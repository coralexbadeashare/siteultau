import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function ServiceCard({ icon, title, description, link, image }: ServiceCardProps) {
  return (
    <Link href={link} className="group block h-full">
      <div className="relative h-full bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Floating icon */}
          <div className="absolute top-6 left-6">
            <div className="relative">
              <div className="absolute inset-0 bg-white blur-xl opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="relative w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
            </div>
          </div>
          
          {/* Hover badge */}
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Popular
            </div>
          </div>
        </div>
        
        <div className="relative p-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3 group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-pink-600 font-semibold group-hover:text-purple-600 transition-colors">
              <span>Descoperă mai mult</span>
              <div className="ml-2 relative">
                <ArrowRight className="h-5 w-5 absolute group-hover:translate-x-6 group-hover:opacity-0 transition-all duration-300" />
                <ArrowRight className="h-5 w-5 -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </div>
            
            {/* Price hint */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-gray-500">de la</span>
              <span className="text-lg font-bold text-gray-900 ml-1">50 RON</span>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </Link>
  );
}
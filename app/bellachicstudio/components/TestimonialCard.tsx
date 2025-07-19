import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  service: string;
}

export default function TestimonialCard({ name, rating, text, service }: TestimonialCardProps) {
  return (
    <div className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      {/* Quote decoration */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
        <Quote className="h-6 w-6 text-white" />
      </div>
      
      <div className="relative">
        {/* Rating */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 transition-all duration-300 ${
                  i < rating 
                    ? "text-yellow-400 fill-yellow-400 group-hover:scale-110" 
                    : "text-gray-300"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            Verificat
          </span>
        </div>
        
        {/* Testimonial text */}
        <p className="text-gray-700 mb-6 text-lg leading-relaxed relative">
          <span className="absolute -top-2 -left-2 text-4xl text-pink-200/50 font-serif">&ldquo;</span>
          {text}
          <span className="absolute -bottom-6 -right-2 text-4xl text-pink-200/50 font-serif">&rdquo;</span>
        </p>
        
        {/* Author info */}
        <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
          {/* Avatar */}
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
          </div>
          
          <div className="flex-1">
            <p className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
              {name}
            </p>
            <p className="text-sm text-gray-600">
              {service}
            </p>
          </div>
          
          {/* Service badge */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="h-6 w-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
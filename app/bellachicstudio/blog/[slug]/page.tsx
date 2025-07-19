"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft, Facebook, Twitter, Instagram, Heart, Share2, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: number;
  likes: number;
}

const relatedPosts = [
  {
    id: "1",
    slug: "tendinte-machiaj-2024",
    title: "Tendințe de machiaj pentru 2024",
    excerpt: "Descoperă cele mai hot tendințe în machiaj pentru acest an",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",
    date: "2024-03-15",
  },
  {
    id: "2",
    slug: "ingrijire-ten-primavara",
    title: "Rutina de îngrijire pentru primăvară",
    excerpt: "Cum să-ți adaptezi rutina de skincare pentru sezonul cald",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
    date: "2024-03-10",
  },
  {
    id: "3",
    slug: "coafuri-nunta-2024",
    title: "Coafuri de mireasă trendy în 2024",
    excerpt: "Inspirație pentru cea mai importantă zi din viața ta",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1",
    date: "2024-03-05",
  },
];

export default function BlogArticlePage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // In a real app, fetch post by slug from API
    // For now, using mock data
    const mockPost: BlogPost = {
      id: "1",
      slug: params.slug as string,
      title: "Tendințe de machiaj pentru primăvara 2024",
      content: `
        <h2>Culorile sezonului</h2>
        <p>Primăvara aceasta aduce o explozie de culori în lumea machiajului. De la nuanțe pastelate delicate până la tonuri îndrăznețe de coral și portocaliu, paleta acestui sezon este diversă și plină de viață.</p>
        
        <h3>1. Machiajul "No-Makeup"</h3>
        <p>Tendința către naturalețe continuă să domine. Pielea luminoasă și hidratată este baza perfectă pentru un look fresh și tineresc. Folosește un fond de ten ușor sau un BB cream pentru a uniformiza tenul, păstrând în același timp aspectul natural.</p>
        
        <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937" alt="Natural makeup look" />
        
        <h3>2. Buze Glossy</h3>
        <p>Rujurile mate fac loc finisajelor lucioase și hidratante. Glossurile cu nuanțe de nude, roz sau coral sunt perfecte pentru un aspect fresh și primăvăratic.</p>
        
        <h3>3. Ochi Colorați</h3>
        <p>Nu te teme să experimentezi cu culori îndrăznețe pe pleoape. Verde mentă, albastru cerulean sau mov lavandă - toate sunt permise în această primăvară!</p>
        
        <blockquote>
          "Machiajul este o formă de artă care ne permite să ne exprimăm creativitatea și să ne simțim încrezătoare în propria piele." - Maria Ionescu, Makeup Artist
        </blockquote>
        
        <h3>4. Sprâncene Naturale</h3>
        <p>Sprâncenele groase și naturale rămân în trend. Folosește un gel transparent sau colorat pentru a le fixa și a le da un aspect îngrijit, fără a le supraîncărca.</p>
        
        <h2>Produse Recomandate</h2>
        <ul>
          <li>Primer hidratant cu SPF</li>
          <li>Fond de ten ușor cu acoperire medie</li>
          <li>Concealer iluminator</li>
          <li>Fard de obraz în nuanțe de piersică</li>
          <li>Paletă de farduri cu tonuri calde</li>
          <li>Mascara pentru volum și alungire</li>
          <li>Gloss hidratant</li>
        </ul>
        
        <h2>Sfaturi de la Profesioniști</h2>
        <p>Pentru un machiaj de lungă durată, nu uita să folosești un primer potrivit tipului tău de ten. Fixează machiajul cu un spray de fixare pentru a te asigura că arăți impecabil pe tot parcursul zilei.</p>
        
        <p>Experimentează și găsește-ți propriul stil! Tendințele sunt doar un punct de plecare - cel mai important este să te simți confortabil și încrezător în propria piele.</p>
      `,
      excerpt: "Descoperă cele mai noi tendințe de machiaj pentru acest sezon plin de culoare și prospețime",
      author: "Maria Ionescu",
      date: "2024-03-15",
      category: "Tendințe",
      tags: ["machiaj", "primăvară", "tendințe", "2024"],
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",
      readTime: 5,
      likes: 234,
    };

    setPost(mockPost);
    setLikes(mockPost.likes);

    // Check if user already liked this post
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    setLiked(likedPosts.includes(mockPost.id));
  }, [params.slug]);

  if (!post) {
    return notFound();
  }

  const handleLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    
    if (!liked) {
      likedPosts.push(post.id);
      setLikes(likes + 1);
      setLiked(true);
    } else {
      const index = likedPosts.indexOf(post.id);
      if (index > -1) {
        likedPosts.splice(index, 1);
      }
      setLikes(likes - 1);
      setLiked(false);
    }
    
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
          <Link
            href="/bellachicstudio/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Înapoi la Blog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-pink-600 text-white text-sm rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString("ro-RO")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min citire</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-5 h-5 text-gray-500" />
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      liked
                        ? "bg-pink-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
                    <span>{likes}</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Distribuie</span>
                  </button>
                </div>
              </motion.article>

              {/* Author Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4">Despre Autor</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    MI
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{post.author}</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Makeup Artist Senior cu peste 10 ani experiență în industria frumuseții. 
                      Specializată în machiaj de mireasă și evenimente speciale.
                    </p>
                    <div className="flex gap-3 mt-3">
                      <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Share Widget */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-6 mb-6"
              >
                <h3 className="text-xl font-semibold mb-4">Distribuie articolul</h3>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-sky-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4">Articole similare</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/bellachicstudio/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {new Date(relatedPost.date).toLocaleDateString("ro-RO")}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              Nu rata niciun articol
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Abonează-te la newsletter-ul nostru și primește cele mai noi tendințe 
              și sfaturi de beauty direct în inbox
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Email-ul tău"
                className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-pink-600 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Abonează-te
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
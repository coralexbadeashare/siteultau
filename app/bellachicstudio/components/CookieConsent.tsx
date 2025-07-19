"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Settings } from "lucide-react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = Cookies.get("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      applyPreferences(savedPreferences);
    }
  }, []);

  const applyPreferences = (prefs: CookiePreferences) => {
    if (prefs.analytics) {
      // Enable Google Analytics
      if (typeof window !== "undefined" && 'gtag' in window) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    }
    
    if (prefs.marketing) {
      // Enable Facebook Pixel
      if (typeof window !== "undefined" && 'fbq' in window) {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("consent", "grant");
      }
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    Cookies.set("cookie-consent", JSON.stringify(allAccepted), { expires: 365 });
    applyPreferences(allAccepted);
    setShowBanner(false);
  };

  const acceptSelected = () => {
    Cookies.set("cookie-consent", JSON.stringify(preferences), { expires: 365 });
    applyPreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    const rejected = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(rejected);
    Cookies.set("cookie-consent", JSON.stringify(rejected), { expires: 365 });
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto p-6">
            <div className="flex items-start space-x-4">
              <Cookie className="h-8 w-8 text-pink-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Folosim cookie-uri pentru a îmbunătăți experiența ta
                </h3>
                <p className="text-gray-600 mb-4">
                  Folosim cookie-uri pentru a personaliza conținutul și anunțurile, pentru a oferi funcții de social media 
                  și pentru a analiza traficul nostru. De asemenea, împărtășim informații despre utilizarea site-ului nostru 
                  cu partenerii noștri de social media, publicitate și analiză.
                </p>
                
                {!showSettings ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={acceptAll}
                      className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                    >
                      Accept toate
                    </button>
                    <button
                      onClick={rejectAll}
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      Doar necesare
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Personalizează
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">Cookie-uri necesare</div>
                          <div className="text-sm text-gray-600">
                            Esențiale pentru funcționarea site-ului
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.necessary}
                          disabled
                          className="h-5 w-5 text-pink-600 rounded"
                        />
                      </label>
                      
                      <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                        <div>
                          <div className="font-medium text-gray-900">Cookie-uri analitice</div>
                          <div className="text-sm text-gray-600">
                            Ne ajută să înțelegem cum utilizezi site-ul
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                          className="h-5 w-5 text-pink-600 rounded"
                        />
                      </label>
                      
                      <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                        <div>
                          <div className="font-medium text-gray-900">Cookie-uri de marketing</div>
                          <div className="text-sm text-gray-600">
                            Pentru a-ți afișa reclame relevante
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                          className="h-5 w-5 text-pink-600 rounded"
                        />
                      </label>
                    </div>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={acceptSelected}
                        className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                      >
                        Salvează preferințele
                      </button>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="px-6 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        Înapoi
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => setShowBanner(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
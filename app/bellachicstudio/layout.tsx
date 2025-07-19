import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import StructuredData from "./components/StructuredData";
import Script from "next/script";
import { DataProvider } from "./contexts/DataContext";
import { AuthProvider } from "./contexts/AuthContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Bella Chic Studio - Salon de Înfrumusețare Militari",
  description: "Salon de înfrumusețare în zona Lujerului. Oferim servicii de coafor, manichiură, pedichiură, tratamente faciale, makeup profesional și multe altele.",
  keywords: "salon frumusete, coafor, manichiura, pedichiura, militari, lujerului, bucuresti, bella chic studio, salon infrumusetare bucuresti",
  authors: [{ name: "Bella Chic Studio" }],
  creator: "Bella Chic Studio",
  publisher: "Bella Chic Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bellachicstudio.ro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bella Chic Studio - Salon de Înfrumusețare",
    description: "Transformă-ți stilul la Bella Chic Studio - Salon profesional în Militari",
    url: "https://bellachicstudio.ro",
    siteName: "Bella Chic Studio",
    images: [
      {
        url: "/bellachic-og.jpg",
        width: 1200,
        height: 630,
        alt: "Bella Chic Studio - Salon de Înfrumusețare",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella Chic Studio - Salon de Înfrumusețare",
    description: "Transformă-ți stilul la Bella Chic Studio",
    images: ["/bellachic-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-verification-code",
    other: {
      "facebook-domain-verification": ["facebook-verification-code"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <DataProvider>
        <div className={`${inter.variable} ${playfair.variable} font-sans min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50`}>
          <Navigation />
          <main className="pt-20">{children}</main>
          <Footer />
          <CookieConsent />
          <StructuredData />
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      
      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>
        </div>
      </DataProvider>
    </AuthProvider>
  );
}
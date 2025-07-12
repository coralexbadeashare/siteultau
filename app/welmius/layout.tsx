import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "./styles.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welmius - Închiriere Remorci & Transport Auto | Cluj",
  description: "Servicii profesionale de închiriere remorci, platforme auto, tractări auto și transport marfă. Prețuri competitive și echipamente moderne.",
  keywords: "închiriere remorci, platforme auto, tractare auto, transport marfă, Cluj, Welmius",
};

export default function WelmiusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} bg-gray-50 min-h-screen`}>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
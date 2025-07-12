import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "./styles.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Old Gym - Forge Your Legacy | Sala de Fitness Cluj",
  description: "Transformă-ți corpul și mintea la Old Gym Cluj. Echipamente moderne, antrenori profesioniști, clase diverse: bodybuilding, crossfit, yoga, box.",
  keywords: "sala fitness Cluj, gym Cluj, bodybuilding, crossfit, antrenor personal, fitness Cluj, Old Gym",
};

export default function OldGymLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} bg-black text-white min-h-screen`}>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
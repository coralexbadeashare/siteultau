import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Napoca Instal - Instalații Termice, Sanitare și Climatizare Cluj",
  description: "Specialiști în instalații termice, sanitare și climatizare în Cluj-Napoca. Servicii profesionale de montaj, întreținere și reparații.",
  keywords: "instalații termice, instalații sanitare, climatizare, aer condiționat, Cluj-Napoca, încălzire centrală, instalator autorizat",
  openGraph: {
    title: "Napoca Instal - Instalații Profesionale Cluj",
    description: "Experți în instalații termice, sanitare și climatizare. Servicii complete pentru casa și afacerea ta.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function NapocaInstalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {children}
    </div>
  );
}
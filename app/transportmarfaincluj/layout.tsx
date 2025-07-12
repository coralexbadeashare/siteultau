import type { Metadata } from "next";
import "../globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Transport Marfă Cluj - Servicii de Transport și Mutări Profesionale",
  description: "Transport marfă, mutări mobilă și relocări firme în Cluj-Napoca. Prețuri de la 80 RON. Echipă profesionistă, servicii complete de ambalare și transport.",
  keywords: "transport marfa cluj, mutari mobila cluj, relocari firme cluj, transport mobila cluj napoca",
};

export default function TransportMarfaInClujLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
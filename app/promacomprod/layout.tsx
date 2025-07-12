import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "./styles.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promacom Prod - Reparații Motoare Electrice Cluj | Specialist ISCIR",
  description: "Specialist în reparații motoare electrice, transformatoare și generatoare. Autorizați ISCIR pentru întreținere macarale și poduri rulante. Experiență de peste 20 ani.",
  keywords: "reparații motoare electrice Cluj, rebobinări transformatoare, întreținere macarale, ISCIR, generatoare, Promacom Prod",
};

export default function PromacomProdLayout({
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
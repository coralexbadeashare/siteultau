import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "./styles.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oasis Expres - Spălătorie Auto Premium | Touchless Technology",
  description: "Cea mai modernă spălătorie auto touchless. Deschis NON-STOP, tehnologie avansată, programe multiple de spălare. Happy Hour 22:00-08:00.",
  keywords: "spălătorie auto, touchless, car wash, Oasis Expres, spălare auto, NON-STOP, happy hour",
};

export default function OasisExpresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen`}>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "./styles.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JPX Paint Car - Vopsitorie Auto Profesională București",
  description: "Servicii profesionale de vopsitorie auto, retușuri, protecție ceramică și detailing. Redăm strălucirea mașinii tale!",
  keywords: "vopsitorie auto, vopsitorie auto București, retușuri auto, protecție ceramică, detailing auto, polish auto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
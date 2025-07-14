import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Amillaria - Produse Naturale din Transilvania",
  description: "Sucuri naturale, dulcețuri și preparate artizanale din fructe și legume românești. Familie, tradiție și autenticitate din 2004.",
  keywords: "sucuri naturale, dulceață artizanală, produse tradiționale românești, Transilvania, presare la rece",
  openGraph: {
    title: "Amillaria - Natural înseamnă viață",
    description: "Descoperă gustul autentic al naturii în produsele noastre artizanale, preparate cu dragoste din 2004",
    type: "website",
    locale: "ro_RO",
  },
};

export default function AmillariaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
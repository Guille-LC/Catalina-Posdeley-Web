import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist, Geist_Mono, Ballet } from "next/font/google";
import "@/styles/app/tailwind.css";
import "@/styles/app/globals.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ballet = Ballet({
  subsets: ['latin'],
  variable: '--font-ballet',
});

export const metadata: Metadata = {
  title: "Catalina Posdeley",
  description: "Sitio web sobre la escritora argentina Catalina Posdeley",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} ${ballet.variable} antialiased`}>
        <Header />
        {children}
        <SpeedInsights/>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

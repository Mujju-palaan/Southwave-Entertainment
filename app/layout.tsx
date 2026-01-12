import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import Navbar from '../components/navbar-footer/Navbar'
import Footer from '../components/navbar-footer/Footer'
import Whatsapp from '../components/whatsapp/Whatsapp'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Southwave Entertainment",
  description: "Welcome to SOUTHWAVE ENTERTAINMENT LTD — UK London’s new wave of South Indian entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Whatsapp />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

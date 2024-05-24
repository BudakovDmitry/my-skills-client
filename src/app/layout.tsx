import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from '@/components/ui/Header/Header';
import Footer from '@/components/ui/Footer/Footer';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Skills",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${montserrat.className} min-h-screen bg-white`}>
        {children}
      </body>
    </html>
  );
}

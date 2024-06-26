import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/blocks/Header/Header";
import Footer from "@/components/blocks/Footer/Footer";
import { SITE_NAME } from "@/constants/seo.constants";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
};

export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
          {children}
        <Footer />
    </div>
  );
}

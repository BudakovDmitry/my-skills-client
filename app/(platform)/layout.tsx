import type { Metadata } from "next";
import "../../src/app/main.css";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { SITE_NAME } from "@/shared/config";

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
    <div className="min-h-screen grid grid-rows-[100px_auto_70px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

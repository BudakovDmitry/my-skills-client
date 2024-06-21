import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { SITE_NAME } from "@/constants/seo.constants";
import { Providers } from "./providers";
import { Toaster } from "sonner";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${montserrat.className} min-h-screen bg-white`}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}

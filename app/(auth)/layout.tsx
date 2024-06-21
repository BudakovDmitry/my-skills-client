import { Metadata } from "next";
import "@/app/globals.css";
import { SITE_NAME } from "@/shared/config";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      {children}
    </div>
  );
}

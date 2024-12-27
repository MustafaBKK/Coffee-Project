import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Kahve Dünyası",
  description: "Kahve kültürü, tarifleri ve hikayeleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#f8f3e7]`}>{children}</body>
    </html>
  );
}
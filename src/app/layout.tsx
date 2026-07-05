import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import cn from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted-grotesk",
});

export const metadata: Metadata = {
  title: "Yushank",
  description: "Design Engineer - crafting on the web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        schibstedGrotesk.variable,
        "font-sans antialiased",
      )}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

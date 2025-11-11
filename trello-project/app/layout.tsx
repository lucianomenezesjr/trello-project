import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",  
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trello",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} antialiased`}
        style={{ fontFamily: 'var(--font-jost), sans-serif' }}
      >
        {children}
        <Toaster richColors position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}

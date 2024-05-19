"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

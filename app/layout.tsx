import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Pricing from "./sections/Features";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex flex-col mx-8 gap-10 mb-24">
          {children}
        </main>
        <img
        src="https://images.rawpixel.com/image_transparent_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yOF93YXRlcmNvbG9yX2lsbHVzdHJhdGlvbl9vZl9qYXBhbmVzZV9iYW1ib29fdl8wNzg5ZTE5My05MWViLTRmNDMtYmIzOC0wYjU2Njc5YjcwOTZfMS5wbmc.png"
        alt=""
        className="bg"
      />
      <img
        src="https://i.pinimg.com/originals/6a/e5/33/6ae5330954bae615da2dfdbaf0ed1a5c.png"
        alt=""
        className="bg2"
      />
      </body>
    </html>
  );
}

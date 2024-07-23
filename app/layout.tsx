import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ariel Diego",
  description: "A personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseEffect from "@/components/MouseEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Porfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <MouseEffect />
      </body>
    </html>
  );
}

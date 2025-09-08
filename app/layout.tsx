import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Upshift - Invest with confidence, Grow your future",
  description:
    "Upshift is a gateway to smart investing with real-time market insights and personalized educational support.",
  keywords:
    "investing, mobile app, financial education, stock market, portfolio management",
  authors: [{ name: "Upshift Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

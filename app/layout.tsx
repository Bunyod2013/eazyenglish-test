import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ConvexClientProvider } from "@/components/convex-provider";
import localFont from "next/font/local";
import "./globals.css";

const fredoka = localFont({
  src: [
    {path: "../public/fonts/FredokaOne-Regular.ttf", weight: "1000", style: "normal"},
  ],
  variable: "--font-fredoka",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EazyEnglish - Ingliz tilini o'yin orqali o'rganing",
  description:
    "Ingliz tilini o'yin orqali o'rganing. Bepul. Qiziqarli. Samarali. Kuniga 15 daqiqa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.className} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}

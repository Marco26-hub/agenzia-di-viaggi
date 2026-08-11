import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurum Travel | Agenzia Viaggi Luxury su Misura",
  description:
    "Agenzia viaggi luxury online italiana per viaggi su misura, lune di miele, safari, yacht, ville private e retreat in montagna.",
  metadataBase: new URL("https://aurum-travel-online.beige-fawn-1352.chatgpt.site"),
  openGraph: {
    title: "Aurum Travel | Agenzia Viaggi Luxury su Misura",
    description: "Viaggi su misura, yacht, ville private, safari e retreat di montagna con luxury concierge.",
    images: ["/og.png"],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurum Travel | Agenzia Viaggi Luxury su Misura",
    description: "Viaggi su misura, yacht, ville private, safari e retreat di montagna.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

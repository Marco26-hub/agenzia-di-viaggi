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
  title: "Aurum Travel | Agenzia viaggi online luxury",
  description:
    "Agenzia viaggi online per itinerari su misura, luxury concierge, pacchetti selezionati e collegamenti con portali travel.",
  metadataBase: new URL("https://aurum-travel-online.beige-fawn-1352.chatgpt.site"),
  openGraph: {
    title: "Aurum Travel | Private journeys, impeccably personal",
    description: "Viaggi su misura e luxury concierge per chi vuole vivere il mondo in modo personale.",
    images: ["/og.png"],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurum Travel | Private journeys, impeccably personal",
    description: "Viaggi su misura e luxury concierge.",
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

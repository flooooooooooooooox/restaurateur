import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-data";
import { getRestaurantSchema, getWebSiteSchema } from "@/lib/structured-data";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalTradeName} — restaurant de box de riz à composer`,
    template: `%s | ${siteConfig.legalTradeName}`,
  },
  description:
    "Crousty Vice, restaurant de box de riz à composer au 189 rue Saint-Jean à Caen. Riz parfumé, protéines croustillantes et 7 sauces signature, dans une ambiance néon années 80. Ouvert 7j/7 de 11h à minuit, sur place et à emporter.",
  keywords: [
    "restaurant Caen",
    "restauration rapide Caen",
    "box de riz Caen",
    "manger rue Saint-Jean Caen",
    "poulet croustillant Caen",
    "à emporter Caen",
    "Crousty Vice",
  ],
  applicationName: siteConfig.legalTradeName,
  authors: [{ name: siteConfig.legalTradeName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.legalTradeName,
    title: `${siteConfig.legalTradeName} — restaurant de box de riz à composer`,
    description:
      "Composez votre Crousty : riz parfumé, protéines croustillantes, 7 sauces signature. 189 rue Saint-Jean à Caen, 7j/7 de 11h à minuit.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.legalTradeName} — restaurant de box de riz à composer`,
    description:
      "Composez votre Crousty à Caen : riz parfumé, protéines croustillantes, 7 sauces signature. Ouvert 7j/7 de 11h à minuit.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0616",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${body.variable} font-sans antialiased pb-[68px] md:pb-0`}>
        <JsonLd data={[getRestaurantSchema(), getWebSiteSchema()]} />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}

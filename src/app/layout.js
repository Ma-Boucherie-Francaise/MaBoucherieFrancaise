import { Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "./_components/TopBar";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Loader from "./_components/Loader";

const awesomeSerif = localFont({
  src: "./fonts/AwesomeSerif-BoldExtraTall.otf",
  style: "normal",
  variable: "--font-awesome-serif",
});

const golosText = Golos_Text({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-golos-text",
});

export const metadata = {
  title:
    "Accueil - Ma Boucherie Française | Viande française d'exception livrée chez vous",
  description:
    "Découvrez notre boucherie en ligne et savourez une sélection de viandes 100% françaises : bœuf, agneau, volaille et plus. Livraison rapide et fraîcheur garantie.",
  keywords:
    "boucherie en ligne, viande française, bœuf, agneau, volaille, livraison rapide, viande de qualité, frais, terroir",
  openGraph: {
    title:
      "Ma Boucherie Française | Viande française d'exception livrée chez vous",
    description:
      "Commandez en ligne une sélection de viandes françaises de qualité et recevez vos produits frais directement chez vous ou en point collecte. L'excellence de la viande à portée de clic !",
    url: "https://www.maboucheriefrancaise.com",
    siteName: "Ma Boucherie Française",
    images: [
      {
        url: "https://www.maboucheriefrancaise.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Boucherie en ligne - Viande française d'exception",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ma Boucherie Française | Viande française d'exception livrée chez vous",
    description:
      "Découvrez notre sélection de viandes françaises de qualité. Commandez en ligne et profitez d'une livraison rapide et de produits frais.",
    images: ["https://www.maboucheriefrancaise.com/images/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${awesomeSerif.variable} ${golosText.variable} antialiased`}
      >
        <Loader />
        <TopBar text={"-10 % de réduction sur votre première commande"} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

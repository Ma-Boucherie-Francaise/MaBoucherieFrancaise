import AdviseSection from "./_container/home-page/AdviseSection";
import HeroSection from "./_container/home-page/HeroSection";
import Separation from "./_components/Separation";
import QualitySection from "./_container/home-page/QualitySection";
import History from "./_container/home-page/History";
import LastCta from "./_container/home-page/LastCta";
import DeliverySection from "./_container/home-page/DeliverySection";
import Newsletter from "./_container/home-page/Newsletter";
import Products from "./_container/home-page/Products";
import FAQ from "./_container/home-page/FAQ";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Ma Boucherie Française",
  url: "https://www.maboucheriefrancaise.com",
  logo: "https://www.maboucheriefrancaise.com/images/logo/mbf-white.png",
  description:
    "Découvrez notre boucherie en ligne et savourez une sélection de viandes 100% françaises, alliant tradition et qualité, livrées directement chez vous.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Adresse de votre boutique (à préciser)",
    addressLocality: "Ville",
    postalCode: "Code Postal",
    addressCountry: "FR",
  },
  telephone: "+33781065984",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Separation />
      <AdviseSection />
      <QualitySection />
      <History />
      <Products />
      <Newsletter />
      <FAQ />
      <DeliverySection />
      <LastCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

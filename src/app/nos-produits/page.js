Nos découpesNos découpesNos découpesimport Image from "next/image";
import React, { Suspense } from "react";
import ProductSection from "../_container/product-page/ProductSection";
import HeroSection from "../_container/product-page/HeroSection";

export const metadata = {
  title: "Nos Découpes - Ma Boucherie Française | Viandes d'exception",
  description:
    "Découvrez notre Nos produits et laissez-vous tenter par une sélection raffinée de viandes françaises d'exception, alliant tradition et modernité. Commandez en ligne dès maintenant !",
  keywords:
    "catalogue produit, boucherie en ligne, viande française, bœuf, agneau, volaille, viande de qualité, terroir",
  openGraph: {
    title: "Nos Produits - Ma Boucherie Française | Viandes d'exception",
    description:
      "Parcourez notre catalogue et découvrez une gamme variée de viandes françaises premium, élaborée pour satisfaire les palais les plus exigeants. Fraîcheur et qualité garanties.",
    url: "https://www.maboucheriefrancaise.com/nos-produits",
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
    title: "Nos Produits - Ma Boucherie Française | Viandes d'exception",
    description:
      "Explorez notre Nos produits et découvrez une sélection de viandes françaises premium, soigneusement choisies pour une expérience culinaire unique.",
    images: ["https://www.maboucheriefrancaise.com/images/twitter-image.jpg"],
  },
};

const page = () => {
  return (
    <main>
      <div className="max-h-[300px] block lg:hidden">
        <Image
          src="/images/content/hero-product.jpg"
          width={2880}
          height={924}
          alt=""
          className="w-full h-full object-cover "
        />
      </div>
      <HeroSection />
      <Suspense fallback={<div>Chargement...</div>}>
        <ProductSection />
      </Suspense>
    </main>
  );
};

export default page;

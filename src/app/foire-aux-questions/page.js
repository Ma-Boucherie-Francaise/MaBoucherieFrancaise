Nos découpesNos découpesNos découpesNos découpesimport React from "react";
import QuestionSection from "../_container/faq-page/QuestionSection";

export const metadata = {
  title:
    "FAQ - Ma Boucherie Française | Vos Questions sur Nos Viandes d'Exception",
  description:
    "Trouvez toutes les réponses à vos questions sur Ma Boucherie Française. Découvrez nos engagements, le fonctionnement de notre service de livraison et tout sur nos viandes 100% françaises d'exception.",
  keywords:
    "FAQ, questions fréquentes, boucherie en ligne, viande française, viandes d'exception, service client, livraison rapide, qualité",
  openGraph: {
    title:
      "FAQ - Ma Boucherie Française | Vos Questions sur Nos Viandes d'Exception",
    description:
      "Retrouvez toutes les informations essentielles sur Ma Boucherie Française : nos produits, nos engagements, et comment commander vos viandes de qualité en toute sérénité.",
    url: "https://www.maboucheriefrancaise.com/foire-aux-questions",
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
      "FAQ - Ma Boucherie Française | Vos Questions sur Nos Viandes d'Exception",
    description:
      "Explorez notre FAQ pour découvrir toutes les réponses sur nos produits, nos engagements et notre service de livraison rapide et fiable.",
    images: ["https://www.maboucheriefrancaise.com/images/twitter-image.jpg"],
  },
};

const page = () => {
  return <QuestionSection />;
};

export default page;

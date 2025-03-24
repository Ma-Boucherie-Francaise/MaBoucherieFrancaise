import React from "react";
import MainSection from "../_container/history-page/MainSection";

export const metadata = {
  title:
    "Notre Histoire - Ma Boucherie Française | Tradition et Passion au Service de l'Excellence",
  description:
    "Plongez dans l'histoire de Ma Boucherie Française, une aventure familiale dédiée à offrir des viandes françaises d'exception. Découvrez nos origines, nos valeurs et notre passion pour la qualité.",
  keywords:
    "histoire, boucherie en ligne, viande française, tradition, passion, boucherie familiale, qualité, terroir",
  openGraph: {
    title:
      "Notre Histoire - Ma Boucherie Française | Tradition et Passion au Service de l'Excellence",
    description:
      "Découvrez comment Ma Boucherie Française a su allier tradition et innovation pour devenir le garant d'une viande d'exception. Une histoire de passion et de qualité, de génération en génération.",
    url: "https://www.maboucheriefrancaise.com/notre-histoire",
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
      "Notre Histoire - Ma Boucherie Française | Tradition et Passion au Service de l'Excellence",
    description:
      "Découvrez notre parcours, nos débuts et l'engagement familial qui fait la renommée de Ma Boucherie Française. Une histoire riche en traditions et en saveurs authentiques.",
    images: ["https://www.maboucheriefrancaise.com/images/twitter-image.jpg"],
  },
};

const page = () => {
  return <MainSection />;
};

export default page;

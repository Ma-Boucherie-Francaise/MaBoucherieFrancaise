import Image from "next/image";
import AdviseSection from "./_container/home-page/AdviseSection";
import HeroSection from "./_container/home-page/HeroSection";
import Separation from "./_components/Separation";
import QualitySection from "./_container/home-page/QualitySection";
import History from "./_container/home-page/History";
import Footer from "./_components/Footer";
import LastCta from "./_container/home-page/LastCta";
import DeliverySection from "./_container/home-page/DeliverySection";
import Newsletter from "./_container/home-page/Newsletter";
import Products from "./_container/home-page/Products";
import FAQ from "./_container/home-page/FAQ";

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
      <Footer />
    </div>
  );
}

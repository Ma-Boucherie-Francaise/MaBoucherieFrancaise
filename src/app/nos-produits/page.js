import Image from "next/image";
import React, { Suspense } from "react";
import ProductSection from "../_container/product-page/ProductSection";
import HeroSection from "../_container/product-page/HeroSection";

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

import Image from "next/image";
import React, { Suspense } from "react";
import ProductSection from "../_container/product-page/ProductSection";

const page = () => {
  return (
    <main>
      <div className="max-h-[300px] lg:h-[400px]">
        <Image
          src="/images/content/hero-product.jpg"
          width={2880}
          height={924}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <Suspense fallback={<div>Chargement...</div>}>
        <ProductSection />
      </Suspense>
    </main>
  );
};

export default page;

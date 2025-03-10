import Image from "next/image";
import React from "react";
import ProductSection from "../_container/product-page/ProductSection";
import Footer from "../_components/Footer";

const page = () => {
  return (
    <>
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
        <ProductSection />
      </main>
      <Footer />
    </>
  );
};

export default page;

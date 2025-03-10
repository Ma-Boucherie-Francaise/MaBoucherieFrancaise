import PrimaryButton from "@/app/_components/PrimaryButton";
import React from "react";
import content from "@/app/_data/content.json";
import ProductCard from "@/app/_components/ProductCard";

const Products = () => {
  return (
    <section className=" py-[90px] md:py-28 max-w-[1440px] mx-auto">
      <h2 className="px-5 text-4xl mb-7 md:text-6xl">
        {content.pages.home.products.title}
      </h2>
      <div className="flex flex-col gap-8 w-full">
        <div className="overflow-x-auto">
          {/* <div className="flex flex-row justify-around flex-nowrap gap-8 px-5">
            {content.pages.home.products.category.map((meat, i) => (
              <ProductCard product={meat} key={i} />
            ))}
          </div> */}
        </div>
        <div className="px-5 w-full md:flex md:justify-center">
          <PrimaryButton
            href={content.pages.home.products.cta.href}
            text={content.pages.home.products.cta.text}
            textColor={"text-white"}
            bgColor={"bg-[var(--color-primary)]"}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;

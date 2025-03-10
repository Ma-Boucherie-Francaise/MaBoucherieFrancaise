import React from "react";
import content from "@/app/_data/content.json";
import PrimaryButton from "@/app/_components/PrimaryButton";
import SecondaryButton from "@/app/_components/SecondaryButton";

const DeliverySection = () => {
  return (
    <section className="bg-[var(--color-primary)] py-14 md:py-28 px-5">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-white">
          <h2 className="text-4xl mb-2 md:text-6xl">
            {content.pages.home.delivery.title}
          </h2>
          <p className="text-left text-sm  md:text-lg md:w-2/4">
            {content.pages.home.delivery.subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-7 md:flex-row">
          <PrimaryButton
            text={content.pages.home.delivery.cta[0].text}
            href={content.pages.home.delivery.cta[1].href}
            textColor={"text-[var(--color-primary)]"}
            bgColor={"bg-white"}
          />
          <SecondaryButton
            text={content.pages.home.delivery.cta[1].text}
            href={content.pages.home.delivery.cta[1].href}
            textColor={"text-white"}
            borderColor={"border-white"}
          />
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;

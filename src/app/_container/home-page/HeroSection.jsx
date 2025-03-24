import PrimaryButton from "@/app/_components/PrimaryButton";
import Image from "next/image";
import React from "react";
import content from "@/app/_data/content.json";

const HeroSection = () => {
  return (
    <section className="px-5 flex flex-col items-center gap-5 pb-[90px] lg:py-10 max-w-[1440px] md:mx-auto">
      <div className="grid grid-cols-1 w-full lg:grid-cols-5 items-center">
        <Image
          src="/images/content/hero-meat-img.webp"
          width={915}
          height={725}
          className="w-full md:w-3/4 lg:w-full h-auto mx-auto col-span-3"
          alt="Logo de Ma Boucherie Française"
        />

        <div className="flex flex-col gap-10 lg:gap-16 text-[var(--color-primary)] relative -top-4 w-full lg:w-fit">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl sm:text-8xl leading-16 sm:leading-24 ">
              {content.pages.home.hero.title}
            </h1>
            <p className="text-xl font-medium md:text-3xl lg:text-4xl">
              {content.pages.home.hero.subtitle}
            </p>
          </div>
          <PrimaryButton
            href={content.pages.home.hero.cta.href}
            text={content.pages.home.hero.cta.text}
            textColor={"text-white"}
            bgColor={"bg-[var(--color-primary)]"}
            aria-label={content.pages.home.hero.cta.text}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import PrimaryButton from "@/app/_components/PrimaryButton";
import React from "react";
import content from "@/app/_data/content.json";
import Image from "next/image";

const LastCta = () => {
  return (
    <section className="px-5 md:py-28 py-[90px] flex flex-col items-center gap-8 md:justify-center">
      <div className="text-center">
        <div className="w-full grid place-content-center py-5">
          <Image
            src="/images/ascent/pattern-red-3.png"
            width={153}
            height={50}
            alt=""
          />
        </div>
        <h2 className="text-4xl mb-2 md:text-6xl">
          {content.pages.home.lastCta.title}
        </h2>
        <p className="text-sm font-medium md:text-lg">
          {content.pages.home.lastCta.subtitle}
        </p>
      </div>
      <PrimaryButton
        href={content.pages.home.lastCta.cta.href}
        text={content.pages.home.lastCta.cta.text}
        textColor={"text-white"}
        bgColor={"bg-[var(--color-primary)]"}
        aria-label={content.pages.home.lastCta.cta.text}
      />
    </section>
  );
};

export default LastCta;

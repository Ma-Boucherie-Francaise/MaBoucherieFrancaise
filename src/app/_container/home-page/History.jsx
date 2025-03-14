import PrimaryButton from "@/app/_components/PrimaryButton";
import React from "react";
import content from "@/app/_data/content.json";
import Image from "next/image";
const History = () => {
  return (
    <section className="px-5 py-[90px] md:py-28 text-center flex flex-col gap-8 items-center">
      <div className="md:flex md:flex-col md:items-center">
        <div className="w-full grid place-content-center py-5">
          <Image
            src="/images/ascent/pattern-red-3.png"
            width={153}
            height={50}
            alt=""
          />
        </div>
        <h2 className="text-4xl mb-2 md:text-6xl md:mb-3">
          {content.pages.home.history.title}
        </h2>
        <p className="text-sm font-medium md:text-lg md:w-3/5">
          {content.pages.home.history.subtitle}
        </p>
      </div>
      <PrimaryButton
        href={content.pages.home.history.cta.href}
        text={content.pages.home.history.cta.text}
        bgColor={"bg-[var(--color-primary)]"}
        textColor={"text-white"}
      />
    </section>
  );
};

export default History;

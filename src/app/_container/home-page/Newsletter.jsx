import React from "react";
import content from "@/app/_data/content.json";
import Image from "next/image";
import PrimaryButton from "@/app/_components/PrimaryButton";

const Newsletter = () => {
  return (
    <section className="py-[90px] md:py-28 px-5 flex flex-col gap-8 items-center">
      <div className="text-center md:flex md:flex-col md:items-center">
        <div className="w-full grid place-content-center py-5">
          <Image
            src="/images/ascent/pattern-red-3.png"
            width={153}
            height={50}
          />
        </div>
        <h2 className="text-4xl mb-2 md:text-6xl md:mb-3">
          {content.pages.home.newsletter.title}
        </h2>
        <p className="text-sm font-medium md:text-lg md:w-3/5">
          {content.pages.home.newsletter.subtitle}
        </p>
      </div>
      <div className="w-full md:flex md:gap-2 md:justify-center md:items-center">
        <div className="mb-2 md:mb-0 md:w-[442px]">
          <input
            type="email"
            name=""
            id=""
            placeholder="exemple@exemple.com"
            className="w-full py-4 px-5 rounded-2xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] outline-none"
          />
        </div>
        <PrimaryButton
          text={content.pages.home.newsletter.cta.text}
          bgColor={"bg-[var(--color-primary)]"}
          textColor={"text-white"}
        />
        {/* <button className="w-full min-w-[268px] md:w-fit md:h-fit py-4 px-5 rounded-2xl border-2 border-[var(--color-primary)] bg-[var(--color-primary)] text-white cursor-pointer">
          <p>{content.pages.home.newsletter.cta.text}</p>
        </button> */}
      </div>
    </section>
  );
};

export default Newsletter;

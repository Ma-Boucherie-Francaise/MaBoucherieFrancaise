import Image from "next/image";
import React from "react";
import content from "@/app/_data/content.json";

const AdviseSection = () => {
  return (
    <section className="px-5 py-[90px] md:py-28">
      <div className="relative w-full">
        <Image
          src="/images/icons/quote-icon.png"
          width={77}
          height={65}
          className="absolute -top-5 w-2/12 max-w-[77px] h-auto left-2/4 -translate-x-2/4"
          alt=""
        />
        <div className="text-center md:text-2xl ">
          <p className="w-3/5 md:w-2/5 mx-auto">
            “{content.pages.home.advise.content}”
          </p>
          <p className="mt-4">{content.pages.home.advise.author}</p>
        </div>
      </div>
    </section>
  );
};

export default AdviseSection;

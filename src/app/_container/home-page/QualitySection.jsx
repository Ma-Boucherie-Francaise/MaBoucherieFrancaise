import Image from "next/image";
import React from "react";
import content from "@/app/_data/content.json";

const QualitySection = () => {
  return (
    <section className="flex flex-col gap-9 px-5 py-[90px] md:py-28 md:flex-row md:justify-around max-w-[1440px] mx-auto">
      {content.pages.home.quality.map((q, i) => (
        <article className="flex flex-col items-center gap-5" key={i}>
          <Image
            src={q.imgSrc}
            width={q.width}
            height={q.height}
            className=" w-[185px] h-auto shadow-quality rounded-full"
            alt={q.title}
          />
          <p className="text-center font-semibold text-lg w-2/5 md:w-3/6 leading-6 ">
            {q.title}
          </p>
        </article>
      ))}
    </section>
  );
};

export default QualitySection;

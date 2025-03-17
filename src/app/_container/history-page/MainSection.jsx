import React from "react";
import content from "@/app/_data/content.json";
import Image from "next/image";

const MainSection = () => {
  return (
    <main className="bg-[var(--color-secondary)] text-white px-5 py-[90px] md:py-28">
      <div className="max-w-[1440px] mx-auto">
        <header>
          <h1 className="text-6xl sm:text-8xl leading-16 sm:leading-24 mb-5">
            {content.pages.history.title}
          </h1>
          <p className="text-sm font-medium md:text-lg md:w-4/5">
            {content.pages.history.intro}
          </p>
        </header>
        <div className="w-full py-[90px] grid place-content-center">
          <Image
            src="/images/ascent/pattern-white-3.png"
            width={153}
            height={30}
            alt=""
          />
        </div>
        {/* L'histoire */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-11">
          <Image
            src={content.pages.history.history.image.href}
            width={content.pages.history.history.image.width}
            height={content.pages.history.history.image.height}
            alt="Image de la boutique Ma Boucherie Française"
            className="w-full"
          />
          <div className="flex flex-col gap-10">
            {content.pages.history.history.text.map((text, i) => (
              <div key={i}>
                <p className="text-2xl font-semibold mb-2">{text.title}</p>
                <p className="text-sm font-medium md:text-lg">{text.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Promesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-11 py-[90px] md:py-28">
          <div>
            <h2 className="text-4xl mb-2 md:mb-4 md:text-6xl md:w-3/4 md:leading-18">
              {content.pages.history.promesses.title}
            </h2>
            <div className="mt-8 w-5/6">
              <p className="text-sm font-medium md:text-lg mb-3">
                {content.pages.history.promesses.first_text}
              </p>
              <p className="text-sm font-medium md:text-lg">
                {content.pages.history.promesses.second_text}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {content.pages.history.promesses.quality.map((quality, i) => (
              <div className="flex gap-10 items-center" key={i}>
                <Image
                  src={quality.image.href}
                  width={quality.image.width}
                  height={quality.image.height}
                  className="w-[100px] h-[100px]"
                  alt={quality.title}
                />
                <p className="text-xl font-semibold mb-2 w-2/5">
                  {quality.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Bon contre avis */}
        <div></div>
      </div>
    </main>
  );
};

export default MainSection;

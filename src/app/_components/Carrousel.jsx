"use client";
import { useState } from "react";
import { AnimatePresence, motion as m } from "motion/react";
import content from "@/app/_data/content.json";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./ProductCard";
import PrimaryButton from "./PrimaryButton";

const Carrousel = () => {
  const [currentImage, setcurrentImage] = useState(0);

  const calculTransform = 100 / content.pages.home.products.category.length;

  const IncrementImage = () => {
    setcurrentImage(currentImage + 1);
  };

  const DerementImage = () => {
    setcurrentImage(currentImage - 1);
  };

  return (
    <section className=" py-[90px] md:py-28 max-w-[1440px] mx-auto flex flex-col gap-5 md:gap-8">
      <div className="flex justify-between items-center">
        <h2 className="px-5 text-4xl mb-7 md:text-6xl">
          {content.pages.home.products.title}
        </h2>

        <div className=" gap-3 hidden md:flex">
          <div
            style={{
              pointerEvents: currentImage == 0 ? "none" : "all",
              opacity: currentImage == 0 ? 0.3 : 1,
            }}
            onClick={() => DerementImage()}
            className={`rounded-full border-2 grid place-content-center p-1 border-[var(--color-primary)] hover:bg-[var(--color-primary)] group ${
              currentImage == content.pages.home.products.category.length - 1
                ? "cursor-default"
                : "cursor-pointer"
            }`}
          >
            <svg
              className="rotate-180"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.625 5.25L15.375 12L8.625 18.75"
                stroke="#B10000"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-white"
              />
            </svg>
          </div>
          <div
            style={{
              pointerEvents:
                currentImage == content.pages.home.products.category.length - 1
                  ? "none"
                  : "all",
              opacity:
                currentImage == content.pages.home.products.category.length - 1
                  ? 0.3
                  : 1,
            }}
            onClick={() => IncrementImage()}
            className={`rounded-full border-2 grid place-content-center p-1 border-[var(--color-primary)] hover:bg-[var(--color-primary)] group ${
              currentImage == content.pages.home.products.category.length - 1
                ? "cursor-default"
                : "cursor-pointer"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.625 5.25L15.375 12L8.625 18.75"
                stroke="#B10000"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <div
          style={{
            transform: `translateX(-${calculTransform * currentImage}%)`,
          }}
          className="flex gap-8 px-5 py-5 overflow-auto md:overflow-visible"
        >
          {content.pages.home.products.category.map(
            ({ image, name, startingPrice, href }, i) => {
              return (
                <Link
                  href={{
                    pathname: href,
                    query: { category: name },
                  }}
                  key={i}
                >
                  <article className="shrink-0 h-fit w-full">
                    <div className="w-[290px] h-[290px] md:w-[400px] md:h-[400px] rounded-2xl shadow-card hover:-translate-y-2.5">
                      <Image
                        src={image.href}
                        width={image.width}
                        height={image.height}
                        alt={name}
                        className="h-full w-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="flex flex-col items-center w-full gap-1.5 mt-4">
                      <h3
                        className="text-2xl relative w-fit cursor-pointer 
                  hover:after:scale-x-100 hover:after:origin-left 
                  after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                  after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                  after:transition-transform after:duration-300 after:bg-[var(--color-primary)]"
                      >
                        {name}
                      </h3>
                      <p>Dès {startingPrice}€</p>
                    </div>
                  </article>
                </Link>
              );
            }
          )}
        </div>
      </div>
      <div className="px-5 w-full md:flex md:justify-center mt-3">
        <PrimaryButton
          href={content.pages.home.products.cta.href}
          text={content.pages.home.products.cta.text}
          textColor={"text-white"}
          bgColor={"bg-[var(--color-primary)]"}
        />
      </div>
    </section>
  );
};

export default Carrousel;

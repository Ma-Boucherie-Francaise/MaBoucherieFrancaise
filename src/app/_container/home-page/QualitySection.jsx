"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import content from "@/app/_data/content.json";

export default function QualitySection() {
  const articleVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.08,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };

  return (
    <section className="flex flex-col gap-9 px-5 py-[90px] md:py-28 md:flex-row md:justify-around max-w-[1440px] mx-auto">
      {content.pages.home.quality.map((q, i) => (
        <motion.article
          className="flex flex-col items-center gap-5"
          key={i}
          custom={i}
          variants={articleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src={q.imgSrc}
            width={q.width}
            height={q.height}
            className="w-[185px] h-auto shadow-quality rounded-full"
            alt={q.title}
          />
          <p className="text-center font-semibold text-lg w-2/5 md:w-3/6 leading-6">
            {q.title}
          </p>
        </motion.article>
      ))}
    </section>
  );
}

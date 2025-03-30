"use client";
import React from "react";
import content from "@/app/_data/content.json";
import Image from "next/image";
import PrimaryButton from "@/app/_components/PrimaryButton";
import { motion } from "motion/react";

const Newsletter = () => {
  return (
    <section className="py-[90px] md:py-28 px-5 flex flex-col gap-8 items-center">
      <div className="text-center md:flex md:flex-col md:items-center">
        <motion.div
          className="w-full grid place-content-center py-5"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 0.4,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/images/ascent/pattern-red-3.png"
            width={153}
            height={50}
            alt=""
          />
        </motion.div>
        <motion.h2
          className="text-4xl mb-2 md:text-6xl md:mb-3"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 0.4,
            delay: 0.04,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {content.pages.home.newsletter.title}
        </motion.h2>
        <motion.p
          className="text-sm font-medium md:text-lg md:w-3/5"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 0.4,
            delay: 0.08,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {content.pages.home.newsletter.subtitle}
        </motion.p>
      </div>
      <motion.div
        className="w-full md:flex md:gap-2 md:justify-center md:items-center"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          ease: [0.65, 0, 0.35, 1],
          duration: 0.4,
          delay: 0.12,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
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
          aria-label={content.pages.home.newsletter.cta.text}
        />
      </motion.div>
    </section>
  );
};

export default Newsletter;

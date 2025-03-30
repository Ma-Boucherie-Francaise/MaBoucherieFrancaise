"use client";
import PrimaryButton from "@/app/_components/PrimaryButton";
import React from "react";
import content from "@/app/_data/content.json";
import Image from "next/image";
import { motion } from "motion/react";

const LastCta = () => {
  return (
    <section className="px-5 md:py-28 py-[90px] flex flex-col items-center gap-8 md:justify-center">
      <div className="text-center">
        <motion.div
          className="w-full grid place-content-center py-5"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1.0,
          }}
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
          className="text-4xl mb-2 md:text-6xl"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1.0,
          }}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 0.4,
            delay: 0.04,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {content.pages.home.lastCta.title}
        </motion.h2>
        <motion.p
          className="text-sm font-medium md:text-lg"
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1.0,
          }}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 0.4,
            delay: 0.08,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {content.pages.home.lastCta.subtitle}
        </motion.p>
      </div>

      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1.0,
        }}
        transition={{
          ease: [0.65, 0, 0.35, 1],
          duration: 0.4,
          delay: 0.12,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <PrimaryButton
          href={content.pages.home.lastCta.cta.href}
          text={content.pages.home.lastCta.cta.text}
          textColor={"text-white"}
          bgColor={"bg-[var(--color-primary)]"}
          aria-label={content.pages.home.lastCta.cta.text}
        />
      </motion.div>
    </section>
  );
};

export default LastCta;

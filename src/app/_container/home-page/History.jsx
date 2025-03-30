"use client";
import PrimaryButton from "@/app/_components/PrimaryButton";
import React from "react";
import content from "@/app/_data/content.json";
import Image from "next/image";
import { motion } from "motion/react";

const History = () => {
  return (
    <section className="px-5 py-[90px] md:py-28 text-center flex flex-col gap-8 items-center">
      <div className="md:flex md:flex-col md:items-center">
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
          {content.pages.home.history.title}
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
          {content.pages.home.history.subtitle}
        </motion.p>
      </div>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          ease: [0.65, 0, 0.35, 1],
          duration: 0.4,
          delay: 0.12,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <PrimaryButton
          href={content.pages.home.history.cta.href}
          text={content.pages.home.history.cta.text}
          bgColor={"bg-[var(--color-primary)]"}
          textColor={"text-white"}
          aria-label={content.pages.home.history.cta.text}
        />
      </motion.div>
    </section>
  );
};

export default History;

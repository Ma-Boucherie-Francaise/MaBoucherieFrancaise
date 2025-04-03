"use client";
import PrimaryButton from "@/app/_components/PrimaryButton";
import React from "react";
import content from "@/app/_data/content.json";
import Image from "next/image";
import { motion } from "motion/react";

const LastCta = () => {
  return (
    <section className=" relative">
      <div className="relative w-full h-[600px] ">
        <Image
          src={"/images/content/last_cta_img.jpg"}
          width={5315}
          height={3543}
          className="w-full h-[600px] object-cover"
          alt="Image de charcuterie"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      <div className="absolute left-[50%] top-[50%] -translate-[50%] flex flex-col items-center gap-8 md:justify-center">
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
              src="/images/ascent/pattern-white-3.png"
              width={153}
              height={50}
              alt=""
            />
          </motion.div>
          <motion.h2
            className="text-4xl mb-2 md:text-6xl text-white"
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
            className="text-sm font-medium md:text-lg text-white"
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
      </div>
    </section>
  );
};

export default LastCta;

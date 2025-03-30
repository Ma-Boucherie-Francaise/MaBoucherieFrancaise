"use client";
import Questions from "@/app/_components/Questions";
import Link from "next/link";
import React, { useState } from "react";
import content from "@/app/_data/content.json";
import { motion } from "motion/react";

const FAQ = () => {
  const [opened, setOpened] = useState(false);
  const questionVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.08,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };
  return (
    <section className="px-5 py-[90px] md:py-28 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8 mt-6">
        <div className="flex flex-col gap-4 ">
          <h2 className="text-4xl mb-2 md:text-6xl md:mb-10">
            {content.pages.home.faq.title}
          </h2>
          <div className="flex flex-col gap-8 md:items-center">
            {content.pages.home.faq.questions.map((q, i) => (
              <motion.div
                key={i}
                custom={i}
                className="w-full flex justify-center"
                variants={questionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Questions
                  question={q.question}
                  answer={q.answer}
                  i={i}
                  setOpened={setOpened}
                  opened={opened}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center text-xs md:mt-5 md:text-base">
          <p>{content.pages.home.faq.help.phrase}</p>
          <Link
            href="/foire-aux-questions"
            className="underline underline-offset-1"
          >
            {content.pages.home.faq.help.redirection}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

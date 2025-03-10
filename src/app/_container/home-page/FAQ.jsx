"use client";
import Questions from "@/app/_components/Questions";
import Link from "next/link";
import React, { useState } from "react";
import content from "@/app/_data/content.json";

const FAQ = () => {
  const [opened, setOpened] = useState(false);
  return (
    <section className="px-5 py-[90px] md:py-28 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8 mt-6">
        <div className="flex flex-col gap-4 ">
          <h2 className="text-4xl mb-2 md:text-6xl md:mb-10">
            {content.pages.home.faq.title}
          </h2>
          <div className="flex flex-col gap-8 md:items-center">
            {content.pages.home.faq.questions.map((q, i) => (
              <Questions
                question={q.question}
                answer={q.answer}
                key={i}
                i={i}
                setOpened={setOpened}
                opened={opened}
              />
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

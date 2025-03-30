"use client";
import { useState } from "react";
import content from "@/app/_data/content.json";
import Questions from "@/app/_components/Questions";
import { AnimatePresence, motion as m } from "motion/react";
import Image from "next/image";

const QuestionSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Questions Générales"
  );
  const [opened, setOpened] = useState(false);
  const [filterOpened, setFilterOpened] = useState(false);

  const categories = Object.keys(content.pages.faq.questions);
  const filteredQuestions = content.pages.faq.questions[selectedCategory];

  const categorieVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const questionVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.25,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <section className="max-w-[1440px] mx-auto pt-[40px] pb-[90px] md:py-28 px-5">
      <div className="mb-10 lg:mb-20">
        <h1 className="text-6xl sm:text-8xl leading-16 sm:leading-24 mb-5">
          {content.pages.faq.title}
        </h1>
        <p className="text-sm font-medium md:text-lg md:w-3/5">
          {content.pages.faq.subtitle}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="relative lg:hidden">
          <AnimatePresence>
            <div
              onClick={() => setFilterOpened(!filterOpened)}
              className=" mb-5 border-2 border-[var(--color-primary)] rounded-2xl py-4 px-4 flex justify-between"
            >
              <p>{selectedCategory}</p>
              <Image
                src="/images/icons/mingcute_down-line-icon-red.svg"
                width={24}
                height={24}
                className={`${
                  filterOpened ? "rotate-180" : "rotate-0"
                } transition-rotation duration-300`}
                alt="chevron ouverture questions foire aux questions de Ma Boucherie Française"
              />
            </div>
            {filterOpened && (
              <m.ul
                className="absolute z-10 top-18 left-0 right-0 border-2 border-[var(--color-primary)] rounded-2xl flex flex-col bg-white max-h-[200px] overflow-y-scroll"
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {categories.map((category, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setOpened(false);
                      setSelectedCategory(category);
                      setFilterOpened(false);
                    }}
                    className="w-full py-4 px-4"
                  >
                    {category}
                  </li>
                ))}
              </m.ul>
            )}
          </AnimatePresence>
        </div>

        <m.ul
          className="border-l-2 pl-5 py-2 flex-col gap-2 h-fit hidden lg:flex"
          variants={categorieVariants}
          initial="hidden"
          whileInView="visible"
        >
          {categories.map((category, i) => (
            <li
              key={i}
              onClick={() => {
                setOpened(false);
                setSelectedCategory(category);
              }}
              className={`relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-[var(--color-primary)] ${
                  selectedCategory === category ? "after:scale-x-100" : ""
                }`}
            >
              {category}
            </li>
          ))}
        </m.ul>
        <m.div
          className="lg:col-span-2"
          variants={questionVariants}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-2xl md:text-4xl mb-2 lg:mb-6">
            {selectedCategory}
          </h2>
          <div className="flex flex-col lg:gap-8 gap-4">
            {filteredQuestions.map(({ question, answer }, i) => (
              <Questions
                i={i}
                key={i}
                opened={opened}
                setOpened={setOpened}
                question={question}
                answer={answer}
              />
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default QuestionSection;

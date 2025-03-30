"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loaderVariants = {
    initial: { y: 0, opacity: 1 },
    animate: { y: 0, opacity: 1 },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 1.0 },
    },
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const finishLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "auto";
      }, 2000);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      return () => {
        window.removeEventListener("load", finishLoading);
        document.body.style.overflow = "auto";
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-[var(--color-secondary)] grid place-content-center h-screen w-screen"
          variants={loaderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Image
            src="/images/ascent/pattern-white-3.png"
            width="153"
            height="31"
            className="absolute bottom-10 right-10 z-[60] w-[85px]"
            alt="Pattern Ma Boucherie Française"
          />
          <Image
            src="/images/logo/mbf-white-stylised.png"
            width="196"
            height="124"
            alt="Logo stylisé de Ma Boucherie Française"
            className="w-[165px] lg:w-[200px] h-auto"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

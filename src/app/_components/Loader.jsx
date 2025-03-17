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

    const finishLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
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
          className="fixed inset-0 z-50 bg-[var(--color-secondary)] h-screen w-screen grid place-content-center"
          variants={loaderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Image
            src="/images/logo/mbf-white-stylised.png"
            width="196"
            height="124"
            alt="Logo stylisé de Ma Boucherie Française"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

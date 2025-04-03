"use client";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../layout";
import Image from "next/image";
import content from "@/app/_data/content.json";

const Popup = () => {
  let hasAlreadyBeenClosed = sessionStorage.getItem("popup") || false;
  const { loading } = useContext(AppContext);
  const [canShowPopup, setCanShowPopup] = useState(false);

  function closePopup() {
    sessionStorage.setItem("popup", true);
    setCanShowPopup(false);
  }

  useEffect(() => {
    if (!loading) {
      setCanShowPopup(true);
    }
  }, [loading]);

  return (
    !hasAlreadyBeenClosed &&
    canShowPopup && (
      <>
        <div className="fixed z-[39] h-full w-full inset-0 bg-black opacity-20"></div>
        <article className="overflow-hidden z-40 fixed top-2/4 left-2/4 -translate-2/4 flex flex-col items-center w-[calc(100%-40px)] max-w-[440px] py-10 px-5 bg-[var(--color-primary)] rounded-xl">
          <button
            className="absolute top-5 right-5 w-8 h-8 cursor-pointer"
            aria-label="Fermer la popup"
            onClick={() => closePopup()}
          >
            <div className="absolute w-8 h-0.5 bg-white transform rotate-45 top-1/2 left-0"></div>
            <div className="absolute w-8 h-0.5 bg-white transform -rotate-45 top-1/2 left-0"></div>
          </button>
          <Image
            src={"/images/logo/mbf-white-stylised.png"}
            width={196}
            height={124}
            className="h-auto w-[125px]"
            alt="Logo Stylisé MaBoucherieFrançaise"
          />
          <div className="text-white text-center my-5 ">
            <h2 className="text-4xl md:text-5xl mb-2.5">
              {content.popup.title}
            </h2>
            <p>{content.popup.subtitle}</p>
          </div>
        </article>
      </>
    )
  );
};

export default Popup;

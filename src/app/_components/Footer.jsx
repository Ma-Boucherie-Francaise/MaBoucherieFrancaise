"use client";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import content from "@/app/_data/content.json";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={`${
        pathname === "/notre-histoire"
          ? "bg-[var(--color-secondary)]"
          : "bg-[var(--color-primary)]"
      } px-5 py-5  text-white`}
    >
      <div className="flex flex-col gap-8  max-w-[1440px] mx-auto">
        <div className="md:mb-10">
          <h2 className="text-4xl md:text-6xl mb-2">Rejoignez Nous</h2>
          <p>
            Inscrivez-vous pour recevoir des actualités, recettes et cadeaux
            exclusifs
          </p>
          <div className="mt-4 mb-2 flex flex-col md:flex-row md:items-center gap-2 ">
            <div className="md:w-[442px]">
              <input
                type="email"
                name=""
                id=""
                placeholder="exemple@exemple.com"
                className="w-full py-4 px-5 rounded-2xl border-2 border-white text-white outline-none"
              />
            </div>
            <button className="w-full min-w-[268px] md:w-fit md:h-fit py-4 px-5 rounded-2xl bg-white text-[var(--color-primary)] cursor-pointer md:text-lg">
              <p>S'inscrire</p>
            </button>
          </div>
        </div>
        <div className="md:flex md:flex-row md:w-full md:justify-between">
          <div className="flex flex-col mb-8 md:mb-0 md:flex-row gap-5 md:gap-20">
            <div className="w-full">
              <Image
                src="/images/logo/mbf-white-stylised.png"
                width={196}
                height={124}
                className="mx-auto md:mx-0"
                alt=""
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <div>
                <p>{content.footer.daysOpen}</p>
                <p>{content.footer.hoursOpen}</p>
              </div>
              <div>
                <p>{content.footer?.secondDaysOpen}</p>
                <p>{content.footer?.secondHoursOpen}</p>
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-4 md:flex-row md:gap-16">
            <ul className="flex flex-col gap-2">
              <li
                className="relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-[var(--color-background)]"
              >
                <Link href="/">Accueil</Link>
              </li>
              <li
                className="relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-[var(--color-background)]"
              >
                <Link href="/notre-histoire">Histoire</Link>
              </li>
              <li
                className="relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-[var(--color-background)]"
              >
                <Link href="/nos-produits">Produits</Link>
              </li>
              <li
                className="relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-[var(--color-background)]"
              >
                <Link href="/foire-aux-questions">FAQ</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li
                className="relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-[var(--color-background)]"
              >
                <Link href="/">Mentions Légales</Link>
              </li>
              <li
                className="relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-[var(--color-background)]"
              >
                <Link href="/">Politique de confidentialité</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="w-full py-5 grid place-content-center">
            <Image
              src="/images/ascent/pattern-white-3.png"
              width={153}
              height={30}
              alt=""
            />
          </div>
          <p className="text-center text-xs">
            © Copyright 2025 - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

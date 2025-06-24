"use client";
import Image from "next/image";
import Link from "next/link";
import content from "@/app/_data/content.json";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion as m } from "motion/react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  return (
    <header
      className={`px-5 py-5 flex justify-between items-center z-10 ${
        pathname === "/notre-histoire" && "bg-[var(--color-secondary)]"
      }`}
    >
      <div className="lg:hidden flex items-center justify-between w-full ">
        <Link href="/" className="w-[172px]">
          <Image
            src={
              pathname === "/notre-histoire"
                ? "/images/logo/mbf-white.png"
                : "/images/logo/mbf-red.png"
            }
            width={208}
            height={55}
            className="w-[172px] h-[45px]"
            alt="Logo de Ma Boucherie Française"
          />
        </Link>
        <button
          className={`flex flex-col cursor-pointer z-30 ${
            isActive && "fixed right-5"
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          <span
            className={`block w-6 h-[3px] rounded-2xl transition-all duration-300 ${
              pathname === "/notre-histoire"
                ? isActive
                  ? "bg-[var(--color-primary)]"
                  : "bg-white"
                : isActive
                ? "bg-white"
                : "bg-[var(--color-primary)]"
            } ${isActive ? "rotate-45 translate-y-2" : ""} relative -top-1`}
          ></span>
          <span
            className={`block w-6 h-[3px] rounded-2xl transition-all duration-300 ${
              pathname === "/notre-histoire"
                ? "bg-white"
                : "bg-[var(--color-primary)]"
            } ${isActive ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block w-6 h-[3px] rounded-2xl transition-all duration-300 ${
              pathname === "/notre-histoire"
                ? isActive
                  ? "bg-[var(--color-primary)]"
                  : "bg-white"
                : isActive
                ? "bg-white"
                : "bg-[var(--color-primary)]"
            } ${isActive ? "-rotate-45 -translate-y-1.5" : ""} relative top-1`}
          ></span>
        </button>
      </div>

      <AnimatePresence>
        {isActive && (
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
            className={`fixed inset-0 z-20 w-full grid place-content-center ${
              pathname === "/notre-histoire"
                ? "bg-white text-[var(--color-primary)]"
                : "bg-[var(--color-primary)] text-white"
            }`}
          >
            <nav className="w-full">
              <ul className="flex flex-col justify-center items-center">
                <li
                  onClick={() => setIsActive(!isActive)}
                  className={`relative text-center cursor-pointer py-5 px-10`}
                >
                  <Link href="/">Accueil</Link>
                </li>
                <li
                  onClick={() => setIsActive(!isActive)}
                  className={`relative  text-center cursor-pointer py-5 px-10`}
                >
                  <Link href="/notre-histoire">Histoire</Link>
                </li>
                <li
                  onClick={() => setIsActive(!isActive)}
                  className={`relative  text-center cursor-pointer py-5 px-10`}
                >
                  <Link href="/nos-produits">Produits</Link>
                </li>
                <li
                  onClick={() => setIsActive(!isActive)}
                  className={`relative  text-center cursor-pointer py-5 px-10`}
                >
                  <Link href="/foire-aux-questions">FAQ</Link>
                </li>
              </ul>
              <div className="flex flex-col items-center">
                <Link
                  target="_blank"
                  href={content.header.account.href}
                  className="py-5 px-10"
                  onClick={() => setIsActive(!isActive)}
                >
                  <Image
                    src={
                      pathname === "/notre-histoire"
                        ? "/images/icons/account-icon-red.svg"
                        : "/images/icons/account-icon-white.svg"
                    }
                    width={24}
                    height={24}
                    className="cursor-pointer"
                    alt="Account Icon"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={content.header.cart.href}
                  className="py-5 px-10"
                  onClick={() => setIsActive(!isActive)}
                >
                  <Image
                    src={
                      pathname === "/notre-histoire"
                        ? "/images/icons/cart-icon-red.svg"
                        : "/images/icons/cart-icon-white.svg"
                    }
                    width={24}
                    height={24}
                    className="cursor-pointer"
                    alt="Cart Icon"
                  />
                </Link>
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>

      <div className="hidden w-full lg:flex md:justify-between relative py-2">
        <nav>
          <ul className="flex gap-8">
            <li
              className={`relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 ${
                  pathname === "/notre-histoire"
                    ? "after:bg-white text-white"
                    : "after:bg-[var(--color-primary)]"
                }`}
            >
              <Link href="/">Accueil</Link>
            </li>
            <li
              className={`relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 ${
                  pathname === "/notre-histoire"
                    ? "after:bg-white text-white"
                    : "after:bg-[var(--color-primary)]"
                }`}
            >
              <Link href="/notre-histoire">Histoire</Link>
            </li>
            <li
              className={`relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 ${
                  pathname === "/notre-histoire"
                    ? "after:bg-white text-white"
                    : "after:bg-[var(--color-primary)]"
                }`}
            >
              <Link href="/nos-produits">Produits</Link>
            </li>
            <li
              className={`relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 ${
                  pathname === "/notre-histoire"
                    ? "after:bg-white text-white"
                    : "after:bg-[var(--color-primary)]"
                }`}
            >
              <Link href="/foire-aux-questions">FAQ</Link>
            </li>
          </ul>
        </nav>
        <Link href="/">
          <Image
            src={
              pathname === "/notre-histoire"
                ? "/images/logo/mbf-white.png"
                : "/images/logo/mbf-red.png"
            }
            width={208}
            height={55}
            className="w-[172px] h-auto absolute left-2/4 -translate-x-2/4 top-0"
            alt=""
          />
        </Link>

        <div className="flex gap-6 lg:gap-4">
          <Link href={content.header.cart.href} target="_blank">
            <Image
              src={
                pathname === "/notre-histoire"
                  ? "/images/icons/cart-icon-white.svg"
                  : "/images/icons/cart-icon-red.svg"
              }
              width={24}
              height={24}
              className="cursor-pointer w-[26px] h-[26px]"
              alt="Cart Icon"
            />
          </Link>
          <Link href={content.header.account.href} target="_blank">
            <Image
              src={
                pathname === "/notre-histoire"
                  ? "/images/icons/account-icon-white.svg"
                  : "/images/icons/account-icon-red.svg"
              }
              width={24}
              height={24}
              className="cursor-pointer"
              alt="Account Icon"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

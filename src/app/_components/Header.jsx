import Image from "next/image";
import Link from "next/link";
import content from "@/app/_data/content.json";

const Header = () => {
  return (
    <header className="px-5 py-5 flex justify-between items-center fixed md:static bg-white top-0 left-0 right-0 z-10">
      <div className="lg:hidden flex items-center justify-between w-full ">
        <Image
          src="/images/logo/mbf-red.png"
          width={208}
          height={55}
          className="w-[172px] h-auto"
          alt=""
        />
        <div className={`flex flex-col gap-1`}>
          <div className="w-6 h-[3px] bg-[var(--color-primary)] rounded-2xl"></div>
          <div className="w-6 h-[3px] bg-[var(--color-primary)] rounded-2xl"></div>
          <div className="w-6 h-[3px] bg-[var(--color-primary)] rounded-2xl"></div>
        </div>
      </div>

      <div className="hidden w-full lg:flex md:justify-between relative py-2">
        <nav>
          <ul className="flex gap-8">
            <li
              className="relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-[var(--color-primary)]"
            >
              <Link href="/">Accueil</Link>
            </li>
            <li
              className="relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-[var(--color-primary)]"
            >
              <Link href="/notre-histoire">Histoire</Link>
            </li>
            <li
              className="relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-[var(--color-primary)]"
            >
              <Link href="/nos-produits">Produits</Link>
            </li>
            <li
              className="relative w-fit cursor-pointer 
                hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[10%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-[var(--color-primary)]"
            >
              <Link href="/foire-aux-questions">FAQ</Link>
            </li>
          </ul>
        </nav>
        <Image
          src="/images/logo/mbf-red.png"
          width={208}
          height={55}
          className="w-[172px] h-auto absolute left-2/4 -translate-x-2/4 top-0"
          alt=""
        />
        <div className="flex gap-6">
          <Link href={content.header.account.href}>
            <Image
              src="/images/icons/account-icon-red.svg"
              width={24}
              height={24}
              className="cursor-pointer"
              alt=""
            />
          </Link>
          <Link href={content.header.cart.href}>
            <Image
              src="/images/icons/cart-icon-red.svg"
              width={24}
              height={24}
              className="cursor-pointer"
              alt=""
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

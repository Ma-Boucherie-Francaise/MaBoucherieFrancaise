import Link from "next/link";

const SecondaryButton = ({ text, borderColor, textColor, cb, href }) => {
  return href ? (
    <Link href={href} className={"w-full md:w-fit cursor-pointer"}>
      <button
        className={`border ${borderColor} ${textColor} min-w-[280px] w-full md:w-fit py-4 px-5 rounded-2xl cursor-pointer hover:bg-white hover:text-[var(--color-primary)] transition`}
        onClick={cb}
      >
        <p className="text-sm md:text-lg">{text}</p>
      </button>
    </Link>
  ) : (
    <button
      className={`border ${borderColor} ${textColor} min-w-[280px] w-full md:w-fit py-4 px-5 rounded-2xl cursor-pointer hover:bg-white hover:text-[var(--color-primary)] transition`}
      onClick={cb}
    >
      <p className="text-sm md:text-lg">{text}</p>
    </button>
  );
};

export default SecondaryButton;

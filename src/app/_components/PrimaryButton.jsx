import Link from "next/link";

const PrimaryButton = ({ text, bgColor, textColor, cb, href }) => {
  return href ? (
    <Link href={href} className={"w-full md:w-auto cursor-pointer "}>
      <button
        className={`${bgColor} ${textColor} min-w-[280px] w-full md:w-fit py-4 px-5 rounded-2xl cursor-pointer hover:opacity-80 transition-opacity`}
        onClick={cb}
      >
        <p className="text-sm md:text-lg">{text}</p>
      </button>
    </Link>
  ) : (
    <button
      className={`${bgColor} ${textColor} min-w-[280px] w-full md:w-fit py-4 px-5 rounded-2xl cursor-pointer hover:opacity-80 transition-opacity`}
      onClick={cb}
    >
      <p className="text-sm md:text-lg">{text}</p>
    </button>
  );
};

export default PrimaryButton;

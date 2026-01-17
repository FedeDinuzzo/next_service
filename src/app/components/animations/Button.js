import Link from "next/link";

const Button = ({ styles, text, link }) => {
  return (
    <Link href={`/${link}`} aria-label={link}>
      <button
        type="button"
        className={`py-4 px-6 bg-[#00064F]/10 border border-[#00064F]/30 font-popins font-medium xs:text-[16px] xl:text-[18px] text-secondary outline-none rounded-lg transition hover:bg-[#00064F]/15 ${styles}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;

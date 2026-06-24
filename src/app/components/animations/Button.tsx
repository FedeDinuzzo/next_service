import Link from "next/link";
import type { HTMLAttributes } from "react";

type ButtonProps = {
  styles?: string;
  className?: string;
  text: string;
  link?: string;
  href?: string;
  ariaLabel?: string;
  showIcon?: boolean;
} & HTMLAttributes<HTMLElement>;

const Button = ({
  styles = "",
  className = "",
  text,
  link,
  href,
  ariaLabel,
  showIcon = true,
  ...rest
}: ButtonProps) => {
  const resolvedLabel = ariaLabel ?? rest["aria-label"] ?? text;
  const classes = `
    group relative isolate inline-flex items-center justify-center gap-2
    rounded-xl px-6 py-3 font-semibold text-primary
    bg-blue-gradient
    shadow-[0_14px_40px_rgba(10,27,111,0.30)]
    ring-1 ring-white/10
    overflow-hidden
    transition-transform duration-200
    hover:-translate-y-0.5 active:translate-y-0
    focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000214]
    before:absolute before:inset-0 before:rounded-xl before:p-[1px]
    before:bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02))]
    before:content-['']
    after:absolute after:inset-0 after:rounded-xl after:content-['']
    after:bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.16)_45%,transparent_60%)]
    after:translate-x-[-140%] after:transition-transform after:duration-700 after:ease-out
    hover:after:translate-x-[140%]
    ${styles} ${className}
  `;
  const content = (
    <>
      <span className="relative z-10">{text}</span>

      {showIcon && (
        <svg
          className="relative z-10 h-4 w-4 opacity-90 transition-transform duration-200 group-hover:translate-x-0.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 0 1 .02-1.06L10.94 10 7.23 6.29a.75.75 0 1 1 1.06-1.06l4.24 4.24c.29.29.29.77 0 1.06l-4.24 4.24a.75.75 0 0 1-1.08 0Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} aria-label={resolvedLabel} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  const resolvedHref = link ? `/${link}` : "#";
  return (
    <Link href={resolvedHref} aria-label={resolvedLabel} className={classes} {...rest}>
      {content}
    </Link>
  );
};

export default Button;

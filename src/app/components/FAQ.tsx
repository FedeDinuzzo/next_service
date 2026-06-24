"use client";

import { useMemo, useState } from "react";
import styles from "../constants/style";
import Reveal from "./Reveal";

type FAQItem = {
  question: string;
  answer: string | React.ReactNode;
};

type FAQProps = {
  title: string;
  subtitle?: string;
  items: FAQItem[];
};

const FAQ = ({ title, subtitle, items }: FAQProps) => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const startIndex = currentPage * itemsPerPage;

  const pageItems = useMemo(
    () => items.slice(startIndex, startIndex + itemsPerPage),
    [items, startIndex]
  );

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 0 || nextPage >= totalPages) return;
    setActiveIndex(null);
    setCurrentPage(nextPage);
  };

  return (
    <Reveal variant="heavy">
      <section className="px-6 xl:px-0 relative z-40 py-6 pb-24 md:py-8 mt-24 md:mt-0 lg:mt-36 xl:mt-20">
      <div className="max-w-[900px] mx-auto">
        <h2 className={styles.heading2}>{title}</h2>
        {subtitle ? <p className={`${styles.paragraph} mt-5`}>{subtitle}</p> : null}

        <div className="mt-8 flex flex-col gap-4">
          {pageItems.map((item, index) => {
            const itemIndex = startIndex + index;
            const isOpen = activeIndex === itemIndex;

            return (
              <div
                key={`${item.question}-${itemIndex}`}
                className={`w-full rounded-[20px] feature-card overflow-hidden ${
                  isOpen ? "faq-card-open" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(itemIndex)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-poppins font-normal text-white text-[16px] xl:text-[18px] leading-[23px]">
                    {item.question}
                  </span>
                  <span
                    className={`ml-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-secondary">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className="px-6 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="pb-6 font-poppins font-normal text-dimWhite text-[15px] xl:text-[16px] leading-[23px]">
                    {typeof item.answer === "string" ? item.answer : item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {totalPages > 1 ? (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              className="rounded-full border border-secondary/20 px-3 py-1 text-secondary transition hover:bg-secondary/10 disabled:opacity-40"
              disabled={currentPage === 0}
              aria-label="Pagina anterior"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, page) => (
                <button
                  key={`faq-page-${page}`}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`h-9 w-9 rounded-full border text-sm font-poppins transition ${
                    page === currentPage
                      ? "border-secondary text-secondary bg-secondary/10"
                      : "border-secondary/20 text-dimWhite hover:bg-secondary/10"
                  }`}
                  aria-label={`Ir a pagina ${page + 1}`}
                >
                  {page + 1}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              className="rounded-full border border-secondary/20 px-3 py-1 text-secondary transition hover:bg-secondary/10 disabled:opacity-40"
              disabled={currentPage === totalPages - 1}
              aria-label="Pagina siguiente"
            >
              →
            </button>
          </div>
        ) : null}
      </div>
      </section>
    </Reveal>
  );
};

export default FAQ;

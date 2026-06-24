"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "text" | "title" | "card" | "cta" | "image" | "heavy";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
};

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  stagger?: number;
  wrapChildren?: boolean;
};

const DISTANCE: Record<RevealVariant, [number, number]> = {
  text: [10, 16],
  title: [12, 20],
  card: [12, 18],
  cta: [10, 16],
  image: [14, 22],
  heavy: [16, 26],
};

const DURATION: Record<RevealVariant, [number, number]> = {
  text: [0.6, 0.9],
  title: [0.65, 1.0],
  card: [0.65, 1.0],
  cta: [0.6, 0.95],
  image: [0.7, 1.1],
  heavy: [0.75, 1.2],
};

const SM_BREAKPOINT = 639;

export const Reveal = ({
  children,
  className = "",
  variant = "text",
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.innerWidth <= SM_BREAKPOINT;

    const y = prefersReduced ? 0 : DISTANCE[variant][isMobile ? 0 : 1];
    const dur = prefersReduced ? 0.01 : DURATION[variant][isMobile ? 0 : 1];

    el.style.setProperty("--reveal-y", `${y}px`);
    el.style.setProperty("--reveal-dur", `${dur}s`);

    if (visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, visible]);

  return (
    <div
      ref={ref}
      className={`reveal-hidden ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export const RevealGroup = ({
  children,
  className = "",
  variant = "card",
  stagger = 0.08,
  wrapChildren = true,
}: RevealGroupProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const childArray = Array.isArray(children) ? children : [children];
  const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.innerWidth <= SM_BREAKPOINT;

    const y = prefersReduced ? 0 : DISTANCE[variant][isMobile ? 0 : 1];
    const dur = prefersReduced ? 0.01 : DURATION[variant][isMobile ? 0 : 1];
    const staggerDelay = prefersReduced ? 0 : stagger;

    const items = el.querySelectorAll<HTMLElement>(":scope > [data-reveal-item]");
    items.forEach((item, index) => {
      item.style.setProperty("--reveal-y", `${y}px`);
      item.style.setProperty("--reveal-dur", `${dur}s`);
      item.style.setProperty("--reveal-delay", `${index * staggerDelay}s`);
    });

    const observerOptions = isMobile ? { threshold: 0.3 } : { threshold: 0.25 };

    if (isMobile) {
      items.forEach((_, index) => {
        const item = items[index];
        const childObserver = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSet((prev) => {
                if (prev.has(index)) return prev;
                const next = new Set(prev);
                next.add(index);
                return next;
              });
              childObserver.disconnect();
            }
          },
          observerOptions,
        );
        childObserver.observe(item);
      });
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSet((prev) => {
              if (prev.size === items.length) return prev;
              const next = new Set<number>();
              items.forEach((_, i) => next.add(i));
              return next;
            });
            observer.disconnect();
          }
        },
        observerOptions,
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, [variant, stagger]);

  if (!wrapChildren) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, index) => (
        <div
          key={`reveal-${index}`}
          data-reveal-item=""
          className={`reveal-hidden ${visibleSet.has(index) ? "reveal-visible" : ""}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Reveal;

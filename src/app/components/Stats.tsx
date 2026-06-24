"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { stats } from "../constants/index";
import styles from "../constants/style";
import Reveal from "./Reveal";

type StatConfig = {
  id: string;
  title: string;
  prefix: string;
  suffix: string;
  startValue: number;
  endValue: number;
  useGrouping: boolean;
  isNumeric: boolean;
  rawValue: string;
};

const STAT_START_VALUES: Record<string, number> = {
  "stats-1": 0,
  "stats-2": 10,
  "stats-3": 12999,
};

const parseStatValue = (value: string) => {
  const match = value.match(/^([^0-9]*)([0-9.]+)([^0-9]*)$/);
  if (!match) {
    return null;
  }

  const [, prefix, numberPart, suffix] = match;
  const numeric = Number(numberPart.replace(/\./g, ""));
  if (Number.isNaN(numeric)) {
    return null;
  }

  return {
    prefix,
    suffix,
    numeric,
    useGrouping: numberPart.includes("."),
  };
};

const formatStatValue = (value: number, config: StatConfig) => {
  const rounded = Math.round(value);
  const formatted = config.useGrouping
    ? rounded.toLocaleString("es-AR")
    : String(rounded);
  return `${config.prefix}${formatted}${config.suffix}`;
};

const Stats = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  const statConfigs = useMemo<StatConfig[]>(() => {
    return stats.map((stat) => {
      const parsed = parseStatValue(stat.value);
      if (!parsed) {
        return {
          id: stat.id,
          title: stat.title,
          prefix: "",
          suffix: "",
          startValue: 0,
          endValue: 0,
          useGrouping: false,
          isNumeric: false,
          rawValue: stat.value,
        };
      }

      const startValue =
        STAT_START_VALUES[stat.id] ?? parsed.numeric;

      return {
        id: stat.id,
        title: stat.title,
        prefix: parsed.prefix,
        suffix: parsed.suffix,
        startValue,
        endValue: parsed.numeric,
        useGrouping: parsed.useGrouping,
        isNumeric: true,
        rawValue: stat.value,
      };
    });
  }, []);

  const configById = useMemo(() => {
    return statConfigs.reduce<Record<string, StatConfig>>((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }, [statConfigs]);

  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>(() => {
    return statConfigs.reduce<Record<string, number>>((acc, item) => {
      acc[item.id] = item.startValue;
      return acc;
    }, {});
  });

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    if (prefersReducedMotion) {
      const rafId = requestAnimationFrame(() => {
        setAnimatedValues((prev) => {
          const next = { ...prev };
          statConfigs.forEach((item) => {
            if (item.isNumeric) {
              next[item.id] = item.endValue;
            }
          });
          return next;
        });
      });
      return () => cancelAnimationFrame(rafId);
    }

    const durationMs = 2400;
    const startTime = performance.now();

    let rafId = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues((prev) => {
        const next = { ...prev };
        statConfigs.forEach((item) => {
          if (!item.isNumeric) return;
          next[item.id] =
            item.startValue + (item.endValue - item.startValue) * eased;
        });
        return next;
      });

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasAnimated, prefersReducedMotion, statConfigs]);

  return (
    <Reveal variant="heavy">
      <section
        ref={sectionRef}
        className={`sm:${styles.flexCenter} flex-row flex-wrap mb-20 m-6 ss:mt-56 sm:mt-8 lg:-mt-20 xl:mt-0 lg:mb-40 xl:mb-12`}
      >
        <div className="flex w-full flex-row flex-wrap">
          {stats.map((stat) => {
            const config = configById[stat.id];
            const value = config?.isNumeric
              ? formatStatValue(animatedValues[stat.id] ?? config.startValue, config)
              : stat.value;

            return (
              <Reveal
                key={stat.id}
                variant="text"
                className={`sm:flex-1 flex justify-start items-center flex-row m-3 lg:m-0`}
              >
                <div className="font-poppins font-semibold sm:text-[40px] xs:text-[36px] text-[30px] xs:leading-[53px] leading-[43px] text-white tabular-nums min-w-[68px] xs:min-w-[80px] sm:min-w-[96px]">
                  {value}
                </div>
                <p className="font-poppins font-normal sm:text-[20px] xs:text-[18px] text-[16px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
                  {stat.title}
                </p>
              </Reveal>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
};

export default Stats;

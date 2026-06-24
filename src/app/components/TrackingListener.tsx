"use client";

import { useEffect, useRef } from "react";
import { pushAdsConversion, type ConversionType } from "../lib/tracking";

const CLASS_MAP: { cls: string; type: ConversionType }[] = [
  { cls: "js-track-call", type: "call" },
  { cls: "js-track-whatsapp", type: "whatsapp" },
  { cls: "js-track-maps", type: "maps" },
  { cls: "js-track-instagram", type: "instagram" },
];

const DEDUPE_WINDOW_MS = 800;

const TrackingListener = () => {
  const dedupeRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    if (typeof document === "undefined") return;
    const options: AddEventListenerOptions = { capture: true };

    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest) return;

      const selector = CLASS_MAP.map((item) => `.${item.cls}`).join(", ");
      const el = target.closest(selector) as HTMLElement | null;
      if (!el) return;

      const matched = CLASS_MAP.find((item) => el.classList.contains(item.cls));
      if (!matched) return;

      const label = el.getAttribute("data-track-label") || "";
      const linkEl = el.closest("a");
      const href = linkEl?.href || "";
      const pathname = window.location.pathname;
      const key = `${matched.type}|${label}|${href}|${pathname}`;
      const now = Date.now();
      const last = dedupeRef.current.get(key);
      if (last && now - last < DEDUPE_WINDOW_MS) return;
      dedupeRef.current.set(key, now);

      pushAdsConversion(matched.type, label, { href });
    };

    document.addEventListener("click", handler, options);
    return () => document.removeEventListener("click", handler, options);
  }, []);

  return null;
};

export default TrackingListener;

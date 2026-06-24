"use client";

import { useEffect, useRef } from "react";

type LeadAction = "whatsapp" | "phone" | "maps" | "instagram";

type LeadPayload = {
  lead_id: string;
  event_id: string;
  created_at: string;
  site: string;
  action_type: LeadAction;
  status:
    | "clicked_whatsapp"
    | "clicked_phone"
    | "clicked_maps"
    | "clicked_instagram";
  gclid: string;
  gbraid: string;
  wbraid: string;
  landing_url: string;
  landing_time: string;
  latest_url: string;
  latest_seen_at: string;
  current_url: string;
  page_path: string;
  page_title: string;
  categoria: string;
  marca: string;
  lead_label: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_adgroup: string;
  utm_term: string;
  device: string;
  matchtype: string;
  network: string;
  clicked_to: string;
  referrer: string;
  user_agent: string;
  language: string;
  timezone: string;
  screen_width: number;
  screen_height: number;
  anonymous_session_id: string;
};

type TrackOfflineLeadOptions = {
  clickedTo?: string;
  element?: Element | null;
  leadLabel?: string;
  categoria?: string;
  categoryContext?: string;
  formName?: string;
  formPhone?: string;
  formProblem?: string;
};

const TRACKING_PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_adgroup",
  "utm_term",
  "device",
  "matchtype",
  "network",
] as const;

const STORAGE_KEYS = [
  ...TRACKING_PARAMS,
  "landing_url",
  "landing_time",
  "latest_url",
  "latest_seen_at",
  "anonymous_session_id",
] as const;

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 90;
const DEDUPE_WINDOW_MS = 1500;

const isTrackingEnabled =
  process.env.NEXT_PUBLIC_LEAD_TRACKING_ENABLED?.toLowerCase() === "true";
const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL || "";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "";
const leadBrand = process.env.NEXT_PUBLIC_LEAD_BRAND || "";

const safeLocalStorageGet = (key: string) => {
  try {
    return window.localStorage.getItem(key) || "";
  } catch {
    return "";
  }
};

const setCookie = (key: string, value: string) => {
  try {
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
      value,
    )}; max-age=${COOKIE_MAX_AGE_SECONDS}; path=/; SameSite=Lax`;
  } catch {
    // Browsers can block cookies; localStorage remains the primary client store.
  }
};

const safeLocalStorageSet = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Private browsing or storage policies should never surface tracking errors.
  }
  setCookie(key, value);
};

const getStoredValue = (key: (typeof STORAGE_KEYS)[number]) =>
  safeLocalStorageGet(key);

const createShortRandom = () => {
  if (window.crypto?.getRandomValues) {
    const values = new Uint32Array(1);
    window.crypto.getRandomValues(values);
    return values[0].toString(36).slice(0, 6);
  }

  return Math.random().toString(36).slice(2, 8);
};

const createId = (prefix: "LEAD" | "EVT") =>
  `${prefix}-${Date.now()}-${createShortRandom()}`;

const ensureStoredAttribution = () => {
  const now = new Date().toISOString();
  const currentUrl = window.location.href;
  const searchParams = new URLSearchParams(window.location.search);

  TRACKING_PARAMS.forEach((param) => {
    const value = searchParams.get(param);
    if (value) safeLocalStorageSet(param, value);
  });

  if (!safeLocalStorageGet("landing_url")) {
    safeLocalStorageSet("landing_url", currentUrl);
  }

  if (!safeLocalStorageGet("landing_time")) {
    safeLocalStorageSet("landing_time", now);
  }

  safeLocalStorageSet("latest_url", currentUrl);
  safeLocalStorageSet("latest_seen_at", now);

  if (!safeLocalStorageGet("anonymous_session_id")) {
    safeLocalStorageSet(
      "anonymous_session_id",
      `anon-${Date.now()}-${createShortRandom()}`,
    );
  }
};

const normalizeForCategory = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const hasAnyTerm = (value: string, terms: string[]) =>
  terms.some((term) => value.includes(term));

const detectCategoryInText = (value: string) => {
  const normalized = normalizeForCategory(value);
  const hasHeladera = hasAnyTerm(normalized, [
    "heladera",
    "heladeras",
    "refrigerador",
    "refrigeradores",
    "freezer",
    "frigorifico",
  ]);
  const hasLavarropas = hasAnyTerm(normalized, [
    "lavarropas",
    "lavarropa",
    "lavadora",
    "lavadoras",
    "lavado",
  ]);

  if (hasHeladera && !hasLavarropas) return "heladera";
  if (hasLavarropas && !hasHeladera) return "lavarropas";
  return "";
};

const getClosestAttribute = (element: Element, attribute: string) => {
  const holder = element.closest(`[${attribute}]`);
  return holder?.getAttribute(attribute) || "";
};

const safeDecodeURIComponent = (value: string) => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

const inferCategory = (element: Element, extraContext = "") => {
  const manualCategory = getClosestAttribute(element, "data-lead-category");
  if (manualCategory) return manualCategory;

  const closestContext =
    element.closest("section, article, main, header, footer, nav")?.textContent ||
    "";
  const sources = [
    safeDecodeURIComponent(window.location.pathname + window.location.search),
    element.textContent || "",
    closestContext,
    extraContext,
    document.title,
    window.location.href,
  ];

  for (const source of sources) {
    const category = detectCategoryInText(source);
    if (category) return category;
  }

  return "";
};

const isWhatsappUrl = (href: string) => {
  const normalizedHref = href.toLowerCase();
  if (normalizedHref.startsWith("whatsapp://")) return true;

  try {
    const url = new URL(href, window.location.href);
    const hostname = url.hostname.toLowerCase();
    return (
      hostname === "wa.me" ||
      hostname.endsWith(".wa.me") ||
      hostname === "api.whatsapp.com"
    );
  } catch {
    return normalizedHref.includes("wa.me") || normalizedHref.includes("api.whatsapp.com");
  }
};

const getLeadTarget = (element: Element) => {
  const manualAction = getClosestAttribute(element, "data-lead-action");
  const anchor = element.closest("a[href]") as HTMLAnchorElement | null;
  const href = anchor?.href || getClosestAttribute(element, "data-lead-clicked-to");
  const classElement = element.closest(
    ".js-track-whatsapp, .js-track-call, .js-track-maps, .js-track-instagram",
  );

  if (manualAction === "whatsapp" || isWhatsappUrl(href)) {
    return { action: "whatsapp" as const, clickedTo: href };
  }

  if (manualAction === "phone" || href.toLowerCase().startsWith("tel:")) {
    return { action: "phone" as const, clickedTo: href };
  }

  if (manualAction === "maps" || classElement?.classList.contains("js-track-maps")) {
    return { action: "maps" as const, clickedTo: href };
  }

  if (
    manualAction === "instagram" ||
    classElement?.classList.contains("js-track-instagram")
  ) {
    return { action: "instagram" as const, clickedTo: href };
  }

  if (classElement?.classList.contains("js-track-whatsapp")) {
    return { action: "whatsapp" as const, clickedTo: href };
  }

  if (classElement?.classList.contains("js-track-call")) {
    return { action: "phone" as const, clickedTo: href };
  }

  return null;
};

const getLeadLabel = (element: Element, fallbackLabel = "") =>
  fallbackLabel ||
  getClosestAttribute(element, "data-lead-label") ||
  getClosestAttribute(element, "data-track-label");

const buildPayload = (
  action: LeadAction,
  element: Element,
  clickedTo: string,
  options: Pick<
    TrackOfflineLeadOptions,
    | "formName"
    | "formPhone"
    | "formProblem"
    | "leadLabel"
    | "categoria"
    | "categoryContext"
  > = {},
): LeadPayload & Record<string, string | number> => {
  const createdAt = new Date().toISOString();
  const statusMap: Record<LeadAction, LeadPayload["status"]> = {
    whatsapp: "clicked_whatsapp",
    phone: "clicked_phone",
    maps: "clicked_maps",
    instagram: "clicked_instagram",
  };

  return {
    lead_id: createId("LEAD"),
    event_id: createId("EVT"),
    created_at: createdAt,
    site: siteName,
    action_type: action,
    status: statusMap[action],
    gclid: getStoredValue("gclid"),
    gbraid: getStoredValue("gbraid"),
    wbraid: getStoredValue("wbraid"),
    landing_url: getStoredValue("landing_url"),
    landing_time: getStoredValue("landing_time"),
    latest_url: getStoredValue("latest_url"),
    latest_seen_at: getStoredValue("latest_seen_at"),
    current_url: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
    categoria:
      options.categoria || inferCategory(element, options.categoryContext),
    marca: leadBrand,
    lead_label: getLeadLabel(element, options.leadLabel),
    form_name: options.formName || "",
    form_phone: options.formPhone || "",
    form_problem: options.formProblem || "",
    utm_source: getStoredValue("utm_source"),
    utm_medium: getStoredValue("utm_medium"),
    utm_campaign: getStoredValue("utm_campaign"),
    utm_adgroup: getStoredValue("utm_adgroup"),
    utm_term: getStoredValue("utm_term"),
    device: getStoredValue("device"),
    matchtype: getStoredValue("matchtype"),
    network: getStoredValue("network"),
    clicked_to: clickedTo,
    referrer: document.referrer,
    user_agent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    screen_width: window.screen.width,
    screen_height: window.screen.height,
    anonymous_session_id: getStoredValue("anonymous_session_id"),
  };
};

const sendLead = (payload: LeadPayload) => {
  const body = JSON.stringify(payload);

  try {
    if (navigator.sendBeacon) {
      const sent = navigator.sendBeacon(
        webhookUrl,
        new Blob([body], { type: "application/json" }),
      );
      if (sent) return;
    }

    void fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    // Lead tracking must never block contact actions or show visible errors.
  }
};

export const trackOfflineLead = (
  action: LeadAction,
  options: TrackOfflineLeadOptions = {},
) => {
  if (typeof window === "undefined" || !isTrackingEnabled || !webhookUrl) return;

  ensureStoredAttribution();

  const element = options.element ?? document.documentElement;
  sendLead(
    buildPayload(action, element, options.clickedTo || "", {
      leadLabel: options.leadLabel,
      categoria: options.categoria,
      categoryContext: options.categoryContext,
      formName: options.formName,
      formPhone: options.formPhone,
      formProblem: options.formProblem,
    }),
  );
};

const LeadTracking = () => {
  const dedupeRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    if (!isTrackingEnabled || !webhookUrl) return;

    ensureStoredAttribution();

    const handleContactIntent = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const leadTarget = getLeadTarget(target);
      if (!leadTarget) return;

      const key = `${leadTarget.action}|${leadTarget.clickedTo}|${window.location.pathname}`;
      const now = Date.now();
      const lastSeen = dedupeRef.current.get(key);
      if (lastSeen && now - lastSeen < DEDUPE_WINDOW_MS) return;

      dedupeRef.current.set(key, now);
      sendLead(buildPayload(leadTarget.action, target, leadTarget.clickedTo));
    };

    const options: AddEventListenerOptions = { capture: true, passive: true };
    document.addEventListener("pointerdown", handleContactIntent, options);
    document.addEventListener("click", handleContactIntent, options);

    return () => {
      document.removeEventListener("pointerdown", handleContactIntent, options);
      document.removeEventListener("click", handleContactIntent, options);
    };
  }, []);

  return null;
};

export default LeadTracking;

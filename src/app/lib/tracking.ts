export type ConversionType = "call" | "whatsapp" | "maps" | "instagram";

export type AdsConversionPayload = {
  event: "ads_conversion";
  conversionType: ConversionType;
  label: string;
  href?: string;
  page_path: string;
  page_url: string;
  ts: number;
} & Record<string, unknown>;

type PushMeta = Partial<Pick<AdsConversionPayload, "href">> & Record<string, unknown>;

export const pushAdsConversion = (type: ConversionType, label: string, meta: PushMeta = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const payload: AdsConversionPayload = {
    event: "ads_conversion",
    conversionType: type,
    label,
    href: typeof meta.href === "string" ? meta.href : undefined,
    page_path: window.location.pathname,
    page_url: window.location.href,
    ts: Date.now(),
    ...meta,
  };
  window.dataLayer.push(payload);
};

export const VALID_WPP_NUMBERS = ["5491136299090", "5491144469930", "5491141879748", "5491136786082"] as const;
export type WhatsAppNumber = (typeof VALID_WPP_NUMBERS)[number];

export const getWhatsAppNumber = (): WhatsAppNumber => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Argentina/Buenos_Aires",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");

  const isWeekend = weekday === "Sat" || weekday === "Sun";

  if (isWeekend) {
    return "5491144469930";
  }

  return hour >= 8 && hour < 17 ? "5491144469930" : "5491144469930";
};

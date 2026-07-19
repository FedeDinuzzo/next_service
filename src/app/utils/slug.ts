// Normalización compartida de nombres de localidad → slug.
// separator "_" reproduce el formato de tracking ya usado en Zones.tsx (data-track-label).
// separator "-" es el usado en las URLs nuevas (/zonas/[slug]).

const normalize = (value: string, separator: "_" | "-") => {
  const trim = new RegExp(`^\\${separator}+|\\${separator}+$`, "g");

  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, separator)
    .replace(trim, "");
};

export const toSlug = (value: string) => normalize(value, "_");
export const toSlugUrl = (value: string) => normalize(value, "-");

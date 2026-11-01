const INVALID_LITERALS = new Set(["", "undefined", "null", "NaN"]);

export function isUsableJsonLdText(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const text = value.trim();
  return text.length > 0 && !INVALID_LITERALS.has(text);
}

export function isUsableAbsoluteUrl(value: unknown): value is string {
  if (!isUsableJsonLdText(value)) return false;
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      !value.includes("undefined") &&
      !value.includes("//https")
    );
  } catch {
    return false;
  }
}

export function pruneJsonLd(value: unknown): unknown {
  if (value === undefined || value === null) return undefined;
  if (typeof value === "string")
    return isUsableJsonLdText(value) ? value : undefined;
  if (typeof value === "number" || typeof value === "boolean") return value;
  if (Array.isArray(value)) {
    const items = value.map(pruneJsonLd).filter((item) => item !== undefined);
    return items.length > 0 ? items : undefined;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .map(([key, item]) => [key, pruneJsonLd(item)] as const)
      .filter(([, item]) => item !== undefined);
    if (entries.length === 0) return undefined;
    return Object.fromEntries(entries);
  }
  return undefined;
}

export type BreadcrumbCrumb = {
  name?: unknown;
  item?: unknown;
};

export function breadcrumbListSchema(crumbs: BreadcrumbCrumb[]) {
  const itemListElement = crumbs
    .map((crumb) => {
      const name = typeof crumb.name === "string" ? crumb.name.trim() : "";
      const item = typeof crumb.item === "string" ? crumb.item.trim() : "";
      if (!isUsableJsonLdText(name) || !isUsableAbsoluteUrl(item))
        return undefined;
      return {
        "@type": "ListItem",
        name,
        item: {
          "@type": "WebPage",
          "@id": item,
          name,
        },
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .map((item, index) => ({ ...item, position: index + 1 }));

  if (itemListElement.length === 0) return undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

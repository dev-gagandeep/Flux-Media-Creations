/**
 * Serializes structured data for an inline JSON-LD script without allowing
 * user-controlled strings to terminate the script element.
 */
function normalizeSchema(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(normalizeSchema);
  }

  if (!value || typeof value !== "object") {
    return value;
  }

  const schema = Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([key, child]) => [
      key,
      normalizeSchema(child),
    ]),
  );
  const types = Array.isArray(schema["@type"]) ? schema["@type"] : [schema["@type"]];

  if (types.includes("LocalBusiness")) {
    if (!schema.address) {
      schema.address = {
        "@type": "PostalAddress",
        addressLocality: "Garhshankar",
        addressRegion: "Punjab",
        addressCountry: "IN",
      };
    }

    // serviceType belongs on Service, not LocalBusiness.
    delete schema.serviceType;
  }

  if (
    types.includes("ListItem") &&
    !schema.item &&
    !schema.url &&
    typeof schema.name === "string"
  ) {
    schema.item = {
      "@type": "Thing",
      name: schema.name,
    };
  }

  return schema;
}

export function safeJsonLd(value: unknown): string {
  return JSON.stringify(normalizeSchema(value))
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

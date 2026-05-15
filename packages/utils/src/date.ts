const ID_LOCALE = "id-ID";

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(ID_LOCALE, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString(ID_LOCALE, {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

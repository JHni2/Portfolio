export function parseDate(date: string) {
  const d = new Date(date);

  return d.toLocaleString().slice(0, -3);
}

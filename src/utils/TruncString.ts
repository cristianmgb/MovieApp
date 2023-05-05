/**
 *
 * @param text string to truncate
 * @param lon size of the caracter to truncate
 * @returns string truncated
 */
export function trunc(text: string, lon = 13): string {
  return text.length > lon ? `${text.substring(0, lon)}...` : text;
}

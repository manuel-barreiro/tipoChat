export function formatText(text, maxChars) {
  if (text.length > maxChars) {
    return text.substring(0, maxChars) + "..."
  }
  return text
}

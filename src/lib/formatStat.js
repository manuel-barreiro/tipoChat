export function formatStat(number) {
  if (number >= 1000) {
    const thousands = number / 1000
    return `${Number.isInteger(thousands) ? thousands : thousands.toFixed(1)}K`
  }
  return number.toString()
}

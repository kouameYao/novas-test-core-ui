/**
 * Parse a formatted amount string and convert it to a number
 * Removes spaces and handles empty/invalid values
 *
 * @param amount - The formatted amount string (e.g., "1 000", "1000", "")
 * @param defaultValue - The default value to return if parsing fails (default: 0)
 * @returns The parsed number value
 *
 * @example
 * parseAmount("1 000") // returns 1000
 * parseAmount("1000") // returns 1000
 * parseAmount("") // returns 0
 * parseAmount(undefined) // returns 0
 * parseAmount("invalid", 100) // returns 100
 */
export function parseAmount(
  amount: string | undefined | null,
  defaultValue: number = 0
): number {
  if (!amount) {
    return defaultValue;
  }

  // Remove all spaces from the amount string
  const cleanedAmount = amount.replace(/\s/g, '');

  // Parse the cleaned string to a float
  const parsed = parseFloat(cleanedAmount);

  // Return the parsed value or default if NaN
  return isNaN(parsed) ? defaultValue : parsed;
}

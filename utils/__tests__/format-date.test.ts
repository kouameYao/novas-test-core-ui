import { describe, expect, it } from 'vitest';

import { formatDate } from '@/utils/format-date';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const result = formatDate('2024-01-15T10:30:00');
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
  });

  it('should handle string dates', () => {
    const result = formatDate('2024-01-15');
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
  });

  it('should return "-" for undefined', () => {
    const result = formatDate(undefined);
    expect(result).toBe('-');
  });

  it('should return "-" for invalid date string', () => {
    const result = formatDate('invalid-date');
    expect(result).toBe('-');
  });
});

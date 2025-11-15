import { describe, expect, it } from 'vitest';

import { formatNumber } from '@/utils/format-number';

describe('formatNumber', () => {
  it('should format number correctly', () => {
    const result = formatNumber(1000);
    expect(result).toBe('1\u202f000'); // Narrow no-break space used by Intl.NumberFormat
  });

  it('should handle zero', () => {
    const result = formatNumber(0);
    expect(result).toBe('0');
  });

  it('should handle negative numbers', () => {
    const result = formatNumber(-1000);
    expect(result).toBe('-1\u202f000'); // Narrow no-break space used by Intl.NumberFormat
  });

  it('should handle string numbers', () => {
    const result = formatNumber('5000');
    expect(result).toBe('5\u202f000'); // Narrow no-break space used by Intl.NumberFormat
  });

  it('should handle decimal numbers', () => {
    const result = formatNumber(1234.56);
    expect(result).toBe('1\u202f234,56');
  });
});

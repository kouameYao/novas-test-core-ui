import { describe, it, expect } from 'vitest';

import { parseAmount } from '../parse-amount';

describe('parseAmount', () => {
  it('should parse formatted amount with spaces', () => {
    expect(parseAmount('1 000')).toBe(1000);
    expect(parseAmount('10 000')).toBe(10000);
    expect(parseAmount('100 000')).toBe(100000);
    expect(parseAmount('1 000 000')).toBe(1000000);
  });

  it('should parse amount without spaces', () => {
    expect(parseAmount('1000')).toBe(1000);
    expect(parseAmount('10000')).toBe(10000);
    expect(parseAmount('100000')).toBe(100000);
  });

  it('should parse decimal amounts', () => {
    expect(parseAmount('1000.50')).toBe(1000.5);
    expect(parseAmount('1 000.50')).toBe(1000.5);
    expect(parseAmount('10 000.99')).toBe(10000.99);
  });

  it('should return default value for empty string', () => {
    expect(parseAmount('')).toBe(0);
    expect(parseAmount('', 100)).toBe(100);
  });

  it('should return default value for undefined', () => {
    expect(parseAmount(undefined)).toBe(0);
    expect(parseAmount(undefined, 200)).toBe(200);
  });

  it('should return default value for null', () => {
    expect(parseAmount(null)).toBe(0);
    expect(parseAmount(null, 300)).toBe(300);
  });

  it('should return default value for invalid input', () => {
    expect(parseAmount('invalid')).toBe(0);
    expect(parseAmount('invalid', 500)).toBe(500);
    expect(parseAmount('abc123')).toBe(0);
  });

  it('should handle edge cases', () => {
    expect(parseAmount('0')).toBe(0);
    expect(parseAmount('   ')).toBe(0);
    expect(parseAmount('0.0')).toBe(0);
    expect(parseAmount('   100   ')).toBe(100);
  });

  it('should handle negative numbers', () => {
    expect(parseAmount('-1000')).toBe(-1000);
    expect(parseAmount('-1 000')).toBe(-1000);
    expect(parseAmount('-10 000.50')).toBe(-10000.5);
  });
});

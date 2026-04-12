import { describe, expect, it } from 'vitest';
import { classNames } from './className';

describe('classNames', () => {
  it('joins valid class names with spaces', () => {
    expect(classNames('card', 'active', 'large')).toBe('card active large');
  });

  it('filters out falsey values', () => {
    expect(classNames('card', false, null, undefined, 'active')).toBe('card active');
  });

  it('returns empty string when no valid class names are provided', () => {
    expect(classNames(false, null, undefined)).toBe('');
  });
});

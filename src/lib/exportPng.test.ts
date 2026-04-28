import { describe, it, expect } from 'vitest';
import { POSTER_HEIGHT, POSTER_WIDTH } from '../brand';

describe('exportPng dimensions', () => {
  it('exports at 1080x1920', () => {
    expect(POSTER_WIDTH).toBe(1080);
    expect(POSTER_HEIGHT).toBe(1920);
  });
});

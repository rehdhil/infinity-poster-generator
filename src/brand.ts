import type { PosterKind } from './types';

/** Default vertical poster dimensions (WhatsApp Status / Instagram Story). */
export const POSTER_WIDTH = 1080;
export const POSTER_HEIGHT = 1920;

/** Per-template canvas dimensions. Square templates use 1080x1080. 4:5 vertical = 1080x1350. */
export const POSTER_DIMENSIONS: Record<PosterKind, { width: number; height: number }> = {
  'open-categories': { width: 1080, height: 1350 },
  'feature-online':  { width: 1080, height: 1350 },
  'power-team':      { width: 1080, height: 1350 },
  'networking':      { width: 1080, height: 1350 },
  'education':       { width: 1080, height: 1350 },
  'event-general':   { width: 1080, height: 1350 },
  'event-speaker':   { width: 1080, height: 1080 },
  'theme':           { width: 1080, height: 1080 },
};

export const COLORS = {
  red: '#CF2030',
  black: '#0A0A0A',
  gold: '#D4A437',
  white: '#FFFFFF',
} as const;

export const GRADIENT_BG =
  'radial-gradient(circle at top left, #1a0a0c 0%, #0A0A0A 55%, #000000 100%)';

export const ACCENT_GLOW =
  'radial-gradient(circle at 80% 110%, rgba(207,32,48,0.45) 0%, rgba(207,32,48,0) 60%)';

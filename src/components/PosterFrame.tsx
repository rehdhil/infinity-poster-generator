import { forwardRef, type ReactNode } from 'react';
import { POSTER_HEIGHT, POSTER_WIDTH, GRADIENT_BG, ACCENT_GLOW } from '../brand';

type Props = {
  children: ReactNode;
  /** Visible CSS scale for preview. The export node keeps real 1080×1920 dimensions. */
  previewScale?: number;
};

export const PosterFrame = forwardRef<HTMLDivElement, Props>(
  ({ children, previewScale = 0.4 }, ref) => {
    return (
      <div
        style={{
          width: POSTER_WIDTH * previewScale,
          height: POSTER_HEIGHT * previewScale,
        }}
        className="relative overflow-hidden rounded-2xl shadow-2xl"
      >
        <div
          ref={ref}
          style={{
            width: POSTER_WIDTH,
            height: POSTER_HEIGHT,
            background: GRADIENT_BG,
            transform: `scale(${previewScale})`,
            transformOrigin: 'top left',
          }}
          className="relative font-body text-white"
        >
          <div
            style={{ background: ACCENT_GLOW }}
            className="pointer-events-none absolute inset-0"
          />
          <div className="relative h-full w-full">{children}</div>
        </div>
      </div>
    );
  },
);
PosterFrame.displayName = 'PosterFrame';

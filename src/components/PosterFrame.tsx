import { forwardRef, type ReactNode } from 'react';
import { POSTER_HEIGHT, POSTER_WIDTH, GRADIENT_BG, ACCENT_GLOW } from '../brand';

type Props = {
  children: ReactNode;
  /** Visible CSS scale for preview. The export node keeps real pixel dimensions. */
  previewScale?: number;
  /** Canvas width in real pixels. Defaults to vertical poster width. */
  width?: number;
  /** Canvas height in real pixels. Defaults to vertical poster height. */
  height?: number;
};

export const PosterFrame = forwardRef<HTMLDivElement, Props>(
  ({ children, previewScale = 0.4, width = POSTER_WIDTH, height = POSTER_HEIGHT }, ref) => {
    return (
      <div
        style={{
          width: width * previewScale,
          height: height * previewScale,
        }}
        className="relative overflow-hidden rounded-2xl shadow-2xl"
      >
        <div
          ref={ref}
          style={{
            width,
            height,
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

import { forwardRef, useEffect, useRef, useState, type ReactNode } from 'react';
import { POSTER_HEIGHT, POSTER_WIDTH, GRADIENT_BG, ACCENT_GLOW } from '../brand';

type Props = {
  children: ReactNode;
  /** Canvas width in real pixels. Defaults to vertical poster width. */
  width?: number;
  /** Canvas height in real pixels. Defaults to vertical poster height. */
  height?: number;
  /** Cap on visible width in CSS px. Below this width the preview shrinks to fit container. */
  maxPreviewWidth?: number;
};

/**
 * Renders the export-target node at real pixel dimensions, scaled down for preview.
 * The preview width auto-fits to the parent container, capped at maxPreviewWidth,
 * so it works on any screen from 320px phones up to desktops without overflowing.
 */
export const PosterFrame = forwardRef<HTMLDivElement, Props>(
  ({ children, width = POSTER_WIDTH, height = POSTER_HEIGHT, maxPreviewWidth = 432 }, ref) => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const [previewWidth, setPreviewWidth] = useState<number>(maxPreviewWidth);

    useEffect(() => {
      const el = wrapRef.current?.parentElement;
      if (!el) return;
      const measure = () => {
        const cw = el.clientWidth;
        // Leave a 16px gutter so the rounded shadow has breathing room
        setPreviewWidth(Math.max(160, Math.min(cw - 16, maxPreviewWidth)));
      };
      measure();
      const observer = new ResizeObserver(measure);
      observer.observe(el);
      return () => observer.disconnect();
    }, [maxPreviewWidth]);

    const scale = previewWidth / width;

    return (
      <div
        ref={wrapRef}
        style={{
          width: previewWidth,
          height: height * scale,
        }}
        className="relative overflow-hidden rounded-2xl shadow-2xl"
      >
        <div
          ref={ref}
          style={{
            width,
            height,
            background: GRADIENT_BG,
            transform: `scale(${scale})`,
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

import type { ReactNode } from 'react';

type Props = {
  meetingDate?: string;
  /** Slot for extended footer content (e.g. coordinator block). */
  children?: ReactNode;
};

export function PosterFooter({ meetingDate, children }: Props) {
  return (
    <footer className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      {children && <div className="px-12 py-6">{children}</div>}
      <div className="flex items-center justify-between px-12 py-5">
        <div className="font-display text-2xl tracking-[0.3em] text-white">
          BNI INFINITY • COCHIN
        </div>
        <div className="text-base text-white/70">{meetingDate}</div>
      </div>
    </footer>
  );
}

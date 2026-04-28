import { useState } from 'react';
import { exportPosterPng } from '../lib/exportPng';

type Props = {
  targetRef: React.RefObject<HTMLDivElement | null>;
  filename: string;
};

export function DownloadButton({ targetRef, filename }: Props) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      <button
        disabled={busy}
        onClick={async () => {
          if (!targetRef.current) return;
          setError(null);
          setBusy(true);
          try {
            await exportPosterPng(targetRef.current, filename);
          } catch (e) {
            console.error('Export failed:', e);
            let msg: string;
            if (e instanceof Error) {
              msg = e.message;
            } else if (e instanceof Event && e.target instanceof HTMLImageElement) {
              msg = `Image failed to load: ${e.target.src.slice(0, 80)}`;
            } else {
              msg = String(e);
            }
            setError(msg);
          } finally {
            setBusy(false);
          }
        }}
        className="w-full rounded-lg bg-bni-red px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {busy ? 'Rendering…' : 'Download PNG'}
      </button>
      {error && (
        <div className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-200">
          Export failed: {error}
        </div>
      )}
    </div>
  );
}

import { exportPosterPng } from '../lib/exportPng';

type Props = {
  targetRef: React.RefObject<HTMLDivElement | null>;
  filename: string;
};

export function DownloadButton({ targetRef, filename }: Props) {
  return (
    <button
      onClick={async () => {
        if (!targetRef.current) return;
        await exportPosterPng(targetRef.current, filename);
      }}
      className="rounded-lg bg-bni-red px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-90"
    >
      Download PNG
    </button>
  );
}

import { useEffect, useRef } from 'react';

type Props = {
  label: string;
  value: string;
  onChange: (blobUrl: string) => void;
};

export function HeadshotInput({ label, value, onChange }: Props) {
  const lastUrl = useRef(value);
  useEffect(() => {
    return () => {
      if (lastUrl.current && lastUrl.current.startsWith('blob:')) {
        URL.revokeObjectURL(lastUrl.current);
      }
    };
  }, []);

  return (
    <label className="flex items-center gap-3 text-sm">
      <span className="w-32 shrink-0 text-white/70">{label}</span>
      <input
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="block w-full text-sm text-white/80 file:mr-3 file:rounded file:border-0 file:bg-bni-red file:px-3 file:py-1.5 file:text-white"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          if (lastUrl.current.startsWith('blob:')) {
            URL.revokeObjectURL(lastUrl.current);
          }
          const url = URL.createObjectURL(file);
          lastUrl.current = url;
          onChange(url);
        }}
      />
    </label>
  );
}

import { useEffect, useRef, useState } from 'react';

type Props = {
  label: string;
  value: string;
  onChange: (blobUrl: string) => void;
};

export function HeadshotInput({ label, value, onChange }: Props) {
  const lastUrl = useRef(value);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    return () => {
      if (lastUrl.current && lastUrl.current.startsWith('blob:')) {
        URL.revokeObjectURL(lastUrl.current);
      }
    };
  }, []);

  const ingest = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    if (lastUrl.current.startsWith('blob:')) {
      URL.revokeObjectURL(lastUrl.current);
    }
    const url = URL.createObjectURL(file);
    lastUrl.current = url;
    onChange(url);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (const item of Array.from(items)) {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) {
          ingest(file);
          e.preventDefault();
          return;
        }
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) ingest(file);
  };

  return (
    <div className="space-y-1">
      <div className="text-sm text-white/70">{label}</div>
      <div
        ref={zoneRef}
        tabIndex={0}
        onPaste={handlePaste}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onClick={() => zoneRef.current?.focus()}
        onDragOver={(e) => {
          e.preventDefault();
          if (!dragOver) setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={
          'relative flex items-center gap-3 rounded-md border-2 border-dashed p-3 outline-none transition cursor-pointer select-none ' +
          (dragOver
            ? 'border-bni-red bg-bni-red/15'
            : focused
              ? 'border-bni-red bg-bni-red/5'
              : 'border-white/15 bg-white/5 hover:border-white/30')
        }
      >
        {value ? (
          <img
            src={value}
            alt=""
            className="h-12 w-12 rounded-full object-cover border-2 border-bni-red shrink-0"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-neutral-800 grid place-items-center text-white/40 text-[10px] font-semibold shrink-0">
            IMG
          </div>
        )}

        <div className="flex-1 text-xs leading-snug text-white/65">
          {dragOver ? (
            <span className="text-white/95 font-medium">Drop to upload</span>
          ) : focused ? (
            <span className="text-white/90">
              Press <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-[10px] text-white">⌘V</kbd> to paste · or drop a file here
            </span>
          ) : value ? (
            <span>Click to focus, then paste / drop a new image — or use Choose file</span>
          ) : (
            <span>Click to focus then paste, drop a file, or pick one →</span>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className="shrink-0 rounded border border-white/20 px-2 py-1 text-xs text-white/85 hover:border-bni-red hover:text-white"
        >
          Choose file
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) ingest(file);
            e.target.value = '';
          }}
        />
      </div>
    </div>
  );
}

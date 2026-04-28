import { useEffect, useRef, useState } from 'react';
import { searchMembers } from '../data/members';
import type { ChapterMember } from '../types';

type Props = {
  onSelect: (m: ChapterMember) => void;
  placeholder?: string;
};

export function MemberSelect({ onSelect, placeholder = 'Type to search members…' }: Props) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const results = searchMembers(q);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div ref={wrap} className="relative">
      <input
        className="form-input"
        value={q}
        placeholder={placeholder}
        onChange={(e) => { setQ(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
      />
      {open && results.length > 0 && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-white/15 bg-neutral-900 shadow-xl">
          {results.map((m) => (
            <li
              key={m.name}
              className="cursor-pointer px-3 py-2 text-sm hover:bg-bni-red/20"
              onMouseDown={() => {
                onSelect(m);
                setQ('');
                setOpen(false);
              }}
            >
              <div className="font-semibold">{m.name}</div>
              <div className="text-xs text-white/60">
                {m.business} · {m.category}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

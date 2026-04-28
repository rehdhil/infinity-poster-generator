import type { PosterKind } from '../types';

const TEMPLATES: { kind: PosterKind; label: string }[] = [
  { kind: 'open-categories', label: 'Open Categories' },
  { kind: 'feature-online', label: 'Feature — Online' },
  { kind: 'power-team', label: 'Power Team Spotlight' },
  { kind: 'networking', label: 'Networking Topic' },
  { kind: 'education', label: 'Education Slot' },
  { kind: 'event-general', label: 'Event — General' },
  { kind: 'event-speaker', label: 'Event — Speaker' },
];

type Props = {
  active: PosterKind;
  onChange: (kind: PosterKind) => void;
};

export function TemplatePicker({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {TEMPLATES.map((t) => (
        <button
          key={t.kind}
          onClick={() => onChange(t.kind)}
          className={
            'rounded-md border px-3 py-1.5 text-sm font-medium transition ' +
            (active === t.kind
              ? 'border-bni-red bg-bni-red text-white'
              : 'border-white/15 bg-white/5 text-white/80 hover:border-white/40')
          }
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

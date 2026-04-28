import type { EventGeneralData } from '../../types';
import { HeadshotInput } from '../HeadshotInput';

type Props = {
  data: EventGeneralData;
  onChange: (next: EventGeneralData) => void;
};

const CATEGORIES = ['CHAPTER EVENT', 'FELLOWSHIP', 'MSP NIGHT', 'SPORTS MEET', 'TRAINING', 'ANNIVERSARY'];

export function EventGeneralForm({ data, onChange }: Props) {
  const set = <K extends keyof EventGeneralData>(k: K, v: EventGeneralData[K]) =>
    onChange({ ...data, [k]: v });

  return (
    <div className="space-y-4">
      <Field label="Event type">
        <select className="form-input" value={data.categoryLabel}
          onChange={(e) => set('categoryLabel', e.target.value)}>
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </Field>
      <input className="form-input" placeholder="Event title"
        value={data.title} onChange={(e) => set('title', e.target.value)} />
      <input className="form-input" placeholder="Date (e.g. SAT 17 MAY 2026)"
        value={data.date} onChange={(e) => set('date', e.target.value)} />
      <input className="form-input" placeholder="Time (e.g. 7:00 PM)"
        value={data.time} onChange={(e) => set('time', e.target.value)} />
      <input className="form-input" placeholder="Venue"
        value={data.venue} onChange={(e) => set('venue', e.target.value)} />
      <textarea className="form-input min-h-[80px]" placeholder="Description"
        value={data.description} onChange={(e) => set('description', e.target.value)} />
      <HeadshotInput
        label="Venue image"
        value={data.venueImageUrl ?? ''}
        onChange={(url) => set('venueImageUrl', url)}
      />
      <p className="text-xs text-white/50 -mt-2">Optional — leave empty for text-only event poster.</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-white/70">{label}</span>
      {children}
    </label>
  );
}

import type { EventSpeakerData } from '../../types';
import { HeadshotInput } from '../HeadshotInput';

type Props = {
  data: EventSpeakerData;
  onChange: (next: EventSpeakerData) => void;
};

const TYPES = ['GUEST SPEAKER', 'TRAINING SESSION', 'WORKSHOP', 'KNOWLEDGE SESSION'];

export function EventSpeakerForm({ data, onChange }: Props) {
  const set = <K extends keyof EventSpeakerData>(k: K, v: EventSpeakerData[K]) =>
    onChange({ ...data, [k]: v });

  return (
    <div className="space-y-4">
      <Field label="Event type">
        <select className="form-input" value={data.eventTypeLabel}
          onChange={(e) => set('eventTypeLabel', e.target.value)}>
          {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>
      <HeadshotInput label="Headshot" value={data.headshotUrl}
        onChange={(url) => set('headshotUrl', url)} />
      <input className="form-input" placeholder="Speaker name"
        value={data.speakerName} onChange={(e) => set('speakerName', e.target.value)} />
      <input className="form-input" placeholder="Designation"
        value={data.designation} onChange={(e) => set('designation', e.target.value)} />
      <input className="form-input" placeholder="Talk title"
        value={data.talkTitle} onChange={(e) => set('talkTitle', e.target.value)} />
      <input className="form-input" placeholder="Date"
        value={data.date} onChange={(e) => set('date', e.target.value)} />
      <input className="form-input" placeholder="Time"
        value={data.time} onChange={(e) => set('time', e.target.value)} />
      <input className="form-input" placeholder="Venue"
        value={data.venue} onChange={(e) => set('venue', e.target.value)} />
      <HeadshotInput label="Venue image" value={data.venueImageUrl ?? ''}
        onChange={(url) => set('venueImageUrl', url)} />
      <p className="text-xs text-white/50 -mt-2">Optional — leave empty for text-only.</p>
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

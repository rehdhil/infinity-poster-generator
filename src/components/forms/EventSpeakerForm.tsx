import type { EventSpeakerData, EventSpeakerProfile } from '../../types';
import { HeadshotInput } from '../HeadshotInput';

type Props = {
  data: EventSpeakerData;
  onChange: (next: EventSpeakerData) => void;
};

const TYPES = ['GUEST SPEAKER', 'TRAINING SESSION', 'WORKSHOP', 'KNOWLEDGE SESSION'];

export function EventSpeakerForm({ data, onChange }: Props) {
  const set = <K extends keyof EventSpeakerData>(k: K, v: EventSpeakerData[K]) =>
    onChange({ ...data, [k]: v });

  const setSpeakerOne = (s: EventSpeakerProfile) => onChange({ ...data, speakerOne: s });
  const setSpeakerTwo = (s: EventSpeakerProfile) => onChange({ ...data, speakerTwo: s });
  const addSpeakerTwo = () =>
    onChange({ ...data, speakerTwo: { name: '', designation: '', headshotUrl: '' } });
  const removeSpeakerTwo = () => onChange({ ...data, speakerTwo: undefined });

  return (
    <div className="space-y-4">
      <Field label="Event type">
        <select className="form-input" value={data.eventTypeLabel}
          onChange={(e) => set('eventTypeLabel', e.target.value)}>
          {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>

      <SpeakerFields title="Speaker 1" value={data.speakerOne} onChange={setSpeakerOne} />

      {data.speakerTwo ? (
        <SpeakerFields
          title="Speaker 2"
          value={data.speakerTwo}
          onChange={setSpeakerTwo}
          onRemove={removeSpeakerTwo}
        />
      ) : (
        <button
          type="button"
          onClick={addSpeakerTwo}
          className="w-full rounded-md border border-dashed border-white/25 py-2 text-sm text-white/80 hover:border-bni-red hover:text-white"
        >
          + Add second speaker
        </button>
      )}

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

function SpeakerFields({
  title,
  value,
  onChange,
  onRemove,
}: {
  title: string;
  value: EventSpeakerProfile;
  onChange: (next: EventSpeakerProfile) => void;
  onRemove?: () => void;
}) {
  return (
    <fieldset className="rounded-lg border border-white/10 p-3 space-y-2">
      <legend className="px-2 text-sm font-semibold text-bni-gold flex items-center gap-3">
        <span>{title}</span>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-xs font-normal text-white/60 hover:text-bni-red"
          >
            Remove
          </button>
        )}
      </legend>
      <HeadshotInput label="Headshot" value={value.headshotUrl}
        onChange={(headshotUrl) => onChange({ ...value, headshotUrl })} />
      <input className="form-input" placeholder="Speaker name" value={value.name}
        onChange={(e) => onChange({ ...value, name: e.target.value })} />
      <input className="form-input" placeholder="Designation" value={value.designation}
        onChange={(e) => onChange({ ...value, designation: e.target.value })} />
    </fieldset>
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

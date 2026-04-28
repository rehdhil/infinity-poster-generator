import type { FeatureOnlineData, SpeakerProfile } from '../../types';
import { HeadshotInput } from '../HeadshotInput';
import { MemberSelect } from '../MemberSelect';

type Props = {
  data: FeatureOnlineData;
  onChange: (next: FeatureOnlineData) => void;
};

export function FeatureOnlineForm({ data, onChange }: Props) {
  const setSpeaker = (key: 'speakerOne' | 'speakerTwo', s: SpeakerProfile) =>
    onChange({ ...data, [key]: s });

  return (
    <div className="space-y-4">
      <Field label="Meeting date">
        <input className="form-input" value={data.date}
          onChange={(e) => onChange({ ...data, date: e.target.value })}
          placeholder="e.g. 6 MAY 2026" />
      </Field>
      <Field label="Meeting time">
        <input className="form-input" value={data.time}
          onChange={(e) => onChange({ ...data, time: e.target.value })}
          placeholder="e.g. 7:30 AM" />
      </Field>

      <SpeakerFields title="Speaker 1" value={data.speakerOne}
        onChange={(s) => setSpeaker('speakerOne', s)} />
      <SpeakerFields title="Speaker 2" value={data.speakerTwo}
        onChange={(s) => setSpeaker('speakerTwo', s)} />
    </div>
  );
}

function SpeakerFields({
  title, value, onChange,
}: {
  title: string;
  value: SpeakerProfile;
  onChange: (next: SpeakerProfile) => void;
}) {
  return (
    <fieldset className="rounded-lg border border-white/10 p-3 space-y-2">
      <legend className="px-2 text-sm font-semibold text-bni-gold">{title}</legend>
      <MemberSelect
        placeholder="Auto-fill from chapter members…"
        onSelect={(m) => onChange({ ...value, name: m.name, business: m.business, category: m.category })}
      />
      <HeadshotInput label="Headshot" value={value.headshotUrl}
        onChange={(headshotUrl) => onChange({ ...value, headshotUrl })} />
      <input className="form-input" placeholder="Name" value={value.name}
        onChange={(e) => onChange({ ...value, name: e.target.value })} />
      <input className="form-input" placeholder="Business" value={value.business}
        onChange={(e) => onChange({ ...value, business: e.target.value })} />
      <input className="form-input" placeholder="Category" value={value.category}
        onChange={(e) => onChange({ ...value, category: e.target.value })} />
      <input className="form-input" placeholder="Topic"
        value={value.topic} onChange={(e) => onChange({ ...value, topic: e.target.value })} />
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

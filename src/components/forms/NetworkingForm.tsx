import type { NetworkingData, HostProfile } from '../../types';
import { HeadshotInput } from '../HeadshotInput';
import { MemberSelect } from '../MemberSelect';

type Props = {
  data: NetworkingData;
  onChange: (next: NetworkingData) => void;
};

export function NetworkingForm({ data, onChange }: Props) {
  const setHost = (key: 'hostOne' | 'hostTwo', h: HostProfile) =>
    onChange({ ...data, [key]: h });

  return (
    <div className="space-y-4">
      <Field label="Meeting date">
        <input className="form-input" value={data.date}
          onChange={(e) => onChange({ ...data, date: e.target.value })} />
      </Field>
      <Field label="Meeting time">
        <input className="form-input" value={data.time}
          onChange={(e) => onChange({ ...data, time: e.target.value })} placeholder="e.g. 7:30 AM" />
      </Field>
      <Field label="Topic">
        <input className="form-input" value={data.topic}
          onChange={(e) => onChange({ ...data, topic: e.target.value })} />
      </Field>
      <HostFields title="Host 1" value={data.hostOne}
        onChange={(h) => setHost('hostOne', h)} />
      <HostFields title="Host 2" value={data.hostTwo}
        onChange={(h) => setHost('hostTwo', h)} />
    </div>
  );
}

function HostFields({
  title, value, onChange,
}: {
  title: string;
  value: HostProfile;
  onChange: (next: HostProfile) => void;
}) {
  return (
    <fieldset className="rounded-lg border border-white/10 p-3 space-y-2">
      <legend className="px-2 text-sm font-semibold text-bni-gold">{title}</legend>
      <MemberSelect placeholder="Auto-fill from members…"
        onSelect={(m) => onChange({ ...value, name: m.name })} />
      <HeadshotInput label="Headshot" value={value.headshotUrl}
        onChange={(headshotUrl) => onChange({ ...value, headshotUrl })} />
      <input className="form-input" placeholder="Name" value={value.name}
        onChange={(e) => onChange({ ...value, name: e.target.value })} />
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

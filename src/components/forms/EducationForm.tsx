import type { EducationData } from '../../types';
import { HeadshotInput } from '../HeadshotInput';
import { MemberSelect } from '../MemberSelect';

type Props = {
  data: EducationData;
  onChange: (next: EducationData) => void;
};

export function EducationForm({ data, onChange }: Props) {
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
      <MemberSelect placeholder="Auto-fill speaker from members…"
        onSelect={(m) => onChange({ ...data, speakerName: m.name })} />
      <HeadshotInput label="Headshot" value={data.headshotUrl}
        onChange={(headshotUrl) => onChange({ ...data, headshotUrl })} />
      <input className="form-input" placeholder="Speaker name" value={data.speakerName}
        onChange={(e) => onChange({ ...data, speakerName: e.target.value })} />
      <input className="form-input" placeholder="Role" value={data.speakerRole}
        onChange={(e) => onChange({ ...data, speakerRole: e.target.value })} />
      <input className="form-input" placeholder="Topic" value={data.topic}
        onChange={(e) => onChange({ ...data, topic: e.target.value })} />
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

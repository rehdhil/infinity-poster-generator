import type { ThemeData } from '../../types';

type Props = {
  data: ThemeData;
  onChange: (next: ThemeData) => void;
};

export function ThemeForm({ data, onChange }: Props) {
  const set = <K extends keyof ThemeData>(k: K, v: ThemeData[K]) =>
    onChange({ ...data, [k]: v });

  return (
    <div className="space-y-4">
      <Field label="Meeting date">
        <input className="form-input" value={data.meetingDate}
          onChange={(e) => set('meetingDate', e.target.value)}
          placeholder="e.g. WED 6 MAY 2026" />
      </Field>
      <Field label="Meeting time">
        <input className="form-input" value={data.time}
          onChange={(e) => set('time', e.target.value)}
          placeholder="e.g. 7:30 AM" />
      </Field>

      <Field label="Theme">
        <textarea className="form-input min-h-[80px]" value={data.theme}
          onChange={(e) => set('theme', e.target.value)}
          placeholder="e.g. Share a recent client win in 30 seconds" />
      </Field>

      <Field label="Description (optional)">
        <textarea className="form-input min-h-[60px]" value={data.description}
          onChange={(e) => set('description', e.target.value)}
          placeholder="Brief instructions for members" />
      </Field>

      <Field label="Coordinator name">
        <input className="form-input" value={data.coordinatorName}
          onChange={(e) => set('coordinatorName', e.target.value)} />
      </Field>
      <Field label="Coordinator phone">
        <input className="form-input" value={data.coordinatorPhone}
          onChange={(e) => set('coordinatorPhone', e.target.value)} />
      </Field>
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

import type { OpenCategoriesData } from '../../types';

type Props = {
  data: OpenCategoriesData;
  onChange: (next: OpenCategoriesData) => void;
};

export function OpenCategoriesForm({ data, onChange }: Props) {
  const setCategory = (i: number, value: string) => {
    const next = [...data.categories];
    next[i] = value;
    onChange({ ...data, categories: next });
  };
  const set = <K extends keyof OpenCategoriesData>(k: K, v: OpenCategoriesData[K]) =>
    onChange({ ...data, [k]: v });

  return (
    <div className="space-y-4">
      <Field label="Meeting date">
        <input
          className="form-input"
          value={data.meetingDate}
          onChange={(e) => set('meetingDate', e.target.value)}
          placeholder="e.g. Wed 6 May 2026"
        />
      </Field>
      <Field label="Meeting time">
        <input
          className="form-input"
          value={data.time}
          onChange={(e) => set('time', e.target.value)}
          placeholder="e.g. 7:30 AM"
        />
      </Field>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-white/70">
          Open categories (12 slots)
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {data.categories.map((c, i) => (
            <input
              key={i}
              className="form-input"
              value={c}
              placeholder={`Category ${i + 1}`}
              onChange={(e) => setCategory(i, e.target.value)}
            />
          ))}
        </div>
      </fieldset>

      <Field label="Growth Coordinator name">
        <input className="form-input" value={data.growthCoordinatorName}
          onChange={(e) => set('growthCoordinatorName', e.target.value)} />
      </Field>
      <Field label="Growth Coordinator phone">
        <input className="form-input" value={data.growthCoordinatorPhone}
          onChange={(e) => set('growthCoordinatorPhone', e.target.value)} />
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

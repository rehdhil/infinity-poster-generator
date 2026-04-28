import type { PowerTeamData, TeamMember } from '../../types';
import { HeadshotInput } from '../HeadshotInput';
import { MemberSelect } from '../MemberSelect';

type Props = {
  data: PowerTeamData;
  onChange: (next: PowerTeamData) => void;
};

const TEAMS = ['CONSTRUCTION', 'SME', 'HNI', 'MARKETING', 'PROJECTS', 'HOSPITALITY'] as const;

export function PowerTeamForm({ data, onChange }: Props) {
  const setMember = (i: number, m: TeamMember) => {
    const next = [...data.members];
    next[i] = m;
    onChange({ ...data, members: next });
  };
  const addMember = () =>
    onChange({ ...data, members: [...data.members, { headshotUrl: '', name: '' }] });
  const removeMember = (i: number) => {
    const next = data.members.filter((_, idx) => idx !== i);
    onChange({ ...data, members: next.length ? next : [{ headshotUrl: '', name: '' }] });
  };

  return (
    <div className="space-y-4">
      <Field label="Meeting date">
        <input className="form-input" value={data.date}
          onChange={(e) => onChange({ ...data, date: e.target.value })} />
      </Field>
      <Field label="Meeting time">
        <input className="form-input" value={data.time}
          onChange={(e) => onChange({ ...data, time: e.target.value })}
          placeholder="e.g. 7:30 AM" />
      </Field>
      <Field label="Power team">
        <select className="form-input" value={data.teamName}
          onChange={(e) => onChange({ ...data, teamName: e.target.value })}>
          {TEAMS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-white/70">
          Members ({data.members.length})
        </legend>
        {data.members.map((m, i) => (
          <div key={i} className="rounded border border-white/10 p-2 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/50">Member {i + 1}</span>
              <button type="button"
                onClick={() => removeMember(i)}
                className="text-xs text-white/60 hover:text-bni-red">Remove</button>
            </div>
            <MemberSelect
              placeholder="Auto-fill from members…"
              onSelect={(found) => setMember(i, { ...m, name: found.name })}
            />
            <input className="form-input" placeholder="Name" value={m.name}
              onChange={(e) => setMember(i, { ...m, name: e.target.value })} />
            <HeadshotInput label="Headshot" value={m.headshotUrl}
              onChange={(headshotUrl) => setMember(i, { ...m, headshotUrl })} />
          </div>
        ))}
        <button type="button" onClick={addMember}
          className="w-full rounded-md border border-dashed border-white/25 py-2 text-sm text-white/80 hover:border-bni-red hover:text-white">
          + Add member
        </button>
      </fieldset>
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

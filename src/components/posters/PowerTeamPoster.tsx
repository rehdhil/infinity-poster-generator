import type { PowerTeamData, TeamMember } from '../../types';
import { PosterHeader } from '../shared/PosterHeader';
import { PosterFooter } from '../shared/PosterFooter';
import { Headshot } from '../shared/Headshot';

type Props = { data: PowerTeamData };

/** Headshot sizes tuned for 1080×1350 (4:5) canvas. */
function memberSize(count: number): number {
  if (count <= 4) return 280;
  if (count <= 6) return 220;
  if (count <= 9) return 180;
  return 150;
}

function isFilled(m: TeamMember): boolean {
  return m.name.trim() !== '' || m.headshotUrl !== '';
}

export function PowerTeamPoster({ data }: Props) {
  const filled = data.members.filter(isFilled);
  const size = memberSize(filled.length);
  const ringWidth = size >= 220 ? 6 : 4;

  return (
    <div className="flex h-full flex-col">
      <PosterHeader label="POWER TEAM SPOTLIGHT" />

      <div className="text-center font-display text-3xl tracking-[0.3em] text-bni-gold mb-4">
        THIS WEDNESDAY • {data.date || '[DATE]'}
      </div>

      <div className="mx-8 rounded-md bg-bni-red px-4 py-4 text-center">
        <div className="font-display text-5xl tracking-wider text-white leading-none">
          {data.teamName || '[TEAM]'} POWER TEAM
        </div>
        <div className="font-display text-2xl tracking-[0.5em] text-white/95 mt-1">
          PRESENTS
        </div>
      </div>

      {/* Hero: adaptive headshot grid */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 px-8 mt-8">
        {filled.map((m, i) => (
          <div key={i} className="flex flex-col items-center" style={{ width: size + 20 }}>
            <Headshot src={m.headshotUrl} size={size} ringWidth={ringWidth} />
            <div
              className="mt-2 text-center font-semibold leading-tight"
              style={{ fontSize: Math.max(14, Math.round(size * 0.11)) }}
            >
              {m.name || ''}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto mb-8 text-center font-display text-3xl tracking-[0.3em] text-bni-red">
        HOLIDAY INN COCHIN • {data.time}
      </div>

      <PosterFooter meetingDate={data.date} />
    </div>
  );
}

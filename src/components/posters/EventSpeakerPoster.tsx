import type { EventSpeakerData, EventSpeakerProfile } from '../../types';
import { Headshot } from '../shared/Headshot';
import { VenueImage } from '../shared/VenueImage';
import { EVENTS_COORDINATORS, TRAINING_COORDINATOR } from '../../data/defaults';

type Props = { data: EventSpeakerData };

export function EventSpeakerPoster({ data }: Props) {
  const hasTwo = !!data.speakerTwo;
  const dateLine = [data.date, data.time].filter((s) => s.trim()).join('  •  ');
  const isTraining = data.eventTypeLabel === 'TRAINING SESSION';

  return (
    <div className="flex h-full flex-col">
      <header className="flex flex-col items-center pt-7 pb-3">
        <img
          src="/logos/bni-infinity-white.png"
          alt="BNI Infinity"
          className="h-[88px] w-auto mb-2 select-none"
        />
        <h1 className="font-display text-[58px] leading-none tracking-wide text-white">
          {data.eventTypeLabel || 'GUEST SPEAKER'}
        </h1>
        <div className="mt-3 h-1 w-24 bg-bni-red rounded-full" />
      </header>

      {hasTwo ? (
        <div className="grid grid-cols-2 gap-8 px-12 mt-2">
          <SpeakerBlock speaker={data.speakerOne} size={210} />
          <SpeakerBlock speaker={data.speakerTwo!} size={210} />
        </div>
      ) : (
        <div className="mt-2">
          <SpeakerBlock speaker={data.speakerOne} size={260} centered />
        </div>
      )}

      {data.venueImageUrl && (
        <div className="mt-3">
          <VenueImage src={data.venueImageUrl} variant="small" />
        </div>
      )}

      {data.talkTitle && (
        <div className="px-10 text-center mt-3">
          <div className="font-display text-[40px] leading-tight tracking-wide">
            {`"${data.talkTitle}"`}
          </div>
        </div>
      )}

      {(dateLine || data.venue) && (
        <div className="text-center mt-3 px-6 leading-tight">
          {dateLine && (
            <div className="text-xl text-white/95">{dateLine}</div>
          )}
          {data.venue && (
            <div className="text-base text-white/85 mt-0.5">📍 {data.venue}</div>
          )}
        </div>
      )}

      <footer className="mt-auto border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="px-8 pt-3 pb-2">
          {isTraining ? (
            <div className="text-center">
              <div className="text-bni-gold text-[10px] tracking-[0.4em] font-semibold mb-0.5">
                TRAINING COORDINATOR
              </div>
              <div className="font-display text-lg tracking-wide">
                {TRAINING_COORDINATOR.name.toUpperCase()}
              </div>
              <div className="text-sm text-white/85">{TRAINING_COORDINATOR.phone}</div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2 text-center">
              {EVENTS_COORDINATORS.map((c) => (
                <div key={c.name}>
                  <div className="font-display text-sm tracking-wide leading-tight">
                    {c.name.toUpperCase()}
                  </div>
                  <div className="text-[11px] text-white/70 leading-tight">{c.phone}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between px-8 py-2.5">
          <div className="font-display text-base tracking-[0.3em] text-white">
            BNI INFINITY • COCHIN
          </div>
          <div className="text-xs text-white/70">{data.date}</div>
        </div>
      </footer>
    </div>
  );
}

function SpeakerBlock({
  speaker,
  size,
  centered = false,
}: {
  speaker: EventSpeakerProfile;
  size: number;
  centered?: boolean;
}) {
  const nameSize = size >= 250 ? 'text-3xl' : 'text-xl';
  const desigSize = size >= 250 ? 'text-base' : 'text-xs';
  const wrapper = centered
    ? 'mx-auto flex flex-col items-center text-center'
    : 'flex flex-col items-center text-center';
  return (
    <div className={wrapper}>
      <Headshot src={speaker.headshotUrl} size={size} ringWidth={size >= 250 ? 6 : 4} />
      {speaker.name && (
        <div className={`mt-3 font-display ${nameSize} tracking-wide leading-tight`}>
          {speaker.name}
        </div>
      )}
      {speaker.designation && (
        <div className={`text-bni-gold ${desigSize} tracking-[0.3em] mt-1 leading-tight`}>
          {speaker.designation}
        </div>
      )}
    </div>
  );
}

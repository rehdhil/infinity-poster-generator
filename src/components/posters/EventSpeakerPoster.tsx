import type { EventSpeakerData, EventSpeakerProfile } from '../../types';
import { PosterHeader } from '../shared/PosterHeader';
import { PosterFooter } from '../shared/PosterFooter';
import { Headshot } from '../shared/Headshot';
import { Divider } from '../shared/Divider';
import { VenueImage } from '../shared/VenueImage';
import { EVENTS_COORDINATORS, TRAINING_COORDINATOR } from '../../data/defaults';

type Props = { data: EventSpeakerData };

export function EventSpeakerPoster({ data }: Props) {
  const hasTwo = !!data.speakerTwo;
  const dateLine = [data.date, data.time].filter((s) => s.trim()).join('  •  ');

  return (
    <div className="flex h-full flex-col">
      <PosterHeader label={data.eventTypeLabel || 'GUEST SPEAKER'} />

      {hasTwo ? (
        <div className="grid grid-cols-2 gap-10 px-12 mt-2">
          <SpeakerBlock speaker={data.speakerOne} size={280} />
          <SpeakerBlock speaker={data.speakerTwo!} size={280} />
        </div>
      ) : (
        <SpeakerBlock speaker={data.speakerOne} size={380} centered />
      )}

      <Divider />

      {data.venueImageUrl && (
        <div className="mb-4">
          <VenueImage src={data.venueImageUrl} variant="small" />
        </div>
      )}

      {data.talkTitle && (
        <div className="px-10 text-center">
          <div className="font-display text-[68px] leading-tight tracking-wide">
            {`"${data.talkTitle}"`}
          </div>
        </div>
      )}

      {dateLine && (
        <div className="text-center mt-8 text-2xl text-white/95">{dateLine}</div>
      )}
      {data.venue && (
        <div className="text-center mt-2 text-xl text-white/85">📍 {data.venue}</div>
      )}

      <PosterFooter meetingDate={data.date}>
        {data.eventTypeLabel === 'TRAINING SESSION' ? (
          <div className="text-center">
            <div className="text-bni-gold text-[11px] tracking-[0.4em] font-semibold mb-1">
              TRAINING COORDINATOR
            </div>
            <div className="font-display text-2xl tracking-wide">
              {TRAINING_COORDINATOR.name.toUpperCase()}
            </div>
            <div className="text-base text-white/85 mt-0.5">{TRAINING_COORDINATOR.phone}</div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3 text-center">
            {EVENTS_COORDINATORS.map((c) => (
              <div key={c.name}>
                <div className="font-display text-xl tracking-wide">{c.name.toUpperCase()}</div>
                <div className="text-sm text-white/70">{c.phone}</div>
              </div>
            ))}
          </div>
        )}
      </PosterFooter>
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
  const nameSize = size >= 360 ? 'text-5xl' : 'text-3xl';
  const desigSize = size >= 360 ? 'text-xl' : 'text-base';
  const wrapper = centered ? 'mx-auto mt-2 flex flex-col items-center text-center' : 'flex flex-col items-center text-center';
  return (
    <div className={wrapper}>
      <Headshot src={speaker.headshotUrl} size={size} ringWidth={size >= 360 ? 8 : 6} />
      {speaker.name && (
        <div className={`mt-5 font-display ${nameSize} tracking-wide leading-tight`}>
          {speaker.name}
        </div>
      )}
      {speaker.designation && (
        <div className={`text-bni-gold ${desigSize} tracking-[0.3em] mt-2 leading-tight`}>
          {speaker.designation}
        </div>
      )}
    </div>
  );
}

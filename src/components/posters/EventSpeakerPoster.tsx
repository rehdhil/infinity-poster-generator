import type { EventSpeakerData } from '../../types';
import { PosterHeader } from '../shared/PosterHeader';
import { PosterFooter } from '../shared/PosterFooter';
import { Headshot } from '../shared/Headshot';
import { Divider } from '../shared/Divider';
import { VenueImage } from '../shared/VenueImage';
import { EVENTS_COORDINATORS } from '../../data/defaults';

type Props = { data: EventSpeakerData };

export function EventSpeakerPoster({ data }: Props) {
  return (
    <div className="flex h-full flex-col">
      <PosterHeader label={data.eventTypeLabel || 'GUEST SPEAKER'} />

      <div className="mx-auto mt-2">
        <Headshot src={data.headshotUrl} size={380} ringWidth={8} />
      </div>

      <div className="text-center mt-6">
        <div className="font-display text-5xl tracking-wide">
          {data.speakerName || 'SPEAKER NAME'}
        </div>
        <div className="text-bni-gold text-xl tracking-[0.3em] mt-2">
          {data.designation || 'Designation'}
        </div>
      </div>

      <Divider />

      {data.venueImageUrl && (
        <div className="mb-4">
          <VenueImage src={data.venueImageUrl} variant="small" />
        </div>
      )}

      <div className="px-10 text-center">
        <div className="font-display text-[68px] leading-tight tracking-wide">
          {data.talkTitle ? `"${data.talkTitle}"` : '[TALK TITLE]'}
        </div>
      </div>

      <div className="text-center mt-8 text-2xl text-white/95">
        {(data.date || '[DATE]') + '  •  ' + (data.time || '[TIME]')}
      </div>
      <div className="text-center mt-2 text-xl text-white/85">
        📍 {data.venue || '[VENUE]'}
      </div>

      <PosterFooter meetingDate={data.date}>
        <div className="grid grid-cols-3 gap-3 text-center">
          {EVENTS_COORDINATORS.map((c) => (
            <div key={c.name}>
              <div className="font-display text-xl tracking-wide">{c.name.toUpperCase()}</div>
              <div className="text-sm text-white/70">{c.phone}</div>
            </div>
          ))}
        </div>
      </PosterFooter>
    </div>
  );
}

import type { EventGeneralData } from '../../types';
import { PosterHeader } from '../shared/PosterHeader';
import { PosterFooter } from '../shared/PosterFooter';
import { VenueImage } from '../shared/VenueImage';
import { EVENTS_COORDINATORS, TRAINING_COORDINATOR } from '../../data/defaults';

type Props = { data: EventGeneralData };

export function EventGeneralPoster({ data }: Props) {
  const hasImage = Boolean(data.venueImageUrl);

  return (
    <div className="flex h-full flex-col">
      <PosterHeader label={data.categoryLabel || 'CHAPTER EVENT'} />

      {/* Hero: event title — grows taller when no venue image */}
      <div className="px-10 text-center mt-2">
        <h2
          className="font-display leading-[0.95] tracking-wide"
          style={{ fontSize: hasImage ? 96 : 120 }}
        >
          {data.title || 'EVENT TITLE'}
        </h2>
      </div>

      {hasImage && (
        <div className="mt-6">
          <VenueImage src={data.venueImageUrl} variant="large" />
        </div>
      )}

      <div className="text-center mt-8">
        <span className="inline-flex items-center rounded-full border border-bni-gold/40 bg-bni-gold/10 px-7 py-3 font-display text-2xl tracking-[0.3em] text-bni-gold">
          {(data.date || '[DATE]') + '  •  ' + (data.time || '[TIME]')}
        </span>
      </div>

      <div className="text-center mt-4 text-2xl text-white/95">
        📍 {data.venue || '[VENUE]'}
      </div>

      {data.description && (
        <div className="px-12 text-center mt-6 text-2xl leading-snug text-white/85">
          {data.description}
        </div>
      )}

      <PosterFooter meetingDate={data.date}>
        {data.categoryLabel === 'TRAINING' ? (
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

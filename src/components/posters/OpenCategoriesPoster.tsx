import type { OpenCategoriesData } from '../../types';
import { PosterHeader } from '../shared/PosterHeader';
import { PosterFooter } from '../shared/PosterFooter';

type Props = { data: OpenCategoriesData };

export function OpenCategoriesPoster({ data }: Props) {
  return (
    <div className="flex h-full flex-col">
      <PosterHeader label="OPEN CATEGORIES" />

      <p className="px-12 text-center font-display text-3xl tracking-widest text-bni-gold leading-tight">
        JOIN INDIA&apos;S FASTEST GROWING<br />BUSINESS NETWORK
      </p>

      {/* Hero: 12-pill 2×6 grid — ~55% of canvas */}
      <div className="grid grid-cols-2 gap-3 px-10 mt-8">
        {data.categories.map((cat, i) => (
          <div
            key={i}
            className="flex h-20 items-center justify-center rounded-xl border-2 border-bni-red/80 bg-black/40 px-4 text-center font-display text-4xl leading-tight tracking-wide text-white"
          >
            {cat || ' '}
          </div>
        ))}
      </div>

      <div className="mt-8 px-12 text-center">
        <h2 className="font-display text-5xl tracking-widest text-bni-red">
          REFER SOMEONE YOU KNOW
        </h2>
      </div>

      <div className="mt-auto mb-8 text-center font-display text-3xl tracking-[0.3em] text-white/85">
        VISIT US WED • {data.time}
      </div>

      <PosterFooter meetingDate={data.meetingDate}>
        <div className="text-center">
          <div className="font-display text-5xl tracking-wide text-white">
            {data.growthCoordinatorName}
          </div>
          <div className="text-bni-gold text-lg tracking-[0.25em] mt-1">
            CHAPTER GROWTH COORDINATOR
          </div>
          <div className="mt-3 text-2xl text-white/95">
            📞 {data.growthCoordinatorPhone}
          </div>
        </div>
      </PosterFooter>
    </div>
  );
}

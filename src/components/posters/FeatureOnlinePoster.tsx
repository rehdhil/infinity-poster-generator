import type { FeatureOnlineData, SpeakerProfile } from '../../types';
import { PosterHeader } from '../shared/PosterHeader';
import { PosterFooter } from '../shared/PosterFooter';
import { Headshot } from '../shared/Headshot';

type Props = { data: FeatureOnlineData };

export function FeatureOnlinePoster({ data }: Props) {
  return (
    <div className="flex h-full flex-col">
      <PosterHeader label="FEATURE PRESENTATION" />

      <div className="mx-auto rounded-full border border-bni-gold/40 bg-bni-gold/10 px-8 py-3 font-display text-2xl tracking-[0.3em] text-bni-gold">
        THIS WEDNESDAY • {data.date || '[DATE]'}
      </div>

      <div className="grid grid-cols-2 gap-12 px-12 mt-14">
        <SpeakerBlock speaker={data.speakerOne} />
        <SpeakerBlock speaker={data.speakerTwo} />
      </div>

      <div className="mt-auto mb-44 text-center font-display text-3xl tracking-[0.3em] text-bni-red">
        JOIN ONLINE • {data.time}
      </div>

      <PosterFooter meetingDate={data.date} />
    </div>
  );
}

function SpeakerBlock({ speaker }: { speaker: SpeakerProfile }) {
  return (
    <div className="flex flex-col items-center text-center">
      <Headshot src={speaker.headshotUrl} size={280} />
      <div className="mt-5 font-display text-3xl">
        {speaker.name || 'SPEAKER NAME'}
      </div>
      <div className="text-lg text-white/85">{speaker.business || 'Business'}</div>
      <div className="mt-1 text-bni-gold text-base tracking-[0.25em] font-semibold">
        {speaker.category || 'CATEGORY'}
      </div>
      <div className="mt-3 px-2 font-display text-2xl leading-tight">
        {speaker.topic ? `"${speaker.topic}"` : '[TOPIC]'}
      </div>
    </div>
  );
}

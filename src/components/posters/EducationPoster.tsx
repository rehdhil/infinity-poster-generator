import type { EducationData } from '../../types';
import { PosterHeader } from '../shared/PosterHeader';
import { PosterFooter } from '../shared/PosterFooter';
import { Headshot } from '../shared/Headshot';
import { Divider } from '../shared/Divider';

type Props = { data: EducationData };

export function EducationPoster({ data }: Props) {
  return (
    <div className="flex h-full flex-col">
      <PosterHeader label="EDUCATION SLOT" />

      <div className="mx-auto mt-4">
        <Headshot src={data.headshotUrl} size={420} ringWidth={8} />
      </div>

      <div className="text-center mt-6">
        <div className="font-display text-6xl tracking-wide">
          {data.speakerName || 'SPEAKER NAME'}
        </div>
        <div className="text-bni-gold text-xl tracking-[0.3em] mt-2">
          {data.speakerRole || 'Education Coordinator'}
        </div>
      </div>

      <Divider />

      <div className="text-center text-bni-gold tracking-[0.5em] text-xl mb-4 font-semibold">
        TOPIC
      </div>

      <div className="px-10 text-center">
        <div className="font-display text-[80px] leading-none tracking-wide">
          {data.topic ? `"${data.topic}"` : '[TOPIC]'}
        </div>
      </div>

      <div className="mt-auto mb-44 text-center font-display text-3xl tracking-[0.3em] text-bni-red">
        JOIN ONLINE • {data.time}
      </div>

      <PosterFooter meetingDate={data.date} />
    </div>
  );
}

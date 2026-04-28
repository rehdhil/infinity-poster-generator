import type { NetworkingData, HostProfile } from '../../types';
import { PosterHeader } from '../shared/PosterHeader';
import { PosterFooter } from '../shared/PosterFooter';
import { Headshot } from '../shared/Headshot';
import { Divider } from '../shared/Divider';

type Props = { data: NetworkingData };

export function NetworkingPoster({ data }: Props) {
  return (
    <div className="flex h-full flex-col">
      <PosterHeader label="NETWORKING SESSION" />

      <div className="text-center text-bni-gold tracking-[0.5em] text-xl mb-5 font-semibold">
        THIS WEEK&apos;S TOPIC
      </div>

      <div className="px-10 text-center">
        <div className="font-display text-[88px] leading-none tracking-wide">
          {data.topic ? `"${data.topic}"` : '[TOPIC]'}
        </div>
      </div>

      <Divider />

      <div className="text-center text-bni-gold tracking-[0.4em] text-xl mb-6 font-semibold">
        HOSTED BY
      </div>

      <div className="grid grid-cols-2 gap-12 px-12">
        <HostBlock host={data.hostOne} />
        <HostBlock host={data.hostTwo} />
      </div>

      <div className="text-center mt-4 italic text-white/85 text-xl">
        Online Networking Coordinators
      </div>

      <div className="mt-8 text-center font-display text-3xl tracking-[0.3em] text-bni-red">
        JOIN ONLINE • {data.time}
      </div>

      <PosterFooter meetingDate={data.date} />
    </div>
  );
}

function HostBlock({ host }: { host: HostProfile }) {
  return (
    <div className="flex flex-col items-center">
      <Headshot src={host.headshotUrl} size={260} />
      <div className="mt-4 font-display text-3xl text-center">
        {host.name || 'HOST NAME'}
      </div>
    </div>
  );
}

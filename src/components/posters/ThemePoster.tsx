import type { ThemeData } from '../../types';

type Props = { data: ThemeData };

export function ThemePoster({ data }: Props) {
  return (
    <div className="flex h-full flex-col">
      <header className="flex flex-col items-center pt-10 pb-4">
        <img
          src="/logos/bni-infinity-white.png"
          alt="BNI Infinity"
          className="h-[110px] w-auto mb-3 select-none"
        />
        <h1 className="font-display text-[78px] leading-none tracking-wide text-white">
          30-SECOND THEME
        </h1>
        <div className="mt-4 h-1.5 w-28 bg-bni-red rounded-full" />
      </header>

      <div className="text-center text-bni-gold tracking-[0.4em] text-base font-semibold mt-2">
        FOR THIS WEEK&apos;S MEETING
      </div>

      <div className="mx-10 mt-8 flex-1 flex flex-col justify-center">
        <div className="rounded-3xl border-2 border-bni-red/70 bg-black/40 px-8 py-10 text-center">
          <div className="font-display text-[72px] leading-[1.05] tracking-wide">
            {data.theme ? `"${data.theme}"` : '"YOUR 30-SEC THEME GOES HERE"'}
          </div>
          {data.description && (
            <div className="mt-5 text-lg text-white/85 leading-snug">
              {data.description}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-center font-display text-2xl tracking-[0.3em] text-bni-red">
        {(data.meetingDate || '[DATE]') + '  •  ' + data.time}
      </div>

      <footer className="mt-4 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="px-10 pt-4 pb-2 text-center">
          <div className="font-display text-2xl tracking-wide">
            {data.coordinatorName}
          </div>
          <div className="text-bni-gold text-xs tracking-[0.3em] mt-0.5">
            30 SEC THEME COORDINATOR
          </div>
          <div className="mt-1 text-base text-white/90">
            📞 {data.coordinatorPhone}
          </div>
        </div>
        <div className="flex items-center justify-between px-8 py-3">
          <div className="font-display text-lg tracking-[0.3em] text-white">
            BNI INFINITY • COCHIN
          </div>
          <div className="text-sm text-white/70">{data.meetingDate}</div>
        </div>
      </footer>
    </div>
  );
}

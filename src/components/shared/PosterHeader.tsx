type Props = { label: string };

export function PosterHeader({ label }: Props) {
  return (
    <header className="flex flex-col items-center pt-12 pb-8">
      <img
        src="/logos/bni-infinity-white.png"
        alt="BNI Infinity"
        className="h-32 w-auto mb-6 select-none"
      />
      <h1 className="font-display text-[110px] leading-none tracking-wide text-white text-center">
        {label}
      </h1>
      <div className="mt-5 h-1.5 w-32 bg-bni-red rounded-full" />
    </header>
  );
}

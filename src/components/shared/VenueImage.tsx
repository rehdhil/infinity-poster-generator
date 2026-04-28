type Props = {
  src?: string;
  /** "large" = 880×440 for Event General; "small" = 880×320 for Event Speaker. */
  variant: 'large' | 'small';
};

export function VenueImage({ src, variant }: Props) {
  if (!src) return null;
  const aspect = variant === 'large' ? '2 / 1' : '880 / 320';
  return (
    <div
      className="mx-auto relative overflow-hidden rounded-3xl border-2 border-bni-red/70 bg-neutral-900"
      style={{ width: 880, aspectRatio: aspect }}
    >
      <img
        src={src}
        alt="Venue"
        className="h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  );
}

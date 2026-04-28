type Props = {
  src: string;
  size: number;
  ringWidth?: number;
};

export function Headshot({ src, size, ringWidth = 6 }: Props) {
  return (
    <div
      style={{
        width: size,
        height: size,
        padding: ringWidth,
        background: '#CF2030',
        borderRadius: '9999px',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '9999px',
          overflow: 'hidden',
          background: '#1a1a1a',
          border: '2px solid #0A0A0A',
        }}
      >
        {src && (
          <img
            src={src}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        )}
      </div>
    </div>
  );
}

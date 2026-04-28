import { toPng } from 'html-to-image';
import { POSTER_HEIGHT, POSTER_WIDTH } from '../brand';

/**
 * An <img> with an empty/root src will reject html-to-image's load wait.
 * Identify these so they're either fixed at source or filtered out.
 */
function isBadSrc(img: HTMLImageElement): boolean {
  const raw = img.getAttribute('src') ?? '';
  if (raw === '' || raw === '/') return true;
  // `img.src` getter returns the resolved URL — if the resolved URL is just
  // the document origin (with optional trailing slash), the src was effectively empty.
  const resolved = img.src;
  if (resolved === window.location.origin || resolved === window.location.origin + '/') return true;
  if (resolved === window.location.href) return true;
  return false;
}

export async function exportPosterPng(
  node: HTMLElement,
  filename: string,
): Promise<void> {
  const imgs = Array.from(node.querySelectorAll('img'));
  const badImgs = imgs.filter(isBadSrc);

  // Log every image so the cause is visible in the console.
  console.log(
    '[exportPosterPng] image tree:',
    imgs.map((img, i) => ({
      idx: i,
      src: img.src,
      attrSrc: img.getAttribute('src'),
      bad: isBadSrc(img),
      complete: img.complete,
      naturalWidth: img.naturalWidth,
    })),
  );

  // Defensively hide any image with an empty/root src for the duration of the export.
  // This prevents html-to-image from failing the whole render because of a single bad node.
  const hidden: { el: HTMLImageElement; prev: string }[] = [];
  for (const img of badImgs) {
    hidden.push({ el: img, prev: img.style.display });
    img.style.display = 'none';
  }

  try {
    const dataUrl = await toPng(node, {
      width: POSTER_WIDTH,
      height: POSTER_HEIGHT,
      pixelRatio: 1,
      style: {
        transform: 'scale(1)',
        transformOrigin: 'top left',
      },
    });

    const link = document.createElement('a');
    link.download = filename.endsWith('.png') ? filename : `${filename}.png`;
    link.href = dataUrl;
    link.click();
  } finally {
    // Restore the hidden images.
    for (const { el, prev } of hidden) {
      el.style.display = prev;
    }
  }
}

import { toPng } from 'html-to-image';
import { POSTER_HEIGHT, POSTER_WIDTH } from '../brand';

export async function exportPosterPng(
  node: HTMLElement,
  filename: string,
): Promise<void> {
  // Diagnostic: log every image's src so we can find broken refs.
  const imgs = node.querySelectorAll('img');
  const srcSummary = Array.from(imgs).map((img, i) => ({
    idx: i,
    src: img.src,
    complete: img.complete,
    naturalWidth: img.naturalWidth,
  }));
  console.log('[exportPosterPng] images in export tree:', srcSummary);

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
}

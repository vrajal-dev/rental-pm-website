export const MARK: {
  size: number;
  radius: number;
  strokeWidth: number;
  roof: number[][];
  check: number[][];
};
export const WORDMARK_STROKE: number;
export const WORDMARK_ASCENT: number;
export const WORDMARK_TOP: number;
export const FULL_SCALE: number;
export const FULL_GAP: number;
export function layoutWordmark(
  text: string,
): { width: number; glyphs: { x: number; d: string }[] } | null;
export function fullLogoSize(
  text: string,
): { width: number; height: number } | null;

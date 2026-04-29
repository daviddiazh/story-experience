export const COLOR = {
  fuchsia: '#ff2d68',
  pink: '#f98403',
  black: '#000000',
  white: '#f2f2f2',
} as const;

export type ColorKey = keyof typeof COLOR;

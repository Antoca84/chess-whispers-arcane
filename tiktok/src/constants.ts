export const FPS = 30;

// Durate scene in frames
export const S1_FRAMES = 3 * FPS; // Hook
export const S2_FRAMES = 4 * FPS; // Problema 1-2
export const S3_FRAMES = 4 * FPS; // Problema 3-5
export const S4_FRAMES = 3 * FPS; // Simbolo archetipo
export const S5_FRAMES = 3 * FPS; // Trasformazione
export const S6_FRAMES = 3 * FPS; // CTA

// Transizioni (overlap tra scene adiacenti)
export const TRANS_FRAMES = 15;
export const NUM_TRANSITIONS = 5;

// Durata totale composizione (tenendo conto degli overlap)
export const TOTAL_FRAMES =
  S1_FRAMES + S2_FRAMES + S3_FRAMES + S4_FRAMES + S5_FRAMES + S6_FRAMES -
  TRANS_FRAMES * NUM_TRANSITIONS;
// = 600 - 75 = 525 frames = 17.5s

// Palette brand
export const COLOR = {
  BG: "#0a0a0a",
  GOLD: "#c9a84c",
  GOLD_BRIGHT: "#FFD700",
  WHITE: "#f8f9fa",
  MUTED: "#b8bcc0",
};

// Safe zone (in px su 1080x1920)
export const SAFE = {
  TOP: 160,
  BOTTOM: 180,
  SIDE: 70,
};

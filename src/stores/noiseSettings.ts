import { writable } from "svelte/store";
import type { NoiseSettings } from "../types";

export const availableSizes = [800, 1200, 2000, 2400, 4000];

const initialSettings: NoiseSettings = {
  scale: 0.007,
  redIntensity: 1,
  greenIntensity: 1,
  blueIntensity: 1,
  size: 800,
};

export const noiseSettings = writable(initialSettings);
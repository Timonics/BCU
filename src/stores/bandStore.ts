import { create } from "zustand";
import {
  BandState,
  BandDetails,
  BandMetadata,
} from "../interfaces/bands";

export const useBandStore = create<BandState>((set) => ({
  bands: [],
  setBands: (value: BandDetails[]) => set({ bands: value }),
  selectedBand: null,
  setSelectedBand: (value: BandDetails) => set({ selectedBand: value }),
  selectedBandId: null,
  setSelectedBandId: (value: number) => set({ selectedBandId: value }),
  totalBands: 0,
  setTotalBand: (value: number) => set({ totalBands: value }),
  bandMetadata: null,
  setBandMetadata: (value: Partial<BandMetadata>) => set({bandMetadata: value})
}));

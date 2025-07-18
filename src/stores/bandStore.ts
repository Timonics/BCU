import { create } from "zustand";
import {
  BandState,
  BandDetails,
} from "../interfaces/bands";

export const useBandStore = create<BandState>((set) => ({
  bands: [],
  setBands: (value: BandDetails[]) => set({ bands: value }),
  selectedBand: null,
  setSelectedBand: (value: BandDetails) => set({ selectedBand: value }),
  selectedBandId: null,
  setSelectedBandId: (value: string) => set({ selectedBandId: value }),
  totalBands: 0,
  setTotalBand: (value: number) => set({ totalBands: value }),
}));

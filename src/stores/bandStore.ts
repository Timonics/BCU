import { create } from "zustand";
import {
  BandState,
  BandDetails,
  SelectedBandDetails,
} from "../interfaces/bands";

export const useBandStore = create<BandState>((set) => ({
  bands: [],
  setBands: (value: BandDetails[]) => set({ bands: value }),
  selectedBand: null,
  setSelectedBand: (value: SelectedBandDetails) => set({ selectedBand: value }),
  selectedBandId: null,
  setSelectedBandId: (value: string) => set({ selectedBandId: value }),
  totalBands: 0,
  setTotalBand: (value: number) => set({ totalBands: value }),
}));

import { create } from "zustand";
import { UnitDetails, UnitState } from "../interfaces/unit";

export const useUnitStore = create<UnitState>((set) => ({
  units: [],
  setUnits: (value: UnitDetails[]) => set({ units: value }),
//   selectedBand: null,
//   setSelectedBand: (value: SelectedBandDetails) => set({ selectedBand: value }),
//   selectedBandId: null,
//   setSelectedBandId: (value: string) => set({ selectedBandId: value }),
  totalUnits: 0,
  setTotalUnits: (value: number) => set({ totalUnits: value }),
}));

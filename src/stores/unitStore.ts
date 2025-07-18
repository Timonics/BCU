import { create } from "zustand";
import { UnitDetails, UnitState } from "../interfaces/unit";

export const useUnitStore = create<UnitState>((set) => ({
  units: [],
  setUnits: (value: UnitDetails[]) => set({ units: value }),
  selectedUnit: null,
  setSelectedUnit: (value: UnitDetails) => set({ selectedUnit: value }),
  selectedUnitId: null,
  setSelectedUnitId: (value: number) => set({ selectedUnitId: value }),
  totalUnits: 0,
  setTotalUnits: (value: number) => set({ totalUnits: value }),
}));

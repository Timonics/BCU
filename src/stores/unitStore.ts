import { create } from "zustand";
import { SelectedUnitDetails, UnitDetails, UnitState } from "../interfaces/unit";

export const useUnitStore = create<UnitState>((set) => ({
  units: [],
  setUnits: (value: UnitDetails[]) => set({ units: value }),
  selectedUnit: null,
  setSelectedUnit: (value: SelectedUnitDetails) => set({ selectedUnit: value }),
  selectedUnitId: null,
  setSelectedUnitId: (value: string) => set({ selectedUnitId: value }),
  totalUnits: 0,
  setTotalUnits: (value: number) => set({ totalUnits: value }),
}));

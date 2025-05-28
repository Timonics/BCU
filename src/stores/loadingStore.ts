import { create } from "zustand";
import { LoadingState } from "../interfaces/state";

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  setIsLoading: (value: boolean) => set({ isLoading: value }),
}));

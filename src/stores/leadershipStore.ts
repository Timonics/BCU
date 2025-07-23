import { create } from 'zustand';
import { LeadershipPosition, LeadershipState } from '../interfaces/leadership';

export const useLeaderStore = create<LeadershipState>((set) => ({
  leaderPositions: [],
  setLeaderPositions: (value: Partial<LeadershipPosition[]>) =>
    set({ leaderPositions: value }),
}));

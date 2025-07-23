import { create } from 'zustand';
import {
  MemberDetails,
  MemberMetadata,
  MembershipState,
} from '../interfaces/member';

export const useMembershipStore = create<MembershipState>((set) => ({
  members: [],
  setMembers: (value: MemberDetails[]) => set({ members: value }),
  selectedBand: null,
  setSelectedBand: (value: string) => set({ selectedBand: value }),
  selectedUnit: null,
  setSelectedUnit: (value: string) => set({ selectedUnit: value }),
  selectedBaptismalStatus: null,
  setSelectedBaptismalStatus: (value: string) =>
    set({ selectedBaptismalStatus: value }),
  memberMetadata: null,
  setMemberMetadata: (value: Partial<MemberMetadata>) =>
    set({ memberMetadata: value }),
}));

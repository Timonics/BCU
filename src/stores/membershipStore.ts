import { create } from "zustand";
import { MemberDetails, MembershipState } from "../interfaces/member";

export const useMembershipStore = create<MembershipState>((set) => ({
  members: [],
  setMembers: (value: MemberDetails[]) => set({ members: value }),
}));

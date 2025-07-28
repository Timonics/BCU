import { AddBandDetails } from './bands';
import { MemberDetails } from './member';
import { AddUnit } from './unit';

export interface IState {
  isCreateNewBandOpen: boolean;
  setIsCreateNewBandOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateNewUnitOpen: boolean;
  setIsCreateNewUnitOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateNewClassOpen: boolean;
  setIsCreateNewClassOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addMemberDetails: Partial<MemberDetails>;
  setAddMembersDetails: React.Dispatch<
    React.SetStateAction<Partial<MemberDetails>>
  >;
  updateMemberDetails: Partial<MemberDetails>;
  setUpdateMembersDetails: React.Dispatch<
    React.SetStateAction<Partial<MemberDetails>>
  >;
  updateBandDetails: Partial<AddBandDetails>;
  setUpdateBandsDetails: React.Dispatch<
    React.SetStateAction<Partial<AddBandDetails>>
  >;
  updateUnitDetails: Partial<AddUnit>;
  setUpdateUnitsDetails: React.Dispatch<React.SetStateAction<Partial<AddUnit>>>;
  updateBandIsOpen: boolean;
  setUpdateBandIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateUnitIsOpen: boolean;
  setUpdateUnitIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedMember: MemberDetails | null;
  setSelectedMember: React.Dispatch<React.SetStateAction<MemberDetails | null>>;
  updateMemberIsOpen: boolean;
  setUpdateMemberIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  viewMemberIsOpen: boolean;
  setViewMemberIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteMemberIsOpen: boolean;
  setDeleteMemberIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateBandLeadershipIsOpen: boolean;
  setUpdateBandLeadershipIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateUnitLeadershipIsOpen: boolean;
  setUpdateUnitLeadershipIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateBandMemberIsOpen: boolean;
  setUpdateBandMemberIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateUnitMemberIsOpen: boolean;
  setUpdateUnitMemberIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  viewBandMemberIsOpen: boolean;
  setViewBandMemberIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  viewUnitMemberIsOpen: boolean;
  setViewUnitMemberIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateUnitMember: boolean;
  setUpdateUnitMember: React.Dispatch<React.SetStateAction<boolean>>
}

export interface LoadingState {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  memberLoading: boolean;
  setMemberLoading: (value: boolean) => void;
}

import { MemberDetails } from './member';

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
}

export interface LoadingState {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  memberLoading: boolean;
  setMemberLoading: (value: boolean) => void;
}

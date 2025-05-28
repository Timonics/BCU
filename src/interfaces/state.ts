export interface IState {
  isCreateNewBandOpen: boolean;
  setIsCreateNewBandOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateNewUnitOpen: boolean;
  setIsCreateNewUnitOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateNewClassOpen: boolean;
  setIsCreateNewClassOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LoadingState {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void
}

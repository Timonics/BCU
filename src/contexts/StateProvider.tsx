import React, { createContext, useState } from "react";
import { IState } from "../interfaces/state";
import { AppProps } from "../interfaces";

export const StateContext = createContext<IState | undefined>(undefined);

const StateProvider: React.FC<AppProps> = ({ children }) => {
  const [isCreateNewBandOpen, setIsCreateNewBandOpen] =
    useState<boolean>(false);
  const [isCreateNewUnitOpen, setIsCreateNewUnitOpen] =
    useState<boolean>(false);
  const [isCreateNewClassOpen, setIsCreateNewClassOpen] =
    useState<boolean>(false);
  const contextValues = {
    isCreateNewBandOpen,
    setIsCreateNewBandOpen,
    isCreateNewUnitOpen,
    setIsCreateNewUnitOpen,
    isCreateNewClassOpen,
    setIsCreateNewClassOpen
  };
  return (
    <StateContext.Provider value={contextValues}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

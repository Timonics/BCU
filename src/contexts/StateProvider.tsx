import React, { createContext, useState } from 'react';
import { IState } from '../interfaces/state';
import { AppProps } from '../interfaces';
import { MemberDetails } from '../interfaces/member';
import { AddBandDetails } from '../interfaces/bands';

export const StateContext = createContext<IState | undefined>(undefined);

const StateProvider: React.FC<AppProps> = ({ children }) => {
  const [isCreateNewBandOpen, setIsCreateNewBandOpen] =
    useState<boolean>(false);
  const [isCreateNewUnitOpen, setIsCreateNewUnitOpen] =
    useState<boolean>(false);
  const [isCreateNewClassOpen, setIsCreateNewClassOpen] =
    useState<boolean>(false);
  const [addMemberDetails, setAddMembersDetails] = useState<
    Partial<MemberDetails>
  >({});
  const [updateMemberDetails, setUpdateMembersDetails] = useState<
    Partial<MemberDetails>
  >({});
  const [updateBandDetails, setUpdateBandsDetails] = useState<
    Partial<AddBandDetails>
  >({});
  const [updateUnitDetails, setUpdateUnitsDetails] = useState<
    Partial<AddBandDetails>
  >({});
  const [selectedMember, setSelectedMember] = useState<MemberDetails | null>(
    null,
  );
  const [updateMemberIsOpen, setUpdateMemberIsOpen] = useState<boolean>(false);
  const [viewMemberIsOpen, setViewMemberIsOpen] = useState<boolean>(false);
  const [deleteMemberIsOpen, setDeleteMemberIsOpen] = useState<boolean>(false);
  const [updateBandIsOpen, setUpdateBandIsOpen] = useState<boolean>(false);
  const [updateUnitIsOpen, setUpdateUnitIsOpen] = useState<boolean>(false);
  const [updateBandLeadershipIsOpen, setUpdateBandLeadershipIsOpen] =
    useState<boolean>(false);
  const [updateUnitLeadershipIsOpen, setUpdateUnitLeadershipIsOpen] =
    useState<boolean>(false);

  const [viewBandMemberIsOpen, setViewBandMemberIsOpen] = useState(false);
  const [viewUnitMemberIsOpen, setViewUnitMemberIsOpen] = useState(false);
  const [updateBandMemberIsOpen, setUpdateBandMemberIsOpen] = useState(false);
  const [updateUnitMember, setUpdateUnitMember] = useState(false);
  const [updateUnitMemberIsOpen, setUpdateUnitMemberIsOpen] = useState(false);

  const contextValues = {
    isCreateNewBandOpen,
    setIsCreateNewBandOpen,
    isCreateNewUnitOpen,
    setIsCreateNewUnitOpen,
    isCreateNewClassOpen,
    setIsCreateNewClassOpen,
    addMemberDetails,
    setAddMembersDetails,
    updateMemberDetails,
    setUpdateMembersDetails,
    updateBandDetails,
    setUpdateBandsDetails,
    updateUnitDetails,
    setUpdateUnitsDetails,
    updateBandIsOpen,
    setUpdateBandIsOpen,
    updateUnitIsOpen,
    setUpdateUnitIsOpen,
    selectedMember,
    setSelectedMember,
    updateMemberIsOpen,
    setUpdateMemberIsOpen,
    viewMemberIsOpen,
    setViewMemberIsOpen,
    deleteMemberIsOpen,
    setDeleteMemberIsOpen,
    updateBandLeadershipIsOpen,
    setUpdateBandLeadershipIsOpen,
    updateUnitLeadershipIsOpen,
    setUpdateUnitLeadershipIsOpen,
    updateBandMemberIsOpen,
    setUpdateBandMemberIsOpen,
    updateUnitMemberIsOpen,
    setUpdateUnitMemberIsOpen,
    viewBandMemberIsOpen,
    setViewBandMemberIsOpen,
    viewUnitMemberIsOpen,
    setViewUnitMemberIsOpen,
    updateUnitMember,
    setUpdateUnitMember,
  };
  return (
    <StateContext.Provider value={contextValues}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

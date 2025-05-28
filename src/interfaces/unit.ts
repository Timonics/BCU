export interface UnitState {
  units: UnitDetails[];
  setUnits: (value: UnitDetails[]) => void;
  //   selectedBand: null,
  //   setSelectedBand: (value: SelectedBandDetails) => set({ selectedBand: value }),
  //   selectedBandId: null,
  //   setSelectedBandId: (value: string) => set({ selectedBandId: value }),
  totalUnits: number;
  setTotalUnits: (value: number) => void;
}

export interface UnitDetails {
  _id: string;
  id: string;
  name: string;
  date: string;
  member: [];
  head: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
  members: string[];
  leadership: string[];
}

export interface AllUnitsResponse {
  message: string;
  data: [
    {
      _id: string;
      id: string;
      name: string;
      date: string;
      member: [];
      head: string;
      createdAt: string;
      updatedAt: string;
      __v: 0;
      members: string[];
      leadership: string[];
    }
  ];
  meta: {
    total: number;
  };
}

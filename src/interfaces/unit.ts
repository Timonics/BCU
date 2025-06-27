export interface UnitState {
  units: UnitDetails[];
  setUnits: (value: UnitDetails[]) => void;
  selectedUnit: SelectedUnitDetails | null;
  setSelectedUnit: (value: SelectedUnitDetails) => void;
  selectedUnitId: string | null;
  setSelectedUnitId: (value: string) => void;
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
  __v: number;
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
      __v: number;
      members: string[];
      leadership: string[];
    }
  ];
  meta: {
    total: number;
  };
}

export interface AddUnit {
  
}

export interface UnitsResponse {
  message: string;
  data: {
    _id: string;
    id: string;
    name: string;
    date: string;
    member: [];
    head: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    members: [
      {
        _id: string;
        status: string;
        personalDetails: {
          gender: string;
          dob: string;
        };
      }
    ];
    leadership: [
      {
        _id: string;
        title: string;
        unit: string;
        member: {
          _id: string;
          personalDetails: {
            gender: string;
          };
        };
        tenureDate: string;
        createdAt: string;
        updatedAt: string;
        __v: 0;
      }
    ];
  };
}

export interface SelectedUnitDetails {
  _id: string;
  id: string;
  name: string;
  date: string;
  member: [];
  head: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  members: [
    {
      _id: string;
      status: string;
      personalDetails: {
        gender: string;
        dob: string;
      };
    }
  ];
  leadership: [
    {
      _id: string;
      title: string;
      unit: string;
      member: {
        _id: string;
        personalDetails: {
          gender: string;
        };
      };
      tenureDate: string;
      createdAt: string;
      updatedAt: string;
      __v: 0;
    }
  ];
}

export interface BandState {
  bands: BandDetails[];
  setBands: (value: BandDetails[]) => void;
  selectedBand: SelectedBandDetails | null;
  setSelectedBand: (value: SelectedBandDetails) => void;
  selectedBandId: string | null;
  setSelectedBandId: (value: string) => void;
  totalBands: number;
  setTotalBand: (value: number) => void;
}

export interface AddBandDetails {
  id: string;
  name: string;
  gender: string;
  date?: string;
  captain: string;
}

export interface BandDetails {
  _id: string;
  id: string;
  name: string;
  gender: string;
  date: string;
  member?: string[];
  members?: string[];
  captain: string;
  leadership?: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AllBandsResponse {
  message: string;
  data: [
    {
      _id: string;
      id: string;
      name: string;
      gender: string;
      date: string;
      member?: string[];
      members?: string[];
      captain: string;
      leadership?: string[];
      createdAt: string;
      updatedAt: string;
      __v: number;
    }
  ];
  meta: {
    total: number;
  };
}

export interface BandResponse {
  message: string;
  data: {
    _id: string;
    id: string;
    name: string;
    gender: string;
    date: string;
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
    captain: string;
    leadership: [
      {
        _id: string;
        title: string;
        band: string;
        member: {
          _id: string;
          personalDetails: {
            gender: string;
          };
        };
        tenureDate: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
      }
    ];
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export interface SelectedBandDetails {
  _id: string;
  id: string;
  name: string;
  gender: string;
  date: string;
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
  captain: string;
  leadership: [
    {
      _id: string;
      title: string;
      band: string;
      member: {
        _id: string;
        personalDetails: {
          gender: string;
        };
      };
      tenureDate: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    }
  ];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

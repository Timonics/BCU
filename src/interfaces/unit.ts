import { MemberDetails } from './member';

export interface UnitState {
  units: UnitDetails[];
  setUnits: (value: UnitDetails[]) => void;
  selectedUnit: UnitDetails | null;
  setSelectedUnit: (value: UnitDetails) => void;
  selectedUnitId: string | null;
  setSelectedUnitId: (value: string) => void;
  totalUnits: number;
  setTotalUnits: (value: number) => void;
}

export interface AddUnit {
  name: string;
  foundingDate: string;
  unitHeadId: number;
}

export interface UnitDetails {
  id: number;
  name: string;
  foundingDate: string;
  unitHead: Partial<MemberDetails>;
}

export interface UnitsResponse {
  statusCode: number;
  message: string;
  data: UnitDetails[];
  timestamp: string;
}

export interface UnitResponse extends Omit<UnitsResponse, 'data'> {
  data: UnitDetails;
}

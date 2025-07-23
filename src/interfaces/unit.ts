import { MemberDetails } from './member';

export interface UnitState {
  units: UnitDetails[];
  setUnits: (value: UnitDetails[]) => void;
  selectedUnit: UnitDetails | null;
  setSelectedUnit: (value: UnitDetails) => void;
  selectedUnitId: number | null;
  setSelectedUnitId: (value: number) => void;
  totalUnits: number;
  setTotalUnits: (value: number) => void;
  unitMetadata: Partial<UnitMetadata> | null;
  setUnitMetadata: (value: Partial<UnitMetadata>) => void;
}

export interface AddUnit {
  name: string;
  foundingDate: string;
  unitHeadId?: number;
}

export interface UnitMetadata {
  totalPages: number;
  currentPage: number;
  limit: number;
  totalUnits: number;
  totalUnitLeaders: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export interface UnitDetails {
  id: number;
  name: string;
  foundingDate: string;
  unitHead: Partial<MemberDetails>;
  members?: MemberDetails[];
}

export interface UnitsResponse {
  statusCode: number;
  message: string;
  data:
    | {
        units: UnitDetails[];
        meta: UnitMetadata;
      }
    | string;
  timestamp: string;
}

export interface UnitResponse extends Omit<UnitsResponse, 'data'> {
  data: UnitDetails;
}

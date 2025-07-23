import { BandDetails } from './bands';
import { LeadershipPosition } from './leadership';
import { UnitDetails } from './unit';

export interface MembershipState {
  members: MemberDetails[];
  setMembers: (value: MemberDetails[]) => void;
  selectedBand: string | null;
  setSelectedBand: (value: string) => void;
  selectedUnit: string | null;
  setSelectedUnit: (value: string) => void;
  selectedBaptismalStatus: string | null;
  setSelectedBaptismalStatus: (value: string) => void;
  memberMetadata: Partial<MemberMetadata> | null;
  setMemberMetadata: (value: Partial<MemberMetadata>) => void;
}

export interface Member {
  id: number;
  name: string;
  gender: string;
  band: string;
  unit: string;
  class: string;
  status: string;
}

export interface MemberDetails {
  id: number;
  firstName: string;
  lastName: string;
  otherNames: string;
  gender: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  maritalStatus: string;
  stateOfOrigin: string;
  address: string;
  country: string;
  residentialState: string;
  city: string;
  localGovernmentArea: string;
  status: string;
  nextOfKinFullName: string;
  nextOfKinRelationship: string;
  nextOfKinPhoneNumber: string;
  baptismalStatus: boolean;
  locationOfBaptism: string;
  institutionName: string;
  qualification: string;
  courseOfStudy: string;
  startDate: string;
  endDate: string;
  professionalQualifications: string;
  vocationalQualification: string;
  placeOfWork: string;
  officeAddress: string;
  workState: string;
  workLGA: string;
  workCountry: string;
  bandId: number;
  unitId: number;
  band: Partial<BandDetails> | null;
  unit: Partial<UnitDetails> | null;
  leadingBandId: number;
  leadingBand: Partial<BandDetails> | null;
  leadingPositionId: number;
  leadershipPosition: LeadershipPosition | null;
}

export interface MemberMetadata {
  totalPages: number;
  currentPage: number;
  limit: number;
  totalMembers: number;
  totalMaleMembers: number;
  totalFemaleMembers: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export interface MemberResponse {
  statusCode: number;
  message: string;
  data:
    | {
        members: MemberDetails[];
        meta: MemberMetadata;
      }
    | string;
  timestamp: string;
}

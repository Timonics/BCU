import { MemberDetails, MemberMetadata } from './member';

export interface BandState {
  bands: BandDetails[];
  setBands: (value: BandDetails[]) => void;
  selectedBand: BandDetails | null;
  setSelectedBand: (value: BandDetails) => void;
  selectedBandId: number | null;
  setSelectedBandId: (value: number) => void;
  totalBands: number;
  setTotalBand: (value: number) => void;
  bandMetadata: Partial<BandMetadata> | null;
  setBandMetadata: (value: Partial<BandMetadata>) => void;
}

export interface AddBandDetails {
  name: string;
  gender: string;
  foundingDate: string;
  bandCaptainId?: number;
}

export interface BandMetadata
  extends Omit<MemberMetadata, 'totalMembers'>,
    Omit<MemberMetadata, 'totalMaleMembers'>,
    Omit<MemberMetadata, 'totalFemaleMembers'> {
  totalBands: number;
  totalFemaleBands: number;
  totalMaleBands: number;
  totalBandLeaders: number;
}

export interface BandsResponse {
  statusCode: number;
  message: string;
  data:
    | {
        bands: BandDetails[];
        meta: BandMetadata;
      }
    | string;
  timestamp: string;
}

export interface BandResponse extends Omit<BandsResponse, 'data'> {
  data: BandDetails;
}

export interface BandDetails {
  id: number;
  name: string;
  gender: string;
  foundingDate: string;
  members?: MemberDetails[];
  bandCaptain?: MemberDetails | null;
}

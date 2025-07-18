import { MemberDetails } from './member';

export interface BandState {
  bands: BandDetails[];
  setBands: (value: BandDetails[]) => void;
  selectedBand: BandDetails | null;
  setSelectedBand: (value: BandDetails) => void;
  selectedBandId: string | null;
  setSelectedBandId: (value: string) => void;
  totalBands: number;
  setTotalBand: (value: number) => void;
}

export interface AddBandDetails {
  name: string;
  gender: string;
  foundingDate: string;
  bandCaptainId?: number;
}

export interface BandsResponse {
  statusCode: number;
  message: string;
  data: BandDetails[];
  timestamp: string
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
